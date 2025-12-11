import '../css/style.css'
import { Header, initHeader } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { PlansSection, PlanCard } from './components/PlanCard.js'
import { ComparisonTable } from './components/ComparisonTable.js'
import plansData from './data/plans.json' with { type: 'json' }

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${PlansSection()}
  </main>
  ${Footer()}
`

initHeader()
initPlans()

function initPlans() {
  loadPlans('residential')

  const tabButtons = document.querySelectorAll('.tab-button')
  const compareBtn = document.getElementById('compare-toggle')

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const tabType = e.target.dataset.tab

      tabButtons.forEach(btn => btn.classList.remove('active'))
      e.target.classList.add('active')

      document.querySelectorAll('.plans-grid').forEach(grid => {
        grid.classList.remove('active')
      })

      loadPlans(tabType)
      document.getElementById(`${tabType}-plans`).classList.add('active')

      hideComparisonTable()
    })
  })

  if (compareBtn) {
    compareBtn.addEventListener('click', () => {
      toggleComparisonTable()
    })
  }
}

function loadPlans(type) {
  const container = document.getElementById(`${type}-plans`)
  const plans = type === 'residential' ? plansData.residentialPlans : plansData.businessPlans

  container.innerHTML = plans.map(plan => PlanCard(plan)).join('')

  container.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const planId = e.target.dataset.planId
      const selectedPlan = plans.find(plan => plan.id === planId)

      alert(`Plan selected: ${selectedPlan.name} - $${selectedPlan.price}/${selectedPlan.billingCycle}`)
    })
  })
}

function toggleComparisonTable() {
  const existingTable = document.querySelector('.comparison-section')

  if (existingTable) {
    existingTable.remove()
  } else {
    const plansSection = document.querySelector('.plans-section')
    const residentialPlans = plansData.residentialPlans
    const comparisonHTML = ComparisonTable(residentialPlans)

    plansSection.insertAdjacentHTML('afterend', comparisonHTML)

    document.querySelectorAll('.choose-plan-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const planId = e.target.dataset.planId
        const selectedPlan = residentialPlans.find(plan => plan.id === planId)

        alert(`Plan selected from comparison: ${selectedPlan.name} - $${selectedPlan.price}/${selectedPlan.billingCycle}`)
      })
    })

    document.querySelector('.comparison-section').scrollIntoView({ behavior: 'smooth' })
  }
}

function hideComparisonTable() {
  const existingTable = document.querySelector('.comparison-section')
  if (existingTable) {
    existingTable.remove()
  }
}

