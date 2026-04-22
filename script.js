// ===== SLIDE STATE =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideNumDisplay = document.getElementById('slide-num');
const progress = document.getElementById('progress');

// ===== SHOW SLIDE =====
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slideNumDisplay = document.getElementById('slide-num');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progress = document.getElementById('progress');

  // Clamp index
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;

  currentSlideIndex = index;

  // Update visibility
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });

  // Update controls
  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === totalSlides - 1;

  // Update counter
  slideNumDisplay.textContent = `Slide ${currentSlideIndex + 1} / ${totalSlides}`;

  // Update progress bar
  const pct = ((currentSlideIndex + 1) / totalSlides) * 100;
  progress.style.width = `${pct}%`;
}

// ===== NAVIGATION =====
nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
    showSlide(currentSlideIndex + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
    showSlide(currentSlideIndex - 1);
  }
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️ Theme' : '🌙 Theme';
});

// Initialize
showSlide(0);
