// ===================== KKRS SANGHA SCRIPTS =====================

// Translate button – navigate between English and Kannada pages
function initTranslate() {
  const links = document.querySelectorAll('[data-lang]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      const current = window.location.pathname.toLowerCase();

      if (lang === 'kn') {
        if (current.includes('aboutus') || current.includes('about_us')) {
          window.location.href = 'AboutUs2.html';
        } else {
          window.location.href = 'Index2.html';
        }
      } else {
        if (current.includes('aboutus') || current.includes('about_us')) {
          window.location.href = 'AboutUs.html';
        } else {
          window.location.href = 'Index.html';
        }
      }
    });
  });
}

// Active nav link highlight
function initActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop() || 'Index.html';
  links.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && current.toLowerCase() === href.toLowerCase()) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Mobile nav toggle (hamburger) – simple show/hide
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
}

// Membership form submission (placeholder)
function initMemberForm() {
  const form = document.getElementById('membership-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('[name="fullname"]').value.trim();
    if (!name) {
      alert('Please enter your full name.');
      return;
    }
    const msg = document.getElementById('form-message');
    if (msg) {
      msg.textContent = 'Thank you! We will contact you shortly.';
      msg.style.display = 'block';
    }
    form.reset();
  });
}

// Run all inits
document.addEventListener('DOMContentLoaded', function() {
  initTranslate();
  initActiveNav();
  initSmoothScroll();
  initMobileNav();
  initMemberForm();
});
