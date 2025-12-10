import '../css/style.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Hero, initHero } from './components/Hero.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${AboutSection()}
  </main>
  ${Footer()}
`

initHeader()
initHero()

function AboutSection() {
  return `
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Why Choose PlenoNet?</h2>
            <p>Experience lightning-fast fiber optic internet with speeds up to 2 Gbps. We provide reliable, high-speed connectivity for homes and businesses across Mexico.</p>
            <ul class="about-features">
              <li>🏠 Residential plans starting at $29.99/month</li>
              <li>🏢 Business solutions with dedicated support</li>
              <li>⚡ Fiber optic technology for maximum speed</li>
              <li>🔒 99.9% uptime guarantee</li>
              <li>📞 24/7 customer support</li>
            </ul>
            <a href="/plans.html" class="cta-link">View All Plans →</a>
          </div>
          <div class="about-image">
            <div class="speed-indicator">
              <div class="speed-circle">
                <span class="speed-number">1000</span>
                <span class="speed-unit">Mbps</span>
              </div>
              <p>Fiber Speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
