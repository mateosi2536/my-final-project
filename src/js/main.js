import '../css/style.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    <div style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
      <h1 style="font-size: 48px; margin-bottom: 20px; color: var(--primary-color);">Bienvenido a PlenoNet</h1>
      <p style="font-size: 20px; color: var(--text-gray); margin-bottom: 30px;">Internet de alta velocidad para tu hogar y negocio</p>
      <p style="line-height: 1.8; color: var(--text-gray);">
        Experimenta la mejor conexión de fibra óptica con velocidades de hasta 1 Gbps. 
        Navega, trabaja y disfruta del entretenimiento sin interrupciones.
      </p>
    </div>
  </main>
  ${Footer()}
`

initHeader()
