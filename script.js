// ===================== STATE =====================
let current = 0;
const slides = () => document.querySelectorAll('.slide');
const totalSlides = () => slides().length;

// ===================== SHOW SLIDE =====================
function showSlide(next) {
  const all = slides();
  const total = all.length;
  if (next < 0 || next >= total) return;

  const prev = current;
  current = next;

  // Exit old slide
  all[prev].classList.remove('active');
  all[prev].classList.add('exit');
  setTimeout(() => all[prev].classList.remove('exit'), 480);

  // Enter new slide
  all[current].classList.add('active');

  // Progress bar
  const pct = ((current + 1) / total) * 100;
  document.getElementById('progress').style.width = pct + '%';

  // Counter text
  document.getElementById('slide-num').textContent =
    `${String(current + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;

  // Dots
  document.querySelectorAll('.slide-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });

  // Buttons
  document.getElementById('prevBtn').disabled = current === 0;
  document.getElementById('nextBtn').disabled = current === total - 1;

  // Stagger animations
  triggerStagger(all[current]);
}

// ===================== STAGGER =====================
function triggerStagger(slide) {
  const items = slide.querySelectorAll('.stagger > *');
  items.forEach(el => el.classList.remove('visible'));
  items.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 90);
  });
}

// ===================== DOTS =====================
function buildDots() {
  const container = document.getElementById('slide-dots');
  if (!container) return;
  slides().forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'slide-dot' + (i === 0 ? ' active' : '');
    d.title = `Slide ${i + 1}`;
    d.addEventListener('click', () => showSlide(i));
    container.appendChild(d);
  });
}

// ===================== NAVIGATION =====================
document.getElementById('nextBtn').addEventListener('click', () => showSlide(current + 1));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(current - 1));

// Keyboard
document.addEventListener('keydown', e => {
  if (['ArrowRight', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); showSlide(current + 1); }
  else if (['ArrowLeft', 'Backspace'].includes(e.key)) { e.preventDefault(); showSlide(current - 1); }
});

// Touch swipe
let touchX = null;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) showSlide(dx < 0 ? current + 1 : current - 1);
  touchX = null;
}, { passive: true });

// ===================== INIT =====================
buildDots();
showSlide(0);

// Animate donut segments on load
setTimeout(() => {
  const segs = document.querySelectorAll('.donut-seg1, .donut-seg2, .donut-seg3');
  segs.forEach(s => { s.style.transition = 'stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)'; });
}, 300);
