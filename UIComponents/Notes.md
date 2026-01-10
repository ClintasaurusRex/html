# Dropdown menu

A dropdown menu shows more links when the user hovers over or focuses on it. Use `:hover` or `:focus-within` to reveal the hidden menu.

## HTML structure

```html
<div class="dropdown">
  <button class="dropdown-button">Menu</button>
  <div class="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>
```

## CSS implementation

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
}

.dropdown:hover .dropdown-content {
  display: block;
}
```

The dropdown container uses `position: relative` so the dropdown content can be positioned with `position: absolute`. The content is hidden by default with `display: none` and shown on hover with `display: block`.

# Tabs

Create tabs without JavaScript using radio buttons, labels, and CSS selectors.

## HTML structure

```html
<div class="tabs">
  <input type="radio" id="tab1" name="tab" checked />
  <label for="tab1">Tab 1</label>
  <div id="content1" class="tab-content">Content for Tab 1</div>

  <input type="radio" id="tab2" name="tab" />
  <label for="tab2">Tab 2</label>
  <div id="content2" class="tab-content">Content for Tab 2</div>
</div>
```

## CSS for tab functionality

```css
/* Hide radio buttons */
input {
  display: none;
}

/* Style tab labels */
label {
  padding: 5px 10px;
  background: lightgray;
  cursor: pointer;
}

/* Hide content by default */
.tab-content {
  display: none;
  padding: 10px;
  border: 1px solid #ccc;
}

/* Show content when radio is checked */
#tab1:checked ~ #content1,
#tab2:checked ~ #content2 {
  display: block;
}

/* Highlight active tab */
#tab1:checked + label,
#tab2:checked + label {
  background: steelblue;
  color: white;
}
```

## CSS sibling selectors

- `+` (adjacent sibling) → selects the immediately next element
- `~` (general sibling) → selects any following sibling element

# Badges

Badges are tiny indicators used to show counts or status next to another element, commonly attached to buttons, icons, or profile pictures.

## Basic HTML structure

```html
<button class="btn">Messages <span class="badge">5</span></button>
```

## CSS styling for badges

```css
.btn {
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
}
```

## Key properties

- `position: absolute` — allows precise positioning relative to parent
- Negative `top` and `right` values — positions badge outside parent element
- `border-radius: 50%` — creates circular shape
- `box-shadow` — adds depth and visual separation

# Tooltips

Tooltips are small, informative pop-up elements that appear when hovering over interface elements.

## Basic HTML structure

```html
<div class="tooltip-container">
  <button>Hover over me</button>
  <span class="tooltip">This is a tooltip!</span>
</div>
```

## CSS for positioning and showing/hiding tooltips

```css
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-container:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
```

# Notification Banners

Notification banners alert users about important information like success messages, warnings, or errors. They typically appear at the top or bottom of a page.

## Create a basic notification banner

```html
<div class="notification">This is a notification message!</div>
```

## Style the notification banner

```css
.notification {
  background-color: #4caf50;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}
```

## For banners with icons, use flexbox to align content

```css
.notification {
  display: flex;
  align-items: center;
}
```

## Add depth with box shadow and spacing between elements

```css
.notification {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notification .icon {
  margin-right: 10px;
  font-size: 18px;
}
```
