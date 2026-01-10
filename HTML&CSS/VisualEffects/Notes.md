# CSS Visual Effects

## CSS Gradients

CSS gradients create smooth transitions between colors using the `linear-gradient()` function.

### Basic Linear Gradient

```css
/* Basic linear gradient from top to bottom */
.gradient-box {
  background: linear-gradient(to bottom, #ff9966, #ff5e62);
}
```

### Multi-Color Gradient

```css
/* Linear gradient with direction and multiple colors */
.gradient-box {
  background: linear-gradient(to right, red, orange, yellow, green);
}
```

**Common directions:**

- `to bottom`
- `to right`
- `to left`
- `to top`

---

## CSS Filters

CSS filters let you visually change images, backgrounds, and text using various effects.

### Blur

Makes elements soft and out of focus.

```css
img {
  filter: blur(5px);
}
```

**Unit:** pixels (px)

### Brightness

Controls how light or dark something appears.

```css
img {
  filter: brightness(150%);
}
```

**Unit:** percentage (%)

### Grayscale

Converts color to black and white.

```css
img {
  filter: grayscale(100%);
}
```

**Unit:** percentage (%)

### Sepia

Adds a warm, brownish tone for a retro photo effect.

```css
img {
  filter: sepia(70%);
}
```

**Unit:** percentage (%)

---

## CSS Transform

CSS transform lets you change the appearance of an element by scaling, rotating, moving (translating), or skewing it.

### Transform Functions

- **`scale()`** – Resize an element (make it bigger or smaller)
- **`rotate()`** – Rotate the element by degrees
- **`translate()`** – Move the element left/right or up/down
- **`skew()`** – Slant the element along the X or Y axis

```css
/* Makes the image 20% larger */
img {
  transform: scale(1.2);
}

/* Rotates the box 45 degrees clockwise */
.box {
  transform: rotate(45deg);
}

/* Moves the element 50px to the right and 100px down */
div {
  transform: translate(50px, 100px);
}

/* Skews the element 20 degrees on the X axis and 10 degrees on the Y axis */
div {
  transform: skew(20deg, 10deg);
}
```

---

## Transitions & Hover Effects

A transition lets you change a property smoothly over time instead of instantly.

### Transition Syntax

```css
selector {
  transition: property duration timing-function delay;
}
```

**Parameters:**

- **`property`** – The CSS property you want to transition (e.g., `background-color`, `width`, `opacity`)
- **`duration`** – The time it takes for the transition to complete (e.g., `1s` for 1 second)
- **`timing-function`** – How the transition progresses (e.g., `linear`, `ease`, `ease-in`)
- **`delay`** – How long to wait before starting the transition (optional)

### Example with Hover

```css
.button {
  background-color: green;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: blue;
}
```
