# Theming in CSS

CSS theming creates consistent design by using reusable colors, fonts, and styles defined once and applied across the site.

## Define theme values with CSS variables

Use CSS variables in the `:root` selector to define theme values:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f5a623;
  --font-family: Arial, sans-serif;
}
```

## Apply theme variables with `var()`

```css
body {
  font-family: var(--font-family);
  color: var(--primary-color);
}

button {
  background-color: var(--secondary-color);
  color: white;
}
```

## Dark/Light Mode Basics

Use CSS variables to implement dark/light mode themes.

### Define light mode variables in `:root`

```css
:root {
  --background-color: #ffffff;
  --text-color: #333333;
  --heading-color: #000000;
}
```

### Apply variables to elements

```css
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

h1,
h2,
h3 {
  color: var(--heading-color);
}
```

### Create a dark mode class that overrides the variables

```css
.dark-mode {
  --background-color: #333333;
  --text-color: #f5f5f5;
  --heading-color: #ffffff;
}
```

### Toggle themes by adding/removing `.dark-mode` on `<body>`

```html
<body class="dark-mode"></body>
```

## Accent Colors & Highlighting

Accent colors help important elements stand out. Define them as CSS variables and use them consistently throughout your site.

### Create a CSS variable for your accent color

```css
:root {
  --accent-color: #ff6b6b;
}
```

### Use the accent color for buttons

```css
.button-primary {
  background-color: var(--accent-color);
  color: white;
}
```

### Highlight active navigation items

```css
.nav-item.active {
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
}
```

## Typography Theming

Use CSS variables to create consistent typography systems by defining font styles once and reusing them across the site.

### Define typography variables in `:root`

```css
:root {
  --font-primary: "Open Sans", sans-serif;
  --font-secondary: "Roboto", sans-serif;
  --font-size-base: 16px;
  --line-height: 1.5;
  --heading-color: #333;
  --text-color: #555;
}
```

### Apply variables to text elements using `var()`

```css
body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  color: var(--text-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-secondary);
  color: var(--heading-color);
}
```

### Common typography variables include

- Font family (base and heading fonts)
- Font sizes (base size and heading sizes)
- Line height
- Letter spacing
- Colors (text and heading colors)
