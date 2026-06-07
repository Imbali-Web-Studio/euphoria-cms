const { default: StoryblokClient } = require('storyblok-js-client')
const fs = require('fs')
const path = require('path')

const SPACE_ID = '293015884811956'
const STORY_ID = '184654529881945'
const MANAGEMENT_TOKEN = 'sb_pat_OcKA_fzcWa-7xgXbvo1Jz1DNJ2kHWJzGetn6Z9i6Ge0'

const Storyblok = new StoryblokClient({ oauthToken: MANAGEMENT_TOKEN })

const csvFile = process.argv[2]
if (!csvFile) {
  console.error('Usage: node scripts/import-menu.js path/to/menu.csv')
  process.exit(1)
}

const { parse } = require('csv-parse/sync')
const fileContent = fs.readFileSync(path.resolve(csvFile), 'utf8')
const rows = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true })

async function run() {
  try {
    const { data } = await Storyblok.get(`spaces/${SPACE_ID}/stories/${STORY_ID}`)
    const story = data.story
    const body = story.content.body || []

    const newItems = rows.map(row => ({
      component: 'menu_item',
      name: row.name,
      description: row.description,
      price: row.price,
      category: row.category,
    }))

    const filtered = body.filter(b => b.component !== 'menu_item')
    story.content.body = [...filtered, ...newItems]

    await Storyblok.put(`spaces/${SPACE_ID}/stories/${STORY_ID}`, {
      story: { content: story.content },
      publish: 1,
    })

    console.log(`✅ Successfully imported ${newItems.length} menu items!`)
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

run()