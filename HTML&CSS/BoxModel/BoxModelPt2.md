# Box Model Part 2

## Box Sizing

The box-sizing property determines how the total width and height of an element are calculated:

```css
selector {
  box-sizing: value;
}
```

### Values:

- **content-box** (default): Width and height only include content size. Padding and borders are added outside.
- **border-box**: Width and height include content, padding, and border sizes. Margins are still added outside.

### content-box example:

```css
div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: content-box;
  /* Total width: 300px + 40px + 10px = 350px */
}
```

### border-box example:

```css
.container {
  width: 400px;
  height: 300px;
  padding: 30px;
  border: 10px solid red;
  box-sizing: border-box;
  /* Total width: 400px (content shrinks to fit) */
}
```

## Border Radius

The border-radius property creates rounded corners for elements:

```css
selector {
  border-radius: value;
}
```

Values can be specified in pixels (px), ems (em), percentages (%), or other valid CSS units.

### Single value - applies same radius to all corners:

```css
div {
  border-radius: 10px;
}
```

### Four values - individual corners (top-left, top-right, bottom-right, bottom-left):

```css
.button {
  border-radius: 10px 20px 30px 40px;
}
```

### Two values - first applies to top-left and bottom-right, second to top-right and bottom-left:

```css
img {
  border-radius: 20px 50px;
}
```

## Overflow

The overflow property controls what happens to content that overflows its element's box:

```css
selector {
  overflow: value;
}
```

### Overflow values:

- **visible**: Default. Content overflows outside the element's box
- **hidden**: Overflowing content is clipped and invisible
- **scroll**: Adds scrollbars (horizontal and vertical)
- **auto**: Browser adds scrollbars only when necessary

### Example:

```css
div {
  width: 200px;
  height: 100px;
  overflow: scroll;
}
```

### Control horizontal and vertical overflow independently:

```css
.example {
  overflow-x: hidden; /* Hide horizontal overflow */
  overflow-y: scroll; /* Add vertical scrollbar */
}
```

## Box Shadow

The box-shadow property adds shadow effects to elements:

```css
selector {
  box-shadow: horizontal-offset vertical-offset blur spread color inset;
}
```

### Properties:

- **horizontal-offset**: Horizontal distance (positive = right, negative = left)
- **vertical-offset**: Vertical distance (positive = down, negative = up)
- **blur** (optional): Blur radius (larger = more blurred)
- **spread** (optional): Spread radius (positive = expand, negative = shrink)
- **color** (optional): Shadow color
- **inset** (optional): Creates inner shadow instead of outer

### Examples:

```css
div {
  box-shadow: 5px 5px 10px gray;
}

.button {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
}
```

### Complete HTML Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Model Example</title>
    <style>
      div {
        width: 280px;
        height: 150px;
        padding: 15px;
        border: 3px solid #444;
        border-radius: 10px;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
        overflow: scroll;
      }
    </style>
  </head>
  <body>
    <div class="headline">
      <h3>Biggest Tech Breakthrough of 2025!</h3>
      <p>
        Scientists have unveiled a revolutionary AI model that can predict climate changes with 99%
        accuracy. This groundbreaking innovation is expected to transform how governments and
        organizations respond to global warming, extreme weather events, and natural disasters.
        Experts believe that integrating AI-driven forecasting with existing climate policies will
        significantly reduce environmental damage over the next decade.
      </p>
    </div>
    <div class="article">
      <h3>Opinion: The Future of Web Design</h3>
      <p>
        As CSS evolves, developers are experimenting with more dynamic layouts and interactive user
        experiences...
      </p>
    </div>
  </body>
</html>
```
