// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let isDark = true;
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// ===== PROGRESS BAR =====
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollTop / docHeight;
  progress.style.transform = `scaleX(${pct})`;
});

// ===== INTERSECTION OBSERVER =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => navObserver.observe(s));

// ===== EXPAND CARDS =====
function toggleExpand(id, btn) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
  btn.classList.toggle('open');
  btn.querySelector('.arrow').textContent = el.classList.contains('open') ? '▴' : '▾';
}

// ===== SEAT BARS animate on first visibility =====
const barFills = document.querySelectorAll('.seat-bar-fill');
barFills.forEach(b => { b.dataset.width = b.style.width; b.style.width = '0'; });
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
barFills.forEach(b => barObserver.observe(b));