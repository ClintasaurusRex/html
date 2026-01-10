Variables

CSS variables let you save values as names and reuse them throughout your CSS. They help keep code clean and consistent.

Define variables with -- prefix and use them with var():

Using CSS Variables

CSS variables (custom properties) let you save values under a name and reuse them throughout your CSS.

Variables are declared inside a selector using --variable-name syntax. Use :root to make variables global:

```css
:root {
  --main-color: midnightblue;
  --padding: 16px;
}
```

To use a variable, use the var() function:

```css
.button {
  background-color: var(--main-color);
  padding: var(--padding);
}
```

Variables for Design Tokens

Design tokens are CSS variables that store your site's main colors, fonts, spacing, and other style values for consistency and easy updates.

Create design tokens in the :root selector:

```css
:root {
/_ Colors _/
--primary-color: #3498db;
--secondary-color: #2ecc71;

/_ Spacing _/
--spacing-small: 8px;
--spacing-medium: 16px;
--spacing-large: 24px;

/_ Typography _/
--font-size-small: 12px;
--font-size-medium: 16px;
--font-size-large: 24px;
}
```

Apply design tokens using var():

```css
.button {
background-color: var(--primary-color);
padding: var(--spacing-small) var(--spacing-medium);
font-size: var(--font-size-medium);
}

.card {
border: 1px solid var(--secondary-color);
margin: var(--spacing-medium);
padding: var(--spac
```

Local Variables

CSS variables can be defined locally within specific selectors, not just globally in :root. Local variables only apply to elements within that selector's scope.

```css
.card {
--card-color: orchid;
background-color: var(--card-color);
}
This creates a variable --card-color that only works inside .card elements, providing more targeted control over styling specific components.
```
