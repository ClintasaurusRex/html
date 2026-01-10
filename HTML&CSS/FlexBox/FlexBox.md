# What is a Flex Box?

To create a flex container, set the display property to flex:

```css
.container {
  display: flex;
}
```

This turns the element into a flex container and its direct children into flex items.

## Common Flexbox Properties

| Property          | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `flex-direction`  | Direction of flex items (row, column, row-reverse, column-reverse)                       |
| `justify-content` | Aligns items along main axis (flex-start, flex-end, center, space-between, space-around) |
| `align-items`     | Aligns items along cross axis (flex-start, flex-end, center, baseline, stretch)          |
| `flex-wrap`       | Controls wrapping (wrap, nowrap, wrap-reverse)                                           |
| `align-content`   | Aligns flex lines when there's extra space in cross axis                                 |

## Flex Direction

The `flex-direction` property controls the direction in which items are arranged inside a flex container:

```css
.container {
  display: flex;
  flex-direction: value;
}
```

### Values:

- **row**: Default. Items placed left to right (horizontal main axis)
- **row-reverse**: Items placed right to left (horizontal main axis)
- **column**: Items placed top to bottom (vertical main axis)
- **column-reverse**: Items placed bottom to top (vertical main axis)

```css
.container-row {
  display: flex;
  flex-direction: row;
}

.container-column {
  display: flex;
  flex-direction: column;
}
```

## Justify Content

The `justify-content` property controls how flex items are spaced along the main axis of a flex container:

```css
.container {
  display: flex;
  justify-content: value;
}
```

### Available values:

- **flex-start**: Items packed toward the start (default)
- **flex-end**: Items packed toward the end
- **center**: Items centered along the line
- **space-between**: Items evenly distributed, first at start, last at end
- **space-around**: Items evenly distributed with equal space around them
- **space-evenly**: Items distributed with equal spacing between any two items

```css
.container-start {
  display: flex;
  justify-content: flex-start;
}

.container-center {
  display: flex;
  justify-content: center;
}
```

## Align Items

The `align-items` property controls how flex items are aligned along the cross axis (opposite of the main axis):

```css
.container {
  display: flex;
  align-items: value;
}
```

### Available values:

- **stretch**: Default. Items stretch to fill the container
- **flex-start**: Items placed at the start of the cross axis
- **flex-end**: Items placed at the end of the cross axis
- **center**: Items centered along the cross axis
- **baseline**: Items aligned by their baselines

```css
.container-start {
  display: flex;
  align-items: flex-start;
}

.container-center {
  display: flex;
  align-items: center;
}
```

## The Perfect Center

To perfectly center an element both horizontally and vertically using Flexbox, combine `justify-content: center` and `align-items: center`:

```css
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 300px; /* Define height for visible vertical centering */
}
```

The flex container must have a defined height for vertical centering to be apparent.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Selectors</title>

    <style>
      .container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-end;
      }
      .item4 {
        background-color: rgba(255, 255, 0, 0.562);
        padding: 80px;
      }
      .item3 {
        background-color: rgba(255, 0, 0, 0.445);
        padding: 60px;
      }
      .item2 {
        background-color: rgba(0, 128, 0, 0.363);
        padding: 40px;
      }
      .item1 {
        background-color: rgba(0, 255, 255, 0.363);
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item1">Item 1</div>
      <div class="item2">Item 2</div>
      <div class="item3">Item 3</div>
      <div class="item4">Item 4</div>
    </div>
  </body>
</html>
```

# LOGIN FORM

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Selectors</title>

    <style>
      body {
        background-color: blanchedalmond;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.5);
        border: 2px solid black;
        text-align: center;
      }
      input {
        width: 100%;
        padding: 4px;
        border: 1px solid black;
        margin: 2px;
        box-sizing: border-box;
        border-radius: 5px;
      }
      input::placeholder {
        text-align: center;
      }
      button {
        width: 100%;
        margin: 2px;
        background-color: rgba(10, 201, 201, 0.486);
        padding: 3px;
        color: purple;
        font-weight: bold;
        border-radius: 5px;
        box-shadow: 1px 1px;
      }
    </style>
  </head>
  <body>
    <form class="login-form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </body>
</html>
```
