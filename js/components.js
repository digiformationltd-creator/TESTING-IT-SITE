// components.js — ESS Ltd. Global Nav + Footer Injector

const BRAND = "Experts Support Service Ltd";
const SHORT = "ESS Ltd.";

const headerHTML = `
  <nav class="navbar" id="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">
        &lt;ESS<span>/&gt;</span>
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html"  class="nav-link">Home</a></li>
        <li><a href="about.html"  class="nav-link">About</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="hire.html"   class="nav-link">Hire an Engineer</a></li>
        <li><a href="join.html"   class="nav-link">Join as Engineer</a></li>
        <li><a href="locations.html" class="nav-link">Locations</a></li>
        <li><a href="careers.html" class="nav-link">Careers</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><a href="blog.html"   class="nav-link">Blog</a></li>
        <li><a href="hire.html" class="btn btn-primary" style="padding:0.45rem 1.1rem;font-size:0.82rem;">Get Talent</a></li>
      </ul>
      <div class="menu-toggle" id="mobile-menu-btn">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
`;

const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo" style="margin-bottom:1rem;font-size:1.3rem;">&lt;ESS<span style="color:#fff">/&gt;</span></div>
          <p>Experts Support Service Ltd delivers elite IT staffing solutions for businesses across the United Kingdom, United States, and Europe. From helpdesk to data centre, we provide the talent that keeps your infrastructure running.</p>
        </div>
        <div class="footer-col">
          <h4>// Services</h4>
          <ul>
            <li><a href="services.html#support">IT Support Staffing</a></li>
            <li><a href="services.html#network">Network Engineering</a></li>
            <li><a href="services.html#deskside">Deskside Support</a></li>
            <li><a href="services.html#datacenter">Data Centre Operations</a></li>
            <li><a href="services.html">Project-Based Contracts</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>// Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="locations.html">Locations</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="blog.html">Insights & Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>// Contact</h4>
          <ul>
            <li><a href="mailto:ops@expertsupportservice.com">ops@expertsupportservice.com</a></li>
            <li><a href="https://wa.me/447700900000" target="_blank" style="color:#25D366;"><i class="fab fa-whatsapp"></i> +44 7700 900000</a></li>
            <li style="color:var(--text-muted);margin-top:0.5rem;">20 Tech Hub, Canary Wharf<br>London, E14 5AB, UK</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} <span class="accent">Experts Support Service Ltd</span>. All rights reserved. Registered in England &amp; Wales.</p>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const hp = document.getElementById("header-placeholder");
  if (hp) hp.innerHTML = headerHTML;
  const fp = document.getElementById("footer-placeholder");
  if (fp) fp.innerHTML = footerHTML;
  document.dispatchEvent(new Event('componentsLoaded'));
});
