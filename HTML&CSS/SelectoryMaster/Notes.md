## Descendant Selector

The descendant selector styles elements that are inside another element, even if they are deeply nested.

### Syntax

Use a space between the parent and descendant selectors:

```css
.container p {
  color: blue;
}
```

This selects all `<p>` elements inside any element with class `container`, regardless of nesting level.

## Child Selector

The child selector (`>`) selects only direct children of an element, not deeper descendants.

### Syntax

```css
parent > child {
  /* styles */
}
```

### Example

```html
<div class="parent">
  <p>Direct child - will be styled</p>
  <section>
    <p>Grandchild - won't be styled</p>
  </section>
</div>
```

```css
.parent > p {
  color: red;
}
```

Only the first paragraph will be red because it's a direct child of `.parent`.

## Adjacent Sibling Selector

The adjacent sibling selector (`+`) styles an element that comes immediately after a specific element. Both elements must have the same parent.

### Syntax

```css
element1 + element2 {
  /* styles */
}
```

### Example

```css
h2 + p {
  font-weight: bold;
}
```

This targets paragraphs that directly follow an `h2` element.

## General Sibling Selector

The general sibling selector (`~`) selects all elements that are siblings of a specified element and come after it.

### Example

```css
h2 ~ p {
  color: blue;
}
```

This selects all `<p>` elements that are siblings of `<h2>` and come after it in the HTML structure.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fluid Layouts</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- This tag ensures that the webpage scales properly on different devices. -->
    <head>
   <title>Responsive Navigation</title>
  <style>
        /* Your CSS solution here */
      .rooms > p {
        color: #40e0d0;
      }

      .facilities p {
        color: #2e8b57;
      }
      div ~ p{
        color: #f4a300;
      }
    </style>
</head>
<body>
    <section>
  		<h1>Welcome to Paradise Resort</h1>

  		<div class="rooms">
    		<h2>Ocean View Rooms</h2>
    		<p>Room 101</p>
    		<p>Room 102</p>
  		</div>

  		<div class="facilities">
    		<h2>Resort Facilities</h2>
    		<div>
      			<p>Infinity Pool</p>
      			<p>Spa & Wellness Center</p>
    		</div>
    		<p>Beach Access</p>
  		</div>

  		<p>Beachfront Restaurant</p>
  		<p>Sunset Bar</p>

	</section>
</body>
</html>


```
