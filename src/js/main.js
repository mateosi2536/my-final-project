import '../css/style.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Hero, initHero } from './components/Hero.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
  </main>
  ${Footer()}
`

initHeader()
initHero()
