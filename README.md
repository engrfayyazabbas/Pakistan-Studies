# AI Agent Instructions for Building Presentation Web App

## Goal
Create an interactive web-based presentation on:
**"Parliamentary System of Pakistan: Structure, Working & Challenges till 2026"**

---

## Design Requirements

### 1. Layout (IMPORTANT)
- Use a **Bento Grid layout**
  - Grid-based modular cards
  - Different card sizes for hierarchy (e.g., large hero cards, smaller info cards)
- Each topic = one cohesive card or section within the grid

### 2. Visual Style
- Apply **Glassmorphism UI**
  - `backdrop-filter: blur(12px)`
  - Semi-transparent, context-aware backgrounds (`rgba(255, 255, 255, 0.1)` for light theme or dark equivalent)
  - Soft, glowing borders (1px solid rgba/white)
  - Smooth, multi-layered drop shadows
- Use a modern, dynamic gradient background (Deep blue/purple space aesthetic or emerald/blue reflecting Pakistan's colors smoothly)
- Elegant typography (e.g., `Inter` or `Outfit` fonts)

---

## Sections & Content Details (The Slides)

### 1. Introduction: The Democratic Framework
- **Overview:** Adopted under the 1973 Constitution, establishing a Federal Parliamentary Republic.
- **Key Roles:**
  - **Prime Minister:** Head of Government, Chief Executive.
  - **President:** Head of State, represents the unity of the Republic.

### 2. Bicameral Structure: Parliament (Majlis-e-Shoora)
- **National Assembly (Lower House):** 
  - 336 total seats (General: 266, Women: 60, Minorities: 10). Elected for a 5-year term.
  - Represents population demographics.
- **Senate (Upper House):** 
  - 96 seats (post-FATA merger). Members have staggered 6-year terms. 
  - Ensures equal representation of all four provinces regardless of population size.
- **The President:** Forms the third pillar of Parliament.

### 3. Working: The Legislative Engine
- **Law-Making Process:** Bills pass through three readings in both houses. Ordinary bills can originate in either house; however, Money Bills originate only in the National Assembly.
- **Role of Committees:** Standing committees serve as the backbone for detailed scrutiny of legislation and executive oversight.
- **Accountability:** The Prime Minister and Cabinet are collectively responsible to the National Assembly (Vote of No-Confidence mechanism).

### 4. Continuous Challenges
- **The Ordinance System:** Routine reliance on Presidential Ordinances bypasses standard legislative debates.
- **Senate's Limited Financial Power:** The Upper House can only make "recommendations" on Money Bills within 14 days, lacking veto power.
- **Political Instability:** Frequent boycotts, short-lived coalition governments, and polarized environments impacting legislative productivity.
- **Electoral Reforms:** Ongoing debates regarding EVMs (Electronic Voting Machines), transparency, and delimitation.

### 5. Conclusion & The Way Forward
- **Summary:** The system is resilient but requires institutional strengthening.
- **Future Improvements:** Empowering the Senate on financial matters, reducing reliance on ordinances, and enhancing the capacity of parliamentary committees.

---

## UI Components To Implement

- Bento cards for each slide/section
- Sticky Navigation bar (top or side) with active section highlights
- Smooth scrolling between sections (`scroll-behavior: smooth`)
- Hover effects on cards (translation, glow, and shadow expanding)
- Interactive tooltips for complex terms (e.g., "Money Bill", "Ordinance")

---

## Images & Media (MANDATORY)
Include relevant images:
- Parliament House Pakistan (Exterior)
- National Assembly Hall (Interior)
- Senate Hall (Interior)
- A visual schema/infographic of the legislative process

Use sources like:
- Unsplash / Wikimedia Commons / Official Gov Galleries

---

## Animations (MANDATORY)

### Entry Animations
- Staggered Fade-in and Slide-up of Bento cards on page load
- Subtle Scale-in effects

### Scroll Animations
- Elements dynamically reveal when entering the viewport (Intersection Observer API)

### Hover Effects
- Micro-interactions: Cards lift slightly on hover (`transform: translateY(-5px)`)
- Dynamic border glow matching the theme

---

## Interactivity

- Clickable cards → expand to show more detailed sub-points or full text
- **Dark/Light Mode Toggle** (Mandatory for modern web apps)
- Interactive timeline showing the evolution of the Parliament
- Visual progress indicator reflecting scroll depth

---

## Tech Stack

- **HTML5** (Semantic structuring)
- **Vanilla CSS3** (Flexbox + CSS Grid for Bento layout, Native CSS Variables for theming)
- **Vanilla JavaScript** (DOM manipulation, Intersection Observers)
- *Optional:* GSAP for high-end timeline animations or AOS for simple scroll reveals

---

## Performance & SEO

- Optimize images (WebP format) and use Lazy Loading (`loading="lazy"`)
- Ensure smooth animations (Target 60fps, animate only `transform` and `opacity`)
- Use semantic HTML (`<main>`, `<section>`, `<article>`)

---

## Output Expectations

- A fully responsive design that works flawlessly on mobile, tablet, and desktop
- Clean, state-of-the-art UI providing a "WOW" factor
- Visually engaging storytelling rather than boring text walls

---

## Final Instruction

Focus heavily on:
- **Aesthetics & Premium Design:** Avoid generic templates.
- **Visual Storytelling:** Use spaces, grids, and typography to guide the user.
- **Smooth User Experience:** Interactivity should feel alive and responsive.

Avoid:
- Cluttered UI and heavy text walls (rely on readable bullet points)
- Excessive lag or unoptimized animations