export function PlanCard(plan) {
  const isPopular = plan.popular;
  const isRecommended = plan.recommended;
  const hasDiscount = plan.originalPrice && plan.originalPrice > plan.price;

  return `
    <div class="plan-card ${isPopular ? 'popular' : ''} ${isRecommended ? 'recommended' : ''}">
      ${isPopular ? '<div class="popular-badge">Most Popular</div>' : ''}
      ${isRecommended ? '<div class="recommended-badge">Recommended</div>' : ''}

      <div class="plan-header">
        <h3 class="plan-name">${plan.name}</h3>
        <div class="plan-speed">${plan.speed}</div>
      </div>

      <div class="plan-pricing">
        <div class="plan-price">
          $${plan.price}
          <span class="billing-cycle">/${plan.billingCycle}</span>
        </div>
        ${hasDiscount ? `<div class="original-price">$${plan.originalPrice}</div>` : ''}
      </div>

      <ul class="plan-features">
        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>

      <div class="plan-contract">
        ${plan.contractLength} month contract
      </div>

      <button class="plan-button" data-plan-id="${plan.id}">
        Choose Plan
      </button>
    </div>
  `;
}

export function PlansSection() {
  return `
    <section class="plans-section">
      <div class="container">
        <div class="plans-header">
          <h2>Choose Your Plan</h2>
          <p>Select the perfect internet plan for your needs</p>
        </div>

        <div class="plans-tabs">
          <button class="tab-button active" data-tab="residential">Residential</button>
          <button class="tab-button" data-tab="business">Business</button>
        </div>

        <div class="plans-actions">
          <button class="compare-btn" id="compare-toggle">
            <span class="compare-icon">📊</span>
            Compare All Plans
          </button>
        </div>

        <div class="plans-container">
          <div class="plans-grid active" id="residential-plans">
          </div>
          <div class="plans-grid" id="business-plans">
          </div>
        </div>
      </div>
    </section>
  `;
}
