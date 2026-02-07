# PAUSH Group Website

A modern, professional website built with React and Material-UI (MUI) showcasing PAUSH Group's diverse business portfolio.

## Features

- **Modern Design**: Beautiful gradient backgrounds, smooth animations, and responsive layout
- **Business Sections**: Dedicated sections for all business divisions:
  - Technology (Websites, Mobile Apps, AI, Automation)
  - Stock Market (Recommendations, Training, Onboarding)
  - Real Estate (Plots, Lands, Flats)
  - Credit Cards (Recommendations, Latest Offers)
  - Media (News & Updates)
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling navigation with sticky header
- **Professional UI**: Material-UI components with custom theming

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.js       # Navigation bar with mobile menu
  │   ├── Hero.js         # Hero section with main CTA
  │   ├── BusinessSection.js  # All business divisions
  │   └── Footer.js       # Footer with contact info
  ├── App.js              # Main app component with theme
  ├── index.js            # Entry point
  └── index.css           # Global styles
```

## Customization

### Update Company Information

Edit the following files to update company details:
- `src/components/Footer.js` - Contact information
- `src/components/Hero.js` - Hero section text
- `src/components/BusinessSection.js` - Business descriptions

### Change Colors/Theme

Modify the theme in `src/App.js`:
```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    // ... customize colors
  },
});
```

## Technologies Used

- React 18
- Material-UI (MUI) 5
- React Router DOM
- Emotion (for styling)

## License

This project is private and proprietary to PAUSH Group.
