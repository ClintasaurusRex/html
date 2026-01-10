# Layout Techniques

## Inline vs Block

Block vs Inline Elements

HTML elements are categorized as either block-level or inline elements based on their display behavior.

Block-level Elements
Block-level elements start on a new line and take up the full width available, stretching left and right as far as possible.

Examples: <div>, <h1>-<h6>, <p>, <ul>, <ol>, <li>, <form>, <table>, <header>, <footer>, <section>, <article>, <nav>

Inline Elements
Inline elements do not start on a new line and only take up as much width as necessary to fit their content. They flow within a line of text or inside block-level elements.

Examples: <span>, <a>, <img>, <strong>, <em>, <input>, <button>, <label>, <textarea>

## Positioning Basics

Positioning Basics

The position property controls how elements are positioned on a web page:

```css
selector {
  position: value;
}
```

Position values:

static: Default positioning in normal document flow
relative: Positioned relative to its normal position, still occupies space in flow
absolute: Removed from normal flow, positioned relative to nearest positioned ancestor
fixed: Removed from normal flow, positioned relative to viewport, stays fixed when scrolling
Use top, right, bottom, and left properties to adjust position (except with static).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Selectors</title>

    <style>
      .container {
        width: 400px;
        height: 300px;
        border: 1px solid black;
      }
      .box {
        width: 100px;
        height: 100px;
        background-color: lightblue;
      }
      /* Write CSS rules here */
      .container {
        position: relative;
      }
      .box {
        position: absolute;
        top: 50px;
        left: 100px;
        /* This will position the box 50 pixels from the top and 100 pixels from the left of its positioned ancestor (the container). */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box"></div>
    </div>
  </body>
</html>
```

# Relative Positioning

Relative positioning allows you to **shift an element from where it would normally be**, without affecting other elements around it.

Think of it like this: The element is placed in its normal spot first, then you can nudge it in any direction. The key point is that **other elements still act as if the element is in its original position** - they don't move to fill the space.

## Basic syntax:

```css
selector {
  position: relative;
  top: value; /* Moves DOWN from normal position */
  right: value; /* Moves LEFT from normal position */
  bottom: value; /* Moves UP from normal position */
  left: value; /* Moves RIGHT from normal position */
}
```

This moves the element 20px down and 30px right from its normal position.

## Absolute Positioning

Absolute positioning places an element exactly where you want it inside its container. The element is removed from normal layout flow and positions itself based on the nearest positioned ancestor.

### Basic syntax:

```css
.parent {
  position: relative; /* Make the parent a positioned ancestor */
}

.child {
  position: absolute;
  top: value;
  right: value;
  bottom: value;
  left: value;
}
```

### Example:

```css
.parent {
  position: relative;
  width: 400px;
}

.child {
  position: absolute;
  top: 50px;
  left: 100px;
  width: 200px;
}
```

- `position: absolute;` removes the element from normal flow.
- `top`, `right`, `bottom`, `left` properties specify position relative to the nearest positioned ancestor.
- Values can be in pixels (`px`), ems (`em`), percentages (`%`), or other CSS units.
- If no positioned ancestor exists, the element positions relative to the page.

## Fixed Positioning

Fixed positioning keeps an element in the same spot on the screen regardless of scrolling. The element is removed from normal layout flow.

### Basic syntax:

```css
selector {
  position: fixed;
  top: value;
  right: value;
  bottom: value;
  left: value;
}
```

### Example - fixing an element to the top-left of viewport:

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
}
```

Position properties (`top`, `right`, `bottom`, `left`) specify the element's position relative to the viewport and accept values in pixels, ems, percentages, or other CSS units.

## Z-Index Basics

The `z-index` property controls the stacking order of positioned elements. Elements with higher `z-index` values appear in front of elements with lower values.

### Basic syntax:

```css
selector {
  position: relative; /* or absolute, fixed, or sticky */
  z-index: value;
}
```

### Requirements:

- Element must have a position other than `static`.
- Value can be positive, negative, or zero.
- Higher values stack in front of lower values.
