export default function EventsSection({ events = [] }) {
    return (
      <section className="events-section section" id="events">
        <div className="section-inner">
          <p className="section-label centered fade-up">What's Happening</p>
          <h2 className="section-heading text-center fade-up d1">Upcoming <span>Events</span></h2>
          <div className="gold-divider" aria-hidden="true"></div>
  
          <div className="events-grid">
            {events.length > 0 ? events.map((event, i) => (
              <article className={`event-card fade-up d${(i % 3) + 1}`} key={i}>
                <span className="event-badge">{event.badge}</span>
                {event.image?.filename && (
                  <div className="event-img-wrap">
                    <img
                      className="event-img"
                      src={event.image.filename}
                      alt={event.title}
                      width={800}
                      height={450}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="event-body">
                  <p className="event-date">{event.date}{event.time ? ` · ${event.time}` : ''}</p>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                </div>
              </article>
            )) : (
              <p style={{ color: 'var(--gold)', opacity: 0.6 }}>No events yet.</p>
            )}
          </div>
        </div>
      </section>
    )
  }