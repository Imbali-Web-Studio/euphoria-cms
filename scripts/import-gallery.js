const { default: StoryblokClient } = require('storyblok-js-client')
const fs = require('fs')
const path = require('path')

const SPACE_ID = '293015884811956'
const STORY_ID = '184654529881945'
const MANAGEMENT_TOKEN = 'sb_pat_OcKA_fzcWa-7xgXbvo1Jz1DNJ2kHWJzGetn6Z9i6Ge0'

const Storyblok = new StoryblokClient({ oauthToken: MANAGEMENT_TOKEN })

const csvFile = process.argv[2]
if (!csvFile) {
  console.error('Usage: node scripts/import-gallery.js path/to/gallery.csv')
  process.exit(1)
}

const lines = fs.readFileSync(path.resolve(csvFile), 'utf8').trim().split('\n')
const headers = lines[0].split(',').map(h => h.trim())
const rows = lines.slice(1).map(line => {
  const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
  return Object.fromEntries(headers.map((h, i) => [h, values[i]]))
})

async function run() {
  try {
    const { data } = await Storyblok.get(`spaces/${SPACE_ID}/stories/${STORY_ID}`)
    const story = data.story
    const body = story.content.body || []

    const newItems = rows.map(row => ({
      component: 'gallery_image',
      image: { filename: row.image_url, alt: row.alt },
      alt: row.alt,
    }))

    const filtered = body.filter(b => b.component !== 'gallery_image')
    story.content.body = [...filtered, ...newItems]

    await Storyblok.put(`spaces/${SPACE_ID}/stories/${STORY_ID}`, {
      story: { content: story.content },
      publish: 1,
    })

    console.log(`✅ Successfully imported ${newItems.length} gallery images!`)
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

run()