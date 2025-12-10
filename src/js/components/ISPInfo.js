export function ISPInfoSection() {
  return `
    <section class="isp-info-section">
      <div class="container">
        <div class="isp-info-header">
          <h1>Network Information</h1>
          <p>Check your internet service provider and network details</p>
        </div>

        <div class="isp-info-container">
          <div class="info-controls">
            <button id="get-isp-info" class="get-info-btn">Get My Internet Info</button>
            <div id="isp-status" class="info-status">Click to get your information</div>
          </div>

          <div class="info-display">
            <div class="info-card">
              <div class="info-icon">🏢</div>
              <div class="info-content">
                <div class="info-label">ISP</div>
                <div id="isp-name" class="info-value">--</div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <div class="info-label">IP Address</div>
                <div id="ip-address" class="info-value">--</div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🏙️</div>
              <div class="info-content">
                <div class="info-label">City</div>
                <div id="city" class="info-value">--</div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🗺️</div>
              <div class="info-content">
                <div class="info-label">Region</div>
                <div id="region" class="info-value">--</div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🌍</div>
              <div class="info-content">
                <div class="info-label">Country</div>
                <div id="country" class="info-value">--</div>
              </div>
            </div>
          </div>

          <div class="info-note">
            <p><strong>Note:</strong> This information is provided by ipinfo.io and shows your public IP address and internet service provider details.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
