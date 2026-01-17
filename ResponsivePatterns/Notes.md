# Holy Grail Layout

The Holy Grail Layout is a classic web design pattern with a header, footer, and three columns: left sidebar (navigation), main content (center), and right sidebar.

## Structure

```html
<div class="container">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
```

## CSS Grid Implementation

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

header {
  grid-area: header;
}
nav {
  grid-area: nav;
}
main {
  grid-area: main;
}
aside {
  grid-area: aside;
}
footer {
  grid-area: footer;
}
```

The main content grows to fill available space (`1fr`) while sidebars have fixed widths. On small screens, sidebars typically stack for better readability.

## Card Grid Layout

A Card Grid is a responsive pattern that arranges items into evenly spaced cards, commonly used for products, articles, or portfolios.

### HTML structure for a card grid:

```html
<div class="product-grid">
  <div class="product-card">
    <img src="product1.jpg" alt="Product 1" />
    <h3>Product Name</h3>
    <p>$19.99</p>
    <button>Add to Cart</button>
  </div>
  <!-- More product cards here -->
</div>
```

### CSS for responsive card grid using CSS Grid:

```css
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* For tablets and up */
@media (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* For desktops */
@media (min-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}
```

This creates a responsive layout: 1 column on mobile, 2 columns on tablets, and 3 columns on desktop screens.

## Sidebar + Content Layout

The Sidebar + Content layout uses flexbox to create a responsive pattern with a main content area and sidebar.

### Basic HTML structure:

```html
<div class="container">
  <main class="content">Main content here</main>
  <aside class="sidebar">Sidebar content here</aside>
</div>
```

### Mobile-first CSS approach:

```css
.container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  padding: 20px;
}

.sidebar {
  padding: 20px;
  background-color: #f5f5f5;
}
```

### Media query for larger screens:

```css
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }

  .content {
    flex: 3;
  }

  .sidebar {
    flex: 1;
  }
}
```

This creates a layout that stacks vertically on mobile and displays side-by-side on larger screens.
## Split Screen Layout

Split screen layouts divide the viewport into two sections, typically side by side. They're effective for comparing content or separating navigation from main content.

### HTML structure:

```html
<div class="split-screen">
  <div class="split-screen__left">
    <h2>Left Side</h2>
    <p>This is the left side content.</p>
  </div>
  <div class="split-screen__right">
    <h2>Right Side</h2>
    <p>This is the right side content.</p>
  </div>
</div>
```

### CSS for responsive split screen layout:

```css
.split-screen {
  display: flex;
  flex-direction: column;
}

/* Mobile: sections stack vertically */
.split-screen__left {
  background-color: #f0f0f0;
}

.split-screen__right {
  background-color: #e0e0e0;
}

/* Larger screens: display side by side */
@media (min-width: 768px) {
  .split-screen {
    flex-direction: row;
  }
  
  .split-screen__left,
  .split-screen__right {
    flex: 1;
  }
}
```

The layout starts as a vertical stack on mobile devices following a mobile-first approach, then changes to a horizontal split on screens 768px or larger.

## Sticky Header / Footer

A sticky header (or footer) stays visible at the top (or bottom) of the page when you scroll, making navigation or important info always accessible.

### Create sticky elements using `position: sticky`:

#### HTML

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <p>Content here...</p>
</main>

<footer>
  <p>Footer content here...</p>
</footer>
```

#### CSS

```css
header {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

footer {
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
```

This ensures the header stays at the top and the footer at the bottom of the viewport while scrolling.