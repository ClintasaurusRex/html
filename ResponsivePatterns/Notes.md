# Holy Grail Layout

The Holy Grail Layout is a classic web design pattern with a header, footer, and three columns: left sidebar (navigation), main content (center), and right sidebar.

## Structure

```html
<div class="container">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
```

## CSS Grid Implementation

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

header {
  grid-area: header;
}
nav {
  grid-area: nav;
}
main {
  grid-area: main;
}
aside {
  grid-area: aside;
}
footer {
  grid-area: footer;
}
```

The main content grows to fill available space (`1fr`) while sidebars have fixed widths. On small screens, sidebars typically stack for better readability.
