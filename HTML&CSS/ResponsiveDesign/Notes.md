# What is Responsive Design?

Responsive design creates web pages that adapt to different devices and screen sizes through flexible layouts, scalable media, and media queries.

### Key techniques for responsive design:

- **Flexible grids and layouts**: Using CSS Grid or Flexbox
- **Flexible images and media**: Scaling proportionally with layout
- **Media queries**: Applying different styles based on device characteristics

### Use viewport units for responsive typography:

```css
h1 {
  font-size: 5vw;
}

p {
  font-size: 3vw;
}
```

### Make images responsive with proper scaling:

```css
/* Fixed height - causes distortion */
.fixed-height {
  width: 100%;
  height: 150px;
}

/* Auto height - maintains aspect ratio */
.auto-height {
  width: 100%;
  height: auto;
}
```

```html
    <style>
      h1 {
        font-size: 5vw;
        /* This will make the heading's font size responsive to the viewport width */
      }
      p {
        font-size: 3vw;
        /* This will make the paragraph's font size responsive to the viewport width. */
      }
      .fixed-height {
        width: 100%;
        height: 150px;
        /* This will create a distorted image by forcing a fixed height. */
      }
      .auto-height {
        width: 100%;
        height: auto;
        /* This will make the image scale proportionally while maintaining its aspect ratio. */
      }
      .container {
        width: 300px;
        border: 2px solid #ccc;
        margin: 20px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Mount Everest: The World's Highest Peak</h1>
    <p>
      Mount Everest, standing at 8,848.86 meters (29,031.7 feet), is the tallest mountain on Earth.
      Located in the Himalayas on the border between Nepal and Tibet, it attracts climbers from
      around the world. Scaling Everest is a challenging journey due to its extreme weather, thin
      air, and rough terrain.
    </p>

    <div class="container">
      <h3>Fixed Height (Distorted)</h3>
      <img
        class="fixed-height"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
        alt="Distorted Image"
      />
    </div>

    <div class="container">
      <h3>Auto Height (Preserved Aspect Ratio)</h3>
      <img
        class="auto-height"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
        alt="Proper Ratio Image"
      />
    </div>
  </body>
</html>
```

## Viewport Meta Tag

The viewport meta tag controls layout and scaling on different devices, particularly mobile. It's placed in the `<head>` section for responsive web design.

### Basic syntax:

```html
<meta name="viewport" content="name=value, name=value" />
```

### Common viewport settings:

- **width=device-width**: Sets viewport width to device screen width
- **initial-scale=1.0**: Sets initial zoom level (1.0 = no zoom)
- **maximum-scale=1.0**: Sets maximum zoom level
- **minimum-scale=1.0**: Sets minimum zoom level

### Example implementation:

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

## Fluid Layouts

A fluid layout adjusts to different screen sizes using flexible grids and relative units like percentages instead of fixed pixel values.

### Key principles of fluid layouts:

- **Relative units**: Use percentages (`%`), viewport units (`vw`, `vh`), or ems (`em`) instead of fixed pixels.
- **Flexible grids**: Use CSS Grid or Flexbox for adaptable layouts.
- **Max-width and min-width**: Set limits to prevent elements from becoming too wide or narrow.

### Basic fluid layout example:

```css
.container {
  width: 90%; /* Takes up 90% of viewport width */
  max-width: 1200px; /* Won't exceed 1200px */
}
.sidebar {
  width: 30%; /* 30% of container width */
  float: left;
  /* Positions an element to the left side of its container, allowing content to wrap around it on the right. The element is removed from the normal document flow. */
}
.main-content {
  width: 70%; /* 70% of container width */
  float: left;
}
```

## Viewport Units

Viewport units are relative units based on the browser's viewport size, useful for creating responsive designs.

### Four viewport units:

- **vw (viewport width)**: 1% of viewport width
- **vh (viewport height)**: 1% of viewport height
- **vmin (viewport minimum)**: 1% of smaller viewport dimension
- **vmax (viewport maximum)**: 1% of larger viewport dimension

### Basic syntax:

```css
selector {
  property: value;
}
```

### Example:

```css
.box {
  width: 50vw; /* 50% of viewport width */
  height: 30vh; /* 30% of viewport height */
}
```

## Media Queries Basics

A media query in CSS allows a website to adapt to different screen sizes by applying styles based on device width, height, or other properties.

### Basic syntax:

```css
@media (condition) {
  selector {
    property: value;
  }
}
```

### Common conditions:

