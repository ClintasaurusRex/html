Structural pseudo-classes

Structural pseudo-classes style elements based on their position within the HTML document:

:first-child — selects the first child of a parent
:last-child — selects the last child of a parent
:nth-child(n) — selects the nth child (e.g., every 2nd, 3rd, etc.)

Targeting the First Child

The :first-child pseudo-class targets the first element among a group of sibling elements.

p:first-child {
color: blue;
font-weight: bold;
}
You can combine :first-child with other selectors for more specific targeting:

div:first-child h1 {
color: red;
}
This selects the first div element among its siblings, then targets the h1 tag inside it.

Targeting the Last Child

The :last-child pseudo-class selects elements that are the last child of their parent:

p:last-child {
color: red;
font-weight: bold;
}
This will style only the last paragraph element within its parent container.

Quiz icon
Quiz
