import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  WhatsApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const businessLinks = [
    { name: 'Digital Support', href: '#services' },
    { name: 'Equity Reviews', href: '#services' },
    { name: 'Verified Land', href: '#services' },
    { name: 'Interior Space', href: '#services' },
    { name: 'Financial Hub', href: '#services' },
    { name: 'Market Trends', href: '#services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
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
  };

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 12 },
        pb: 4,
      }}
    >
      {/* 🌟 VIBRANT LIGHT MOTION BACKGROUND */}
      <Box className="footer-liquid-container">
        <Box className="glow-orb orb-1" />
        <Box className="glow-orb orb-2" />
        <Box className="glow-orb orb-3" />
        <Box className="footer-grid-overlay" />
        <Box className="grid-scanner" />
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            className="footer-micro-dot"
            sx={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)'
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={8}>
          {/* Main Brand Section */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 950,
                    color: 'var(--primary)',
                    letterSpacing: '-0.06em',
                    fontSize: { xs: '3rem', md: '5rem' }
                  }}
                >
                  PAUSH Group
                </Typography>
                <Box sx={{
                  width: 12, height: 12,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  alignSelf: 'flex-end',
                  mb: 2.5
                }} />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: '#0f172a', // Maximum high-contrast visibility
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 500,
                  fontWeight: 600,
                  fontSize: '1.25rem'
                }}
              >
                Practical innovation across verticals.
                Supporting your ecosystem with integrity and foresight.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Button
                  variant="contained"
                  size="large"
                  href="tel:+919456644264"
                  startIcon={<Phone />}
                  sx={{
                    background: 'var(--gradient-ocean)',
                    color: 'white',
                    px: 6,
                    py: 2.2,
                    borderRadius: 4,
                    fontWeight: 900,
                    boxShadow: '0 15px 30px rgba(0, 71, 171, 0.2)'
                  }}
                >
                  Direct Call
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href="https://wa.me/919456644264"
                  target="_blank"
                  startIcon={<WhatsApp />}
                  sx={{
                    background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                    color: 'white',
                    px: 6,
                    py: 2.2,
                    borderRadius: 4,
                    fontWeight: 900,
                    boxShadow: '0 15px 30px rgba(37, 211, 102, 0.2)',
                    transition: 'all 0.4s ease',
                    border: 'none',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(37, 211, 102, 0.4)',
                      opacity: 0.9
                    }
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} lg={7}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 950, mb: 4, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Verticals
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {businessLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      sx={{
                        color: '#0f172a', // Maximum visibility
                        textDecoration: 'none',
                        transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        '&:hover': { color: 'var(--primary)', transform: 'translateX(10px)' }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 950, mb: 4, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Navigation
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      sx={{
                        color: '#0f172a', // Maximum visibility
                        textDecoration: 'none',
                        transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        '&:hover': { color: 'var(--primary)', transform: 'translateX(10px)' }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 950, mb: 4, color: 'var(--text-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  Headquarters
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <LocationOn sx={{ color: 'var(--primary)', fontSize: 24, opacity: 0.9 }} />
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.6 }}>
                      Office 509, Infinity Plaza,<br />
                      Sapphire Street, NeoTech Hub, Pune – 414141<br />
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Email sx={{ color: 'var(--primary)', fontSize: 24, opacity: 0.9 }} />
                    <Typography variant="body1" sx={{ fontWeight: 800, color: '#0f172a' }}>
                      paushgroup@gmail.com
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, idx) => (
                      <IconButton
                        key={idx}
                        sx={{
                          p: 1.5,
                          background: 'white',
                          color: 'var(--text-secondary)',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                          transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          '&:hover': {
                            background: 'var(--primary)',
                            color: 'white',
                            transform: 'translateY(-8px) rotate(8deg)',
                            boxShadow: '0 10px 20px rgba(0, 71, 171, 0.3)'
                          }
                        }}
                      >
                        <Icon fontSize="small" />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(0, 71, 171, 0.12)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Typography variant="body2" sx={{ color: '#475569', fontWeight: 800, letterSpacing: '0.05em' }}>
            © {currentYear} PAUSH GROUP. BUILT FOR THE FUTURE.
          </Typography>

          <Box sx={{ display: 'flex', gap: 6 }}>
            <Link href="#" sx={{ color: '#475569', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', '&:hover': { color: 'var(--primary)' } }}>
              Compliance
            </Link>
            <Link href="#" sx={{ color: '#475569', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', '&:hover': { color: 'var(--primary)' } }}>
              Data Protocol
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