- **max-width**: Limits styles to screens with maximum width
- **min-width**: Applies styles to screens with minimum width
- **max-height**: Limits styles to screens with maximum height
- **min-height**: Applies styles to screens with minimum height

### Example:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  body {
    background-color: lightgreen;
  }
}
```

## Flexible Images

Flexible images automatically adjust to fit different screen sizes in responsive web design.

### Using max-width:

```css
img {
  max-width: 100%;
  height: auto; /* Maintains aspect ratio */
}
```

**What's happening:** `max-width: 100%` tells the image it can be as wide as its parent container, but never larger. `height: auto` automatically adjusts the height based on the width so the image doesn't look stretched or squished. This method works best when the image is inside a container that already has a defined size.

**Example:** If you put this image inside a `<div>` that's 500px wide, the image will be 500px wide. On a mobile phone, if that same `<div>` becomes 300px wide, the image shrinks to 300px.

### Using viewport units:

```css
img {
  width: 50vw; /* Image takes up 50% of viewport width */
}
```

**What's happening:** `50vw` means the image takes up 50% of the screen width, no matter what. The image directly responds to the screen size, not a container size. This method is useful when you want images to scale based on the actual device screen size.

**Example:** On a desktop (1000px wide), `50vw` = 500px. On a mobile phone (375px wide), `50vw` = 187px. The image automatically scales with the screen.

**Key difference:** `max-width` relies on its parent container, while `vw` units rely directly on the screen size.

```html
<html>
  <head>
    <title>Flexible Images</title>
    <style>
      /* Write CSS rules here */
    </style>
  </head>
  <body style="background-color:lightblue">
    <div class="container">
      <h2>Image with max-width: 100%</h2>
      <img
        class="img-max"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Adelie_penguins_in_the_South_Shetland_Islands.jpg"
        alt="Max-Width Image"
      />
    </div>

    <div class="container">
      <h2>Image with width: 50vw</h2>
      <img
        class="img-vw"
        src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adelie_Penguins_on_iceberg.jpg"
      />
    </div>
  </body>
</html>
```

## Tonga

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
      .menu{
        position: fixed;
        background-color: rgba(104, 161, 247, 0.836);
        padding: 20px;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 100;
        text-align: center;
      }
      a{
        text-decoration: none;
        font-weight: bold;
        margin: 30px;
        color: white;
      }
      .welcome{
        /* 10vh takes up 10% of the total height of the screen. This makes the layout more flexible across different devices compared to a fixed pixel value. */
        padding-top: 10vh;

      }
      .about{
        padding: 10px;
        max-width:  95vw;
      }
      p, h2{
        color: darkblue;
      }
      img{
        width: 40vw;
        float: right;
        margin: 10px;
      }
      .contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 30vh;
      }
      @media (max-width: 400px){
        .menu{
          padding: 10px;

        }
        img{
          float: none;
          width: 80vw;
          /* Target the img and set its float property to none so that it moves above the text on smaller screens. */
        }
        .contact{
          height: auto;
          /* to auto to allow the section to expand or shrink based on the content, ensuring that all elements remain properly visible and aligned on different screen sizes. */
        }

      }
    </style>
</head>
    <body>
        <nav class="menu">
            <a href="#">About</a>
            <a href="#">Experience</a>
            <a href="#">Contact</a>
        </nav>
        <header class="welcome">
            <h1>Swim with Whales in Tonga</h1>
            <p>Experience the magic of swimming alongside majestic humpback whales.</p>
        </header>
        <section class="about">
            <h2>About Tonga</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Hawaiian_Islands_Humpback_Whale_National_Marine_Sanctuary_breaching_2018.png">
            <p>Tonga is a stunning Polynesian archipelago in the South Pacific, famous for its crystal-clear waters and vibrant marine life. From July to October, humpback whales migrate here to breed, offering a rare chance to swim with these gentle giants. Beyond whale encounters, Tonga boasts pristine beaches, lush tropical landscapes, and a rich cultural heritage. Visitors can explore traditional villages, experience authentic Tongan hospitality, and enjoy activities like snorkeling, diving, and sailing. Whether you're seeking adventure or relaxation, Tonga provides an unforgettable escape into nature’s beauty.</p>
        </section>
        <section class="contact">
            <h2>Plan Your Adventure</h2>
            <table>
                <tr>
                    <td>Phone Number</td>
                    <td>+676 123 4567</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>info@tongawhales.com</td>
                </tr>
            </table>
    </section>
</body>
</html>
```
