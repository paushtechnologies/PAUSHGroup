import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['home', 'services', 'about', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileOpen) handleDrawerToggle();
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', background: 'white', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: 'var(--primary)' }}>PAUSH Group</Typography>
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollTo(item.id)}
              sx={{
                borderRadius: 3,
                mb: 1,
                backgroundColor: activeSection === item.id ? 'rgba(0, 71, 171, 0.08)' : 'transparent',
                color: activeSection === item.id ? 'var(--primary)' : 'var(--text-primary)',
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 800 : 600,
                  fontSize: '1.1rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        fullWidth
        startIcon={<PhoneIcon />}
        href="tel:+919456644264"
        sx={{ mt: 2, py: 2, borderRadius: 3, fontWeight: 900 }}
      >
        Call direct
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.35)' : 'transparent',
          backdropFilter: scrolled ? 'blur(30px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(180%)' : 'none',
          boxShadow: scrolled ? '0 15px 45px rgba(0, 71, 171, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', height: scrolled ? 75 : 100, transition: 'all 0.5s ease' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => scrollTo('home')}>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + '/logo1.png'}
                alt="PAUSH Group Logo"
                sx={{
                  width: 52,
                  height: 52,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 12px rgba(0, 71, 171, 0.25))',
                }}
              />

              <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', gap: 0 }}>
                <Typography variant="h5" sx={{
                  fontWeight: 950,
                  letterSpacing: '0.02em',
                  color: '#1a202c',
                  lineHeight: 1,
                  fontSize: '1.7rem',
                  fontFamily: "'Outfit', sans-serif",
                  m: 0
                }}>PAUSH</Typography>
                <Typography variant="subtitle1" sx={{
                  fontWeight: 800,
                  letterSpacing: '0.35em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  lineHeight: 1,
                  mt: -0.2, // Tighter vertical spacing
                  opacity: 0.95
                }}>GROUP</Typography>
              </Box>
            </Box>

            <Box sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              background: scrolled ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)',
              p: 0.8,
              borderRadius: 50,
              position: 'relative',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
            }}>
              {menuItems.map((item) => (
                <Box key={item.id} sx={{ position: 'relative' }}>
                  <Button
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      color: activeSection === item.id ? 'white' : 'var(--text-primary)',
                      fontWeight: 800,
                      px: 3.5,
                      py: 1.2,
                      borderRadius: 50,
                      zIndex: 1,
                      transition: 'color 0.4s ease',
                      '&:hover': { background: activeSection === item.id ? 'transparent' : 'rgba(0,0,0,0.03)' }
                    }}
                  >
                    {item.label}
                  </Button>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="tel:+919456644264"
                startIcon={<PhoneIcon />}
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  px: 4,
                  borderRadius: 50,
                  whiteSpace: 'nowrap',
                  background: 'var(--gradient-ocean)',
                  boxShadow: '0 10px 25px rgba(0, 71, 171, 0.2)',
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(0, 71, 171, 0.3)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                +91 94566 44264
              </Button>
              <IconButton onClick={handleDrawerToggle} sx={{
                display: { md: 'none' },
                color: scrolled ? 'var(--primary)' : 'var(--text-primary)',
                background: scrolled ? 'white' : 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(5px)'
              }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <motion.div
          style={{
            scaleX,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--gradient-ocean)',
            transformOrigin: '0%',
            opacity: scrolled ? 1 : 0
          }}
        />
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>{drawer}</Drawer>
    </>
  );
};

export default Navbar;
