// components.js - DRY Header and Footer injection

const headerHTML = `
  <nav class="navbar" id="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">
        EUM <span>Ltd.</span>
      </a>
      
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="about.html" class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="hire.html" class="nav-link">Hire an Engineer</a></li>
        <li><a href="join.html" class="nav-link">Join as Engineer</a></li>
        <li><a href="locations.html" class="nav-link">Locations</a></li>
        <li><a href="careers.html" class="nav-link">Careers</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
      </ul>
      
      <div class="menu-toggle" id="mobile-menu-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
`;

const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Expert Utility Management Ltd</h4>
          <p>Providing top-tier IT engineers for on-site & remote projects across the UK, USA, and Europe.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="services.html#support">IT Support</a></li>
            <li><a href="services.html#network">Network Support</a></li>
            <li><a href="services.html#deskside">Deskside Support</a></li>
            <li><a href="services.html#datacenter">Data Center Support</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Information</h4>
          <ul>
            <li><a href="mailto:info@expertutility.com">info@expertutility.com</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i> WhatsApp Us</a></li>
            <li>London, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Expert Utility Management Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Header
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Notify main.js that components are loaded so it can attach event listeners
    document.dispatchEvent(new Event('componentsLoaded'));
});
