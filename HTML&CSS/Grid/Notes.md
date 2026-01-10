# Grid Basics

CSS Grid is a layout system for creating web pages with rows and columns. To create a grid container, use `display: grid`:

```css
.container {
  display: grid;
}
```

## Defining Columns

Define columns using `grid-template-columns` with `px` or `fr` units (fractions):

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns, middle is twice as wide */
}
```

## Defining Rows and Spacing

Define rows with `grid-template-rows` and add spacing with `gap`:

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with specific heights */
  gap: 20px; /* Space between grid items */
}
```

## Grid-row Item Placement

The `grid-row` property controls where an item is placed vertically in a CSS Grid, specifying which row to start and end the item.

**Basic syntax:**

```css
.item {
  grid-row: start-line / end-line;
}
```

**Example spanning from row line 1 to row line 4:**

```css
.item1 {
  grid-row: 1 / 4;
}
```

You can also use the `span` keyword to span across multiple rows:

```css
.item2 {
  grid-row: 2 / span 2;
}
```

## Named Areas

Use `grid-template-areas` to create named grid layouts:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

Each line of text makes a row, and each word in the line is a part of the grid. Repeating a word stretches that area across more space.

**Assign elements to grid areas using `grid-area`:**

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```
