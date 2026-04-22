# Skills Required for AI Presentation Web App

## 1. Frontend Development
- **Semantic HTML5:** Structuring slides, nested containers, and accessible markup.
- **Modern CSS3:** 
  - Mastery of **CSS Grid** for the complex, responsive Bento outline.
  - Flexbox for internal card alignment.
  - Native CSS Variables for easy light/dark theme switching.
- **Modern JavaScript (ES6+):** Handling state, interactivity, and DOM manipulation cleanly without heavy frameworks.

## 2. UI/UX & Visual Design
- **Bento Grid Layout:** Organizing varying amounts of content into harmonious, differently sized cards that fit naturally like a puzzle.
- **Glassmorphism Design System:**
  - Utilizing `backdrop-filter: blur(12px)` and `webkit-backdrop-filter`.
  - Tuning `rgba` background layers to ensure text readability over colorful backgrounds.
  - Applying soft, multi-layered box-shadows.
- **Fluid Typography and Spacing:** Ensuring readability across all device screens.
- **Color Theory:** Selecting a dynamic, engaging gradient backdrop that feels premium.

## 3. Advanced Animation Skills
- **CSS Transitions & Keyframes:** For hover states (scale, translate) and continuous micro-animations.
- **Intersection Observer API:** For detecting when cards enter the viewport to trigger scroll-based reveal animations.
- **Animation Libraries (Optional but recommended):**
  - **GSAP:** For timeline sequencing and complex staggered animations.
  - **AOS (Animate on Scroll):** For quick fade/slide presets.

## 4. Media Handling & Optimization
- **Image Sourcing:** Finding high-quality, relevant imagery (Parliament House, Senate, etc.).
- **Asset Optimization:** Using WebP/avif formats, ensuring high resolution without heavy file sizes.
- **CSS Object-Fit:** Ensuring images fit flawlessly within their respective Bento grid cells without distortion.

## 5. Content Structuring & Storytelling
- Translating dense academic information (Political Science / Pakistan Studies) into digestible, bite-sized components.
- Structuring sections (Introduction, Structure, Working, Challenges) logically for a web-based flow.

## 6. Advanced Interactivity & State Management
- Implementing a robust **Dark/Light Mode Toggle** with `localStorage` persistence.
- Interactive components like expandable cards or modals for detailed legislation processes.
- Dynamic Reading Progress bar tracking the scroll state.

## 7. Performance & Web Vitals
- **Lazy Loading:** Using native `loading="lazy"` for all images.
- **Rendering Performance:** Animating only GPU-accelerated properties (`transform` and `opacity`) to maintain 60fps.
- **Responsive Breakpoints:** Shifting from a complex Grid on desktop to a stacked linear layout vertically on mobile devices.
