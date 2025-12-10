export function ComparisonTable(plans) {
  const features = [
    'Download Speed',
    'Upload Speed',
    'Price per Month',
    'Data Caps',
    'Support',
    'Router Included',
    'Installation Fee',
    'Contract Length',
    'Static IP',
    'Uptime SLA'
  ];

  const getFeatureValue = (plan, feature) => {
    switch (feature) {
      case 'Download Speed':
        return plan.speed.split(' ')[0] + ' Mbps';
      case 'Upload Speed':
        const speed = parseInt(plan.speed.split(' ')[0]);
        return speed >= 200 ? plan.speed.split(' ')[0] + ' Mbps' : Math.floor(speed / 4) + ' Mbps';
      case 'Price per Month':
        return '$' + plan.price;
      case 'Data Caps':
        return 'No limits';
      case 'Support':
        return plan.speed.includes('50') ? '24/7' : plan.speed.includes('100') ? 'Priority' : 'Premium';
      case 'Router Included':
        return plan.speed.includes('50') ? 'Basic modem' : 'WiFi router';
      case 'Installation Fee':
        return plan.speed.includes('50') ? '$0' : plan.speed.includes('100') ? '$49.99' : '$99.99';
      case 'Contract Length':
        return plan.contractLength + ' months';
      case 'Static IP':
        return plan.speed.includes('50') ? 'No' : 'Optional';
      case 'Uptime SLA':
        return plan.speed.includes('50') ? '99%' : plan.speed.includes('100') ? '99.5%' : '99.9%';
      default:
        return '-';
    }
  };

  return `
    <div class="comparison-section">
      <div class="container">
        <div class="comparison-header">
          <h2>Compare All Plans</h2>
          <p>Find the perfect plan for your needs</p>
        </div>

        <div class="comparison-table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-column">Features</th>
                ${plans.map(plan => `
                  <th class="plan-column ${plan.popular ? 'popular' : ''} ${plan.recommended ? 'recommended' : ''}" data-plan-id="${plan.id}">
                    <div class="plan-header-cell">
                      ${plan.popular ? '<div class="table-badge popular">Most Popular</div>' : ''}
                      ${plan.recommended ? '<div class="table-badge recommended">Recommended</div>' : ''}
                      <div class="plan-name">${plan.name}</div>
                      <div class="plan-speed">${plan.speed}</div>
                      <div class="plan-price">$${plan.price}<span>/month</span></div>
                      <button class="choose-plan-btn" data-plan-id="${plan.id}">Choose Plan</button>
                    </div>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              ${features.map(feature => `
                <tr>
                  <td class="feature-name">${feature}</td>
                  ${plans.map(plan => `
                    <td class="plan-feature ${plan.popular ? 'popular' : ''}" data-plan-id="${plan.id}">
                      ${getFeatureValue(plan, feature)}
                    </td>
                  `).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
