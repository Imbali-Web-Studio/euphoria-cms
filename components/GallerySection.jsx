export default function GallerySection({ galleryImages = [] }) {
    const gridClasses = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8']
  
    return (
      <section className="gallery-section section" id="gallery">
        <div className="section-inner">
          <p className="section-label centered fade-up">Inside Euphoria</p>
          <h2 className="section-heading text-center fade-up d1">The <span>Experience</span></h2>
          <div className="gold-divider" aria-hidden="true"></div>
        </div>
  
        <div className="gallery-wrap">
          <div className="gallery-grid">
            {galleryImages.length > 0 ? galleryImages.map((item, i) => (
              <div
                key={i}
                className={`gallery-item ${gridClasses[i % gridClasses.length]} fade-up`}
              >
                {item.image?.filename && (
                  <img
                    src={item.image.filename}
                    alt={item.alt || 'Euphoria gallery image'}
                    width={900}
                    height={600}
                    loading="lazy"
                  />
                )}
              </div>
            )) : (
              <div style={{ color: 'var(--gold)', padding: '2rem', opacity: 0.6 }}>
                No gallery images yet.
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }