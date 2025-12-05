# Lipika Art Portfolio

A stunning, modern portfolio website for visual artist Lipika.

## Project Structure

```
lipika-art/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom styles (scrollbar, animations, grid, etc.)
├── js/
│   └── main.js         # JavaScript (canvas animation, lightbox, navigation)
└── README.md           # This file
```

## Features

- **Responsive Design** - Mobile-first approach with fluid typography
- **Animated Background** - Particle canvas animation
- **Masonry Gallery** - CSS-only masonry grid layout
- **Lightbox** - Full-screen image viewer with keyboard support
- **Scroll Reveal** - Intersection Observer-based animations
- **Mobile Menu** - Slide-in navigation for mobile devices

## Technologies

- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Lucide Icons** - Modern icon library
- **Google Fonts** - Inter & Syne typefaces
- **Vanilla JavaScript** - No frameworks, just clean JS

## Development

1. Clone the repository
2. Open `index.html` in your browser, or run a local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve
```

3. Visit `http://localhost:8080`

## Customization

### Artwork Data
Edit the `artData` array in `js/main.js` to update gallery items:

```javascript
const artData = [
    { 
        src: "image-url.jpg", 
        title: "Artwork Title", 
        desc: "Medium, Year" 
    },
    // ...
];
```

### Colors & Theming
Tailwind config is in `index.html`. Custom CSS variables are in `css/styles.css`.

### Typography
The hero title uses a fluid font size defined in `css/styles.css`:
```css
.hero-title {
    font-size: clamp(1.75rem, 8.5vw, 8rem);
}
```

## License

© 2024 Lipika. All rights reserved.