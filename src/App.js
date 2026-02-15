import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import BusinessSection from './components/BusinessSection';
import Testimonials from './components/Testimonials';
import ImpactTimeline from './components/ImpactTimeline';
import Footer from './components/Footer';
import WhatsAppConcierge from './components/WhatsAppConcierge';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0047AB', // Ocean Blue
      light: '#357ABD',
      dark: '#002E6E',
    },
    secondary: {
      main: '#20B2AA', // Sea Foam
      light: '#E0F2F1',
      dark: '#008080',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A202C',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
      fontSize: '4.5rem',
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 50,
          padding: '14px 36px',
          fontWeight: 600,
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 10px 25px rgba(0, 71, 171, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 50px rgba(0, 71, 171, 0.12)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <BusinessSection />
      <FAQ />
      <Testimonials />
      <ImpactTimeline />
      <Footer />
      <WhatsAppConcierge />
    </ThemeProvider>
  );
}

export default App;
