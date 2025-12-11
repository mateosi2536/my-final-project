import coverageData from '../data/coverage-cities.json' with { type: 'json' };

const API_KEY = 'AIzaSyCglGVBExKsQxEly38sD1q-T5a0zLFpKR0';

export function Hero() {
  return `
    <section class="hero">
      <div class="hero-container">
        <h1 class="hero-title">High-Speed Internet in Your Area</h1>
        <p class="hero-subtitle">Check coverage and available speed at your address</p>
        <div class="hero-form">
          <div class="input-container">
            <input type="text" id="address-input" placeholder="Enter your address" class="address-input" autocomplete="off">
            <div id="autocomplete-dropdown" class="autocomplete-dropdown"></div>
          </div>
          <button id="check-btn" class="cta-button">Check Coverage</button>
        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  const input = document.getElementById('address-input');
  const dropdown = document.getElementById('autocomplete-dropdown');
  const checkBtn = document.getElementById('check-btn');

  let timeoutId;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();

    clearTimeout(timeoutId);

    if (query.length < 3) {
      dropdown.style.display = 'none';
      return;
    }

    timeoutId = setTimeout(() => {
      searchPlaces(query);
    }, 300);
  });

  input.addEventListener('focus', () => {
    if (dropdown.children.length > 0) {
      dropdown.style.display = 'block';
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 150);
  });

  checkBtn.addEventListener('click', () => {
    const address = input.value.trim();
    if (address) {
      checkCoverage(address);
    } else {
      alert('Please enter an address');
    }
  });

  function checkCoverage(address) {
    const addressLower = address.toLowerCase();
    const hasCoverage = coverageData.coveredCities.some(city =>
      addressLower.includes(city)
    );

    saveCoverageCheck(address, hasCoverage);
    saveSearchToHistory(address);

    if (hasCoverage) {
      alert(`✅ Great news! We have coverage in your area.\n\nAddress: ${address}\n\nAvailable plans: Basic 50, Premium 100, Ultra 200`);
    } else {
      alert(`❌ Sorry, we don't have coverage in this area yet.\n\nAddress: ${address}\n\nWe're expanding our coverage every month. Stay tuned!`);
    }
  }

  function checkCoverage(address) {
    const addressLower = address.toLowerCase();
    const hasCoverage = coverageData.coveredCities.some(city =>
      addressLower.includes(city)
    );

    if (hasCoverage) {
      alert(`✅ Great news! We have coverage in your area.\n\nAddress: ${address}\n\nAvailable plans: Basic 50, Premium 100, Ultra 200`);
    } else {
      alert(`❌ Sorry, we don't have coverage in this area yet.\n\nAddress: ${address}\n\nWe're expanding our coverage every month. Stay tuned!`);
    }
  }

  async function searchPlaces(query) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=mx&format=json&addressdetails=1&limit=5`;

      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        showSuggestions(data);
      } else {
        console.log('No places found');
        dropdown.style.display = 'none';
      }
    } catch (error) {
      console.error('Error fetching places:', error);
      dropdown.style.display = 'none';
    }
  }

  function showSuggestions(places) {
    dropdown.innerHTML = '';

    places.forEach(place => {
      const item = document.createElement('div');
      item.className = 'autocomplete-item';
      item.textContent = place.display_name;
      item.addEventListener('click', () => {
        input.value = place.display_name;
        dropdown.style.display = 'none';
        console.log('Address selected:', place.display_name);
      });
      dropdown.appendChild(item);
    });

    dropdown.style.display = places.length > 0 ? 'block' : 'none';
  }

}
