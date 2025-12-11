import '../css/style.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { ISPInfoSection } from './components/ISPInfo.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${ISPInfoSection()}
  </main>
  ${Footer()}
`

initHeader()
initISPInfo()

function initISPInfo() {
  const getInfoBtn = document.getElementById('get-isp-info')

  if (getInfoBtn) {
    getInfoBtn.addEventListener('click', getISPInfo)
  }

  loadSavedISPInfo()
}

async function getISPInfo() {
  const status = document.getElementById('isp-status')
  const getInfoBtn = document.getElementById('get-isp-info')

  try {
    getInfoBtn.disabled = true
    status.textContent = 'Getting your internet information...'

    const response = await fetch('https://ipinfo.io/json')
    const data = await response.json()

    if (response.ok) {
      updateISPInfo(data)
      saveISPInfo(data)
      status.textContent = 'Information retrieved successfully!'
    } else {
      throw new Error('Failed to get ISP information')
    }

  } catch (error) {
    console.error('ISP info error:', error);
    status.textContent = 'Failed to get information. Please try again.'
  } finally {
    getInfoBtn.disabled = false
  }
}

function updateISPInfo(data) {
  const elements = {
    'isp-name': data.org || 'Unknown',
    'ip-address': data.ip || 'Unknown',
    'city': data.city || 'Unknown',
    'region': data.region || 'Unknown',
    'country': data.country || 'Unknown'
  }

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id)
    if (element) element.textContent = value
  })
}

function saveISPInfo(data) {
  const ispInfo = {
    ...data,
    timestamp: new Date().toISOString()
  }
  localStorage.setItem('plenoNet_ispInfo', JSON.stringify(ispInfo))
}

function loadSavedISPInfo() {
  const savedData = localStorage.getItem('plenoNet_ispInfo')
  if (savedData) {
    try {
      const data = JSON.parse(savedData)
      updateISPInfo(data)
      document.getElementById('isp-status').textContent = 'Showing saved information'
    } catch (error) {
      console.error('Error loading saved ISP info:', error);
    }
  }
}

