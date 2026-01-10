Pseudo-Classes

Interactive pseudo-classes change element appearance based on user interactions. They use the syntax:

```css
selector:pseudo-class {
  property: value;
}
```

Hover Effects

The :hover pseudo-class changes the style of an element when the user hovers their mouse over it:

```css
button {
  color: black;
}

button:hover {
  color: red;
}
```

In this example, the button text is black by default, but when you hover over it, the text turns red.

Focus Effects

The :focus pseudo-class styles an element when it receives focus (clicked or tabbed to):

```css
input {
  border: 2px solid #ccc;
}

input:focus {
  border-color: #4285f4;
  box-shadow: 0 0 5px rgba(66, 133, 244, 0.5);
}
```

This changes the border color and adds a shadow when the input is focused.

Active Styles

The :active pseudo-class applies styles to an element when it is being activated by the user, typically when clicking and holding the mouse button down.

```css
.action-button {
  background-color: blue;
}
.action-button:active {
  background-color: darkblue;
}
```

This provides visual feedback that the user's action is being registered.

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
        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f0f8ff;
        }
        input {
            padding: 8px;
            font-size: 16px;
            border: 2px solid #ccc;
        }
        a {
            display: inline-block;
            margin-top: 10px;
            color: #0077cc;
            text-decoration: none;
        }
        /* Write your CSS here */
        button:hover{
          background-color: green;
          font-size: 20px;
        }
        input:hover{
          border-color: black;
          background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>Join the Jungle Adventure!</h1>
    <p>Ready to embark on an epic journey? Sign up below:</p>

    <button>Start Adventure</button>

    <br><br>

    <input type="text" placeholder="Enter your explorer name">

    <br><br>

    <a class="more" ref="#">Learn more about the adventure</a>
</body>
</html>
```
