# Scrybe Landing Page

A modern, responsive landing page for Scrybe - an AI-powered conversation analysis platform.

## 🚀 Quick Start

### Option 1: Python Server (Recommended)
```bash
# Navigate to project directory
cd scrybe-landing

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 2: Node.js Server
```bash
# Install dependencies
npm install

# Start server
npm run serve

# Open in browser
open http://localhost:3000
```

### Option 3: VS Code Live Server
- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

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
├── package.json            # Project configuration
└── README.md              # This file
```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px, 1024px, and 1440px
- **Modern Animations**: Smooth scroll-triggered animations and hover effects
- **Interactive Elements**: Tabbed features, hover states, and smooth transitions
- **Accessibility**: ARIA labels, proper contrast ratios, and keyboard navigation
- **Performance**: Lightweight animations using CSS transforms and opacity

## 🛠️ Development

### Prerequisites
- Python 3.x (for local server)
- Node.js 14+ (optional, for npm scripts)
- Modern web browser

### Local Development
1. Clone or download the project
2. Navigate to the project directory
3. Start the local server using one of the methods above
4. Open `http://localhost:8000` in your browser
5. Make changes to files and refresh browser to see updates

### File Organization
- **HTML**: Semantic structure and content
- **CSS**: Styling, animations, and responsive design
- **JavaScript**: Interactive functionality and scroll effects
- **Assets**: Images, icons, and other media files

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Customization

The landing page is built with customization in mind:
- Color scheme defined in CSS custom properties
- Modular CSS structure for easy modifications
- JavaScript functions can be easily extended
- Responsive breakpoints are clearly defined

## 📄 License

MIT License - feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

---

**Note**: This is a prototype landing page. For production use, consider adding:
- Image optimization
- CSS/JS minification
- CDN integration
- Analytics tracking
- SEO optimization 