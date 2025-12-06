export function Header() {
    const currentPath = window.location.pathname;

    return `
    <header class="header" id="header">
      <div class="header-container">
        <a href="/" class="logo">
          <img src="/logo-pleno.svg" alt="PlenoNet Logo" />
          <span>PlenoNet</span>
        </a>
        
        <nav class="nav-desktop">
          <ul class="nav-list">
            <li><a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}">Home</a></li>
            <li><a href="/plans.html" class="nav-link ${currentPath === '/plans.html' ? 'active' : ''}">Plans</a></li>
            <li><a href="/speedtest.html" class="nav-link ${currentPath === '/speedtest.html' ? 'active' : ''}">Speed Test</a></li>
          </ul>
        </nav>

        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      <nav class="nav-mobile" id="navMobile">
        <ul class="nav-list">
          <li><a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}">Home</a></li>
          <li><a href="/plans.html" class="nav-link ${currentPath === '/plans.html' ? 'active' : ''}">Plans</a></li>
          <li><a href="/speedtest.html" class="nav-link ${currentPath === '/speedtest.html' ? 'active' : ''}">Speed Test</a></li>
        </ul>
      </nav>

      <div class="overlay" id="overlay"></div>
    </header>
  `;
}

export function initHeader() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMobile.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navMobile.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}
