'use client'
import { useState } from 'react'

const TABS = [
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'cocktails', label: 'Cocktails' },
  { key: 'bottles', label: 'Bottles' },
]

export default function MenuSection({ menuItems = [] }) {
  const [activeTab, setActiveTab] = useState('appetizers')

  const filtered = menuItems.filter(item => item.category === activeTab)

  return (
    <section className="menu-section section" id="menu">
      <div className="section-inner">
        <p className="section-label centered fade-up">Culinary Experience</p>
        <h2 className="section-heading text-center fade-up d1">The <span>Menu</span></h2>
        <div className="gold-divider" aria-hidden="true"></div>

        <div className="menu-tabs fade-up d2" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`menu-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-panel active">
          <h3 className="menu-panel-title">
            {TABS.find(t => t.key === activeTab)?.label}
          </h3>
          <div className="menu-grid">
            {filtered.length > 0 ? filtered.map((item, i) => (
              <article className="menu-item fade-up" key={i}>
                <div className="menu-item-info">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </article>
            )) : (
              <p style={{ color: 'var(--gold)', opacity: 0.6 }}>No items in this category yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}