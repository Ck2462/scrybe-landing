# Development Guide

## 🚀 Quick Start

### Option 1: Use the startup script (Recommended)
```bash
./start.sh
```

### Option 2: Manual server start
```bash
# Python 3 (default)
python3 -m http.server 8000

# Or Python 2
python -m http.server 8000

# Or Node.js
npx serve . -p 8000
```

### Option 3: VS Code Live Server
- Install "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

## 📁 Project Structure

```
scrybe-landing/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design rules
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Image assets
├── start.sh               # Startup script
├── package.json           # Project configuration
└── README.md              # Project documentation
```

## 🎨 Development Workflow

1. **Start the server**: `./start.sh`
2. **Open browser**: Navigate to `http://localhost:8000`
3. **Make changes**: Edit HTML, CSS, or JavaScript files
4. **Refresh browser**: See changes immediately
5. **Stop server**: Press `Ctrl+C` in terminal

## 🔧 Key Features

### CSS Custom Properties
All colors, spacing, and transitions are defined in CSS variables at the top of `style.css`:
```css
:root {
  --primary-color: #1a365d;
  --secondary-color: #00b4d8;
  --accent-color: #7209b7;
  /* ... more variables */
}
```

### Responsive Breakpoints
- **Mobile**: Default (up to 767px)
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

### Animation Classes
- `.fade-in` - Fade in from bottom
- `.slide-in-left` - Slide in from left
- `.slide-in-right` - Slide in from right

## 📱 Mobile-First Development

The CSS is built with a mobile-first approach:
1. Write base styles for mobile
2. Use `@media (min-width: 768px)` for tablet+
3. Use `@media (min-width: 1024px)` for desktop+
4. Use `@media (min-width: 1440px)` for large screens

## 🎯 JavaScript Features

### Interactive Elements
- Mobile navigation toggle
- Feature tabs switching
- Scroll-triggered animations
- Smooth scrolling for anchor links
- Form handling with loading states
- Ripple effects on buttons

### Performance Optimizations
- Lazy loading for images
- Debounced resize handlers
- Intersection Observer for animations
- Scroll progress indicator

## 🎨 Customization

### Colors
Update the CSS custom properties in `:root` to change the entire color scheme.

### Typography
The project uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Update `--font-primary` and `--font-heading` in CSS

### Spacing
All spacing uses CSS custom properties:
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem

## 🐛 Debugging Tips

### CSS Issues
- Check browser dev tools for CSS conflicts
- Verify CSS custom properties are loaded
- Check responsive breakpoints

### JavaScript Issues
- Open browser console for error messages
- Verify all DOM elements exist before JavaScript runs
- Check for JavaScript errors in console

### Layout Issues
- Use browser dev tools to inspect elements
- Check CSS Grid and Flexbox properties
- Verify responsive breakpoints are working

## 📦 Adding New Features

### New Section
1. Add HTML structure to `index.html`
2. Add CSS styles to `style.css`
3. Add responsive rules to `responsive.css`
4. Add JavaScript functionality if needed

### New Component
1. Create component HTML structure
2. Add component-specific CSS
3. Add JavaScript interactions if needed
4. Test across all breakpoints

## 🚀 Deployment

### Static Hosting
The project is ready for static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Build Process
No build step required - it's a static site. For production:
1. Optimize images
2. Minify CSS/JS (optional)
3. Add analytics tracking
4. Update meta tags for production URLs

## 📚 Resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 