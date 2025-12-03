# 2. Advanced Styling & Layout

Master modern CSS layout systems & responsive design

Teaches you how to design **professional, scalable, responsive layouts** using Flexbox, Grid, animations, transitions, and media queries.

By the end of this module, you will be able to build clean, modern UI sections just like real-world apps.

---

# 1. CSS Layouts (Flexbox & Grid)

## 1.1 Why Layout Systems Matter

Traditional CSS (floats, inline-block) is messy.

Modern CSS layout tools give:

- cleaner code
- predictable alignment
- responsive designs without hacks
- reusable layout structures

We focus on **Flexbox** and **Grid**.

---

## 1.2 Flexbox — One-Dimensional Layout

Flexbox is ideal for **rows or columns** where elements need clean spacing or alignment.

### Enable Flexbox

```css
.container {
  display: flex;
}
```

### Common Properties

**Direction**

```css
flex-direction: row; /* default */
flex-direction: column;
```

**Alignment**

```css
justify-content: center; /* horizontal alignment */
align-items: center; /* vertical alignment */
```

**Spacing**

```css
gap: 20px;
```

### Simple Example

**HTML**

```html
<div class="flex-box">
  <div class="item">One</div>
  <div class="item">Two</div>
  <div class="item">Three</div>
</div>
```

**CSS**

```css
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.item {
  background: #007bff;
  padding: 20px;
  color: white;
  border-radius: 8px;
}
```

<!-- Add Link  -->
<iframe src="https://codesandbox.io/embed/yy3ynp?view=preview&module=%2Fstyles.css"
     style={{width:"100%", height: "500px", borderRadius:"4px", overflow:"hidden"}}
     title="CSS"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 1.3 CSS Grid — Two-Dimensional Layout

Grid is perfect for complex layouts, dashboards, or card layouts.

### Enable Grid

```css
.grid {
  display: grid;
}
```

### Define Columns

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### Example — 3-Column Grid

**HTML**

```html
<div class="grid-box">
  <div class="card">A</div>
  <div class="card">B</div>
  <div class="card">C</div>
  <div class="card">D</div>
</div>
```

**CSS**

```css
.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 6px;
}
```

<iframe src="https://codesandbox.io/embed/vpn79x?view=preview&module=%2Findex.html"
     style={{width:"100%", height: "500px", borderRadius:"4px", overflow:"hidden"}}
     title="Two-Dimensional Layout"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---

# 2. Advanced CSS (Animations, Transitions, Variables)

## 2.1 CSS Transitions

Used to animate changes (hover, click, state change).

```css
button {
  background: blue;
  transition: background 0.3s ease;
}

button:hover {
  background: darkblue;
}
```

<iframe src="https://codesandbox.io/embed/wqh77l?view=preview&module=%2Fstyles.css"
     style={{width:"100%", height: "500px", borderRadius:"4px", overflow:"hidden"}}
     title="CSS Transition"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 2.2 CSS Animations

Used for continuous or keyframe-based motion.

```css
.box {
  width: 100px;
  height: 100px;
  background: coral;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
```

<iframe src="https://codesandbox.io/embed/xtyfvs?view=preview&module=%2Findex.html"
     style={{width:"100%", height: "500px", borderRadius:"4px", overflow:"hidden"}}
     title="CSS Animation"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 2.3 CSS Variables (Custom Properties)

Great for theme systems and consistent color usage.

**Define Variables**

```css
:root {
  --primary: #007bff;
  --text: #222;
}
```

**Use Variables**

```css
h1 {
  color: var(--primary);
}

p {
  color: var(--text);
}
```

<iframe src="https://codesandbox.io/embed/2khpjg?view=preview&module=%2Fstyles.css"
      style={{width:"100%", height: "500px", borderRadius:"4px", overflow:"hidden"}}
     title="Custom Properties"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---

# 3. Responsive Design & Media Queries

## 3.1 Mobile-first Design Philosophy

Start designing for small screens → scale up.

Benefits:

- simpler CSS
- fewer breakpoints
- better performance

## 3.2 Media Query Syntax

```css
@media (min-width: 768px) {
  .container {
    padding: 40px;
  }
}
```

## 3.3 Breakpoint Examples

```css
/* Mobile */
@media (max-width: 480px) {
}

/* Tablet */
@media (max-width: 768px) {
}

/* Desktop */
@media (min-width: 1024px) {
}
```

## 3.4 Responsive Flexbox Example

```css
.flex {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .flex {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

## 3.5 Responsive Grid Example

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

# 🧪 Mini Project – Responsive Card Section

Build a responsive card layout:

**Mobile:**

- 1 card per row

**Tablet:**

- 2 cards per row

**Desktop:**

- 3 cards per row

Try using:

- CSS Grid
- CSS variables for theme
- Hover transitions
- A small animation (pulse, fade-in, etc.)

https://codesandbox.io/p/sandbox/3v2c27
