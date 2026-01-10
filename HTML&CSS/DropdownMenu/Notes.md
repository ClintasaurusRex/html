```html
<html>
  <head>
    <title>Dropdown Menu</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section class="menu-panel">
      <h2>Hobby Club</h2>
      <nav class="top-menu">
        <ul class="menu-list">
          <li class="menu-item">Photography</li>
          <li class="menu-item">Cooking</li>
          <li class="menu-item has-submenu">
            Games
            <ul class="submenu">
              <li>Board Games</li>
              <li>Card Games</li>
              <li>Video Games</li>
            </ul>
          </li>
          <li class="menu-item">Drawing</li>
          <li class="menu-item">Music</li>
        </ul>
      </nav>
      <div class="menu-controls">
        <input type="text" class="search" placeholder="Search activities..." />
        <button class="cta-button">Join a Club!</button>
      </div>
      <div class="info-section">
        <p class="intro">Welcome to the Hobby Club community!</p>
        <p>Joining a hobby club is a great way to meet people who share your interests.</p>
        <p>
          You can learn new skills, have fun, and even discover talents you didn’t know you had!
        </p>
      </div>
    </section>
  </body>
</html>
```
