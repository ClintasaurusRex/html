# What “mobile-first” means

Mobile-first is a design strategy where you build your website for mobile devices first, then progressively enhance it for larger screens.

## Start by writing mobile styles

```css
body {
  font-size: 16px;
  padding: 10px;
}
```

## Then use media queries for larger screens

```css
/* Styles for devices wider than 768px */
@media (min-width: 768px) {
  body {
    font-size: 18px;
    padding: 20px;
  }
}
```

This approach ensures your site works well on small screens first, then enhances the experience for users on larger devices.

## Mobile-First Typography

Mobile-first typography starts with text styles optimized for small screens, then uses media queries to adjust for larger displays.

### Set base font sizes for mobile

```css
/* Mobile-first styles */
body {
  font-size: 16px;
}

h1 {
  font-size: 1.5rem;
}
```

### Use media queries to adjust for larger screens

```css
/* Larger screens */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }

  h1 {
    font-size: 2rem;
  }
}
```

## Mobile-First Navigation

Mobile-first navigation starts with a simple, touch-friendly menu for small screens, then enhances it for larger screens.

### Basic mobile navigation structure

```html
<nav class="main-nav">
  <button class="menu-toggle">Menu</button>
  <ul class="nav-list">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### Mobile styling (show button, hide list)

```css
.menu-toggle {
  display: block;
}

.nav-list {
  display: none;
}
```

### Desktop styling with media queries (hide button, show horizontal list)

```css
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .nav-list {
    display: flex;
  }
}
```

## Mobile-First Images

Use the `<picture>` element for mobile-first responsive images:

- `<picture>` → wrapper for multiple image options
- `<source>` → defines image (`srcset`) and condition (`media`)
- `<img>` → fallback image with `alt` text

```html
<picture>
  <source srcset="small-image.jpg" media="(max-width: 600px)" />
  <source srcset="medium-image.jpg" media="(max-width: 1024px)" />
  <img src="large-image.jpg" alt="Description of image" />
</picture>
```

Start with smaller, optimized images for mobile, then enhance for larger displays to improve loading performance.

## Mobile-First Forms

When designing forms for mobile first, focus on usability on small screens:

- Make inputs and buttons bigger so users can easily type and tap
- Stack fields vertically and use full-width inputs
- Add padding and spacing for fingers

### Mobile-first form styles

```css
input,
button {
  width: 100%; /* full width for small screens */
  padding: 0.75rem; /* easier to tap */
  font-size: 1rem; /* readable text */
}
```

### Enhance layout for larger screens

- Center the form on the page
- Place some fields side by side instead of stacking
- Adjust widths and spacing for better appearance

```css
@media (min-width: 768px) {
  form {
    max-width: 500px; /* center and limit width */
    margin: 0 auto;
  }

  .row {
    display: flex;
    gap: 1rem; /* side-by-side inputs */
  }
}
```
