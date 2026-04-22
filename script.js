// ===== SLIDE STATE =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slide-counter');
const progress = document.getElementById('progress');

// ===== SHOW SLIDE =====
function showSlide(index) {
  // Clamp index
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;

  currentSlideIndex = index;

  // Update classes
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });

  // Update controls
  prevBtn.disabled = currentSlideIndex === 0;
  nextBtn.disabled = currentSlideIndex === totalSlides - 1;

  // Update counter
  slideCounter.textContent = `Slide ${currentSlideIndex + 1} / ${totalSlides}`;

  // Update progress bar
  const pct = (currentSlideIndex + 1) / totalSlides;
  progress.style.transform = `scaleX(${pct})`;

  // Animate seat bars if on structure slide (Slide 3)
  if (currentSlideIndex === 2) {
    animateBars();
  }
}

// ===== NAVIGATION =====
nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    showSlide(currentSlideIndex + 1);
  } else if (e.key === 'ArrowLeft') {
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
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// ===== SEAT BARS ANIMATION =====
function animateBars() {
  const barFills = document.querySelectorAll('.seat-bar-fill');
  barFills.forEach(b => {
    // Store original width if not already stored
    if (!b.dataset.targetWidth) {
      b.dataset.targetWidth = b.style.width;
    }
    
    b.style.transition = 'none';
    b.style.width = '0';
    
    // Force reflow
    b.offsetHeight;
    
    b.style.transition = 'width 1s ease';
    b.style.width = b.dataset.targetWidth;
  });
}

// Initialize
showSlide(0);
