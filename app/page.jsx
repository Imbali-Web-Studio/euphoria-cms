import Storyblok from '../lib/storyblok'
import Navbar from '../components/Navbar'
import MenuSection from '../components/MenuSection'
import GallerySection from '../components/GallerySection'
import EventsSection from '../components/EventsSection'
import HeroVideo from '../components/HeroVideo'

async function getContent() {
  try {
    const { data } = await Storyblok.get('cdn/stories/home', {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    })
    console.log('Storyblok body:', JSON.stringify(data.story.content.body, null, 2))
    return data.story.content
  } catch (e) {
    console.error('Storyblok error:', e.message)
    return {}
  }
}

export default async function Home() {
  const content = await getContent()
  const body = content.body || []
  const menuItems = body.filter(item => item.component === 'menu_item')
  const galleryImages = body.filter(item => item.component === 'gallery_image')
  const events = body.filter(item => item.component === 'event')

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="hero section" id="hero">
          <div className="hero-bg" aria-hidden="true">
            <HeroVideo />
          </div>
          <div className="hero-content">
            <h1 className="hero-subtitle">Lounge, Bar &amp; Restaurant</h1>
            <p className="hero-tagline">Humble, TX · Upscale Atmosphere for the Mature</p>
            <div className="hero-actions">
              <a href="#reservation" className="btn-primary"><span>Reserve a Table</span></a>
              <a href="#menu" className="btn-ghost">View Menu</a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section section" id="about">
          <div className="section-inner">
            <div className="about-grid">
              <div className="about-img-wrap fade-up">
                <img className="about-img" src="/images/euphoria-about.png" alt="Euphoria lounge interior" width={900} height={1125} loading="lazy" />
                <div className="about-img-accent" aria-hidden="true"></div>
                <div className="about-img-badge"><strong>21+</strong><span>Premium</span><span>Experience</span></div>
              </div>
              <div className="about-text">
                <p className="section-label fade-up">Our Story</p>
                <h2 className="section-heading fade-up d1">Where <span>Luxury</span><br />Meets the Night</h2>
                <div className="gold-divider left" aria-hidden="true"></div>
                <p className="body-copy fade-up d2">Euphoria is more than a lounge — it's a sanctuary. Nestled in the Humble area of Houston, we've crafted an environment where sophistication and soul come together.</p>
                <p className="body-copy fade-up d3">Whether you're celebrating a milestone, hosting a corporate gathering, or simply unwinding in elevated style, Euphoria delivers an experience that resonates long after the night ends.</p>
                <div className="about-stats fade-up d4">
                  <div className="about-stat"><strong>500+</strong><span>Capacity</span></div>
                  <div className="about-stat"><strong>12+</strong><span>Signature Cocktails</span></div>
                  <div className="about-stat"><strong>5★</strong><span>Rated</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOURS */}
        <section className="hours-section section" id="hours">
          <div className="section-inner">
            <p className="section-label centered fade-up">We're Open</p>
            <h2 className="section-heading text-center fade-up d1">Hours of <span>Operation</span></h2>
            <div className="gold-divider" aria-hidden="true"></div>
            <div className="hours-grid fade-up d2">
              <div className="hours-card"><div className="hours-day">Mon–Tue</div><div className="hours-closed">Closed</div></div>
              <div className="hours-divider" aria-hidden="true"></div>
              <div className="hours-card"><div className="hours-day">Wed–Thu</div><div className="hours-time">8:00 PM – 2:00 AM<span className="hours-sub">Grown &amp; Sexy Vibes</span></div></div>
              <div className="hours-divider" aria-hidden="true"></div>
              <div className="hours-card"><div className="hours-day">Fri–Sat</div><div className="hours-time">7:00 PM – 3:00 AM<span className="hours-sub">Full Entertainment &amp; Bottle Service</span></div></div>
            </div>
            <p className="hours-note fade-up d3">Sunday Brunch — Last Sunday of each month, 12PM–4PM<br /><a href="tel:+18004602686">+1 800-460-2686</a></p>
          </div>
        </section>

        {/* MENU - Storyblok */}
        <MenuSection menuItems={menuItems} />

        {/* EVENTS - Storyblok */}
        <EventsSection events={events} />

        {/* PRIVATE EVENTS */}
        <section className="parties-section section" id="parties">
          <div className="parties-bg" aria-hidden="true"></div>
          <div className="section-inner">
            <div className="parties-layout">
              <div className="parties-content">
                <p className="section-label fade-up">Exclusive Gatherings</p>
                <h2 className="section-heading fade-up d1">Private Events<br />&amp; <span>Parties</span></h2>
                <div className="gold-divider left" aria-hidden="true"></div>
                <p className="body-copy fade-up d2">Euphoria provides the perfect upscale backdrop for your most memorable occasions.</p>
                <ul className="parties-list fade-up d3">
                  <li>Birthday &amp; Milestone Celebrations</li>
                  <li>Corporate &amp; Company Events</li>
                  <li>Graduation &amp; School Parties</li>
                  <li>Networking &amp; Social Mixers</li>
                  <li>Holiday &amp; Seasonal Parties</li>
                  <li>VIP Bottle Service Buyouts</li>
                </ul>
              </div>
              <div className="parties-visual fade-up d2">
                <img src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=900&auto=format&fit=crop&q=80" alt="Private event at Euphoria" width={900} height={1125} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="parties-cards">
            <article className="parties-card fade-up d1">
              <div className="parties-card-icon"><i className="fa-solid fa-champagne-glasses"></i></div>
              <h3>VIP Bottle Service</h3>
              <p>Dedicated server, custom ice luges, premium bottle selections with full sparkler presentation.</p>
            </article>
            <article className="parties-card fade-up d2">
              <div className="parties-card-icon"><i className="fa-solid fa-cake-candles"></i></div>
              <h3>Birthday Packages</h3>
              <p>Signature cake, complimentary bottle, reserved VIP seating, and personalized décor.</p>
            </article>
            <article className="parties-card fade-up d3">
              <div className="parties-card-icon"><i className="fa-solid fa-building"></i></div>
              <h3>Corporate Events</h3>
              <p>Full buyouts, AV equipment, catered menus, and custom branding opportunities available.</p>
            </article>
          </div>
        </section>

        {/* GALLERY - Storyblok */}
        <GallerySection galleryImages={galleryImages} />

        {/* RESERVATION */}
        <section className="reservation-section section" id="reservation">
          <div className="section-inner">
            <div className="reservation-inner">
              <div className="reservation-info fade-up">
                <p className="section-label">Join Us</p>
                <h2>Reserve Your <span>Table</span><br />or VIP Section</h2>
                <p className="body-copy">Secure your spot at one of Houston's most sought-after lounge experiences.</p>
                <div className="reservation-contact">
                  <div className="res-contact-item"><div className="res-contact-icon"><i className="fa-solid fa-location-dot"></i></div><span>Humble Area, Houston, TX</span></div>
                  <div className="res-contact-item"><div className="res-contact-icon"><i className="fa-solid fa-phone"></i></div><a href="tel:+18004602686">+1 800-460-2686</a></div>
                  <div className="res-contact-item"><div className="res-contact-icon"><i className="fa-brands fa-instagram"></i></div><a href="https://instagram.com/euphorialoungevibez" target="_blank" rel="noopener noreferrer">@euphorialoungevibez</a></div>
                </div>
              </div>
              <form className="res-form fade-up d2" id="reservation-form">
                <div className="form-row">
                  <div className="form-group"><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" placeholder="Your name" required /></div>
                  <div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" placeholder="(713) 000-0000" /></div>
                </div>
                <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" placeholder="your@email.com" required /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="date">Preferred Date</label><input type="date" id="date" name="date" /></div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <select id="time" name="time">
                      <option value="">Select time</option>
                      <option value="7pm">7:00 PM</option>
                      <option value="8pm">8:00 PM</option>
                      <option value="9pm">9:00 PM</option>
                      <option value="10pm">10:00 PM</option>
                      <option value="11pm">11:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select id="guests" name="guests">
                      <option value="">Select</option>
                      <option value="1-2">1–2</option>
                      <option value="3-5">3–5</option>
                      <option value="6-10">6–10</option>
                      <option value="11-20">11–20</option>
                      <option value="21-50">21–50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-type">Event Type</label>
                    <select id="event-type" name="event-type">
                      <option value="general">General Reservation</option>
                      <option value="birthday">Birthday Celebration</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="vip">VIP Bottle Service</option>
                      <option value="buyout">Private Buyout</option>
                    </select>
                  </div>
                </div>
                <div className="form-group"><label htmlFor="notes">Special Requests</label><textarea id="notes" name="notes" placeholder="Bottle service, décor, dietary needs, etc."></textarea></div>
                <div className="form-submit"><button type="submit" className="btn-primary btn-full"><span>Submit Reservation Request</span></button></div>
              </form>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section section" id="testimonials">
          <div className="section-inner">
            <p className="section-label centered fade-up">Guest Reviews</p>
            <h2 className="section-heading text-center fade-up d1">What Our <span>Guests</span> Say</h2>
            <div className="gold-divider" aria-hidden="true"></div>
            <div className="testimonials-grid">
              <article className="testimonial-card fade-up d1">
                <div className="testimonial-quote">"</div>
                <blockquote className="testimonial-text">Euphoria is hands down the most elevated lounge experience in Houston. The ambiance, the service, the cocktails — everything was perfection.</blockquote>
                <div className="testimonial-author"><div className="testimonial-avatar">N</div><div><div className="testimonial-name">Nia T.</div><div className="testimonial-location">Houston, TX</div><div className="testimonial-stars">★★★★★</div></div></div>
              </article>
              <article className="testimonial-card fade-up d2">
                <div className="testimonial-quote">"</div>
                <blockquote className="testimonial-text">Hosted my company's end-of-year event here and the team went above and beyond. The private room was stunning and the food had everyone talking.</blockquote>
                <div className="testimonial-author"><div className="testimonial-avatar">M</div><div><div className="testimonial-name">Marcus L.</div><div className="testimonial-location">Humble, TX</div><div className="testimonial-stars">★★★★★</div></div></div>
              </article>
              <article className="testimonial-card fade-up d3">
                <div className="testimonial-quote">"</div>
                <blockquote className="testimonial-text">Birthday treatment was royal. From the custom setup to the bottle parade, every detail was flawless.</blockquote>
                <div className="testimonial-author"><div className="testimonial-avatar">J</div><div><div className="testimonial-name">Jasmine R.</div><div className="testimonial-location">Katy, TX</div><div className="testimonial-stars">★★★★★</div></div></div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#hero" className="nav-logo"><img src="/images/logo.png" alt="Euphoria" /></a>
              <p>An upscale lounge experience crafted for the mature and distinguished. Located in the Humble area of Houston, TX.</p>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com/euphorialoungevibez" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#parties">Private Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reservation">Reservations</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hours</h4>
              <ul>
                <li>Mon–Tue: Closed</li>
                <li>Wed–Thu: 8PM–2AM</li>
                <li>Fri–Sat: 7PM–3AM</li>
                <li>Sun Brunch: 12PM–4PM*</li>
              </ul>
              <p className="footer-note">*Last Sunday of month</p>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+18004602686">+1 800-460-2686</a></li>
                <li><a href="https://instagram.com/euphorialoungevibez" target="_blank" rel="noopener noreferrer">@euphorialoungevibez</a></li>
                <li>Humble Area, Houston, TX</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Euphoria Lounge, Bar &amp; Restaurant · Houston, TX · All Rights Reserved</p>
            <p><a href="#">Privacy Policy</a> · <a href="#">21+ Venue</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}