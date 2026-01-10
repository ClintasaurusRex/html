# Box Model

## What is the Box Model?

The CSS Box Model treats every HTML element as a rectangular box with four parts:

- **Content** – The actual text, image, or other content inside the box
- **Padding** – Space between the content and the border
- **Border** – A line that surrounds the padding and content
- **Margin** – Space outside the border that separates the element from other elements

## Padding

CSS padding creates space between an element's content and its border.

### Individual padding properties:

```css
selector {
  padding-top: value;
  padding-right: value;
  padding-bottom: value;
  padding-left: value;
}
```

### Shorthand notation:

```css
/* Same padding on all sides */
padding: 20px;

/* Top/bottom: 10px, Left/right: 25px */
padding: 10px 25px;

/* Top, Right, Bottom, Left individually */
padding: 15px 30px 10px 5px;
```

Values can be specified in pixels (px), ems (em), percentages (%), or other valid CSS units.

## Margin

The margin property creates space around an element, outside of any borders. You can control margin on all four sides independently or use shorthand notation.

### Individual margin properties:

```css
selector {
  margin-top: value;
  margin-right: value;
  margin-bottom: value;
  margin-left: value;
}
```

### Shorthand notation:

```css
/* Same margin on all sides */
margin: 20px;

/* Top/bottom: 10px, Left/right: 25px */
margin: 10px 25px;

/* Top: 15px, Right: 30px, Bottom: 10px, Left: 5px */
margin: 15px 30px 10px 5px;
```

## Borders

A border is a line that surrounds an element, separating it from other elements and defining its boundaries.

### Border properties:

- **border-width** – Thickness (px, em, or keywords like thin, medium, thick)
- **border-style** – Style (dotted, dashed, solid, double)
- **border-color** – Color (named colors, hex, RGB, HSL)

### Individual properties:

```css
selector {
  border-width: value;
  border-style: value;
  border-color: value;
}
```

### Shorthand notation:

```css
selector {
  border: width style color;
}
```

### Example:

```css
p {
  border: 2px solid blue;
}
```

## Width and Height

The width and height properties control the dimensions of an element's content area:

```css
selector {
  width: value;
  height: value;
}
```

Values can be specified in pixels (px), ems (em), percentages (%), or use auto for automatic calculation:

```css
div {
  width: 300px;
  height: 200px;
}

img {
  width: 100%;
  height: auto;
}
```

---

📝 **Quiz**: Test your understanding of the Box Model
