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
    { name: 'Digital Solutions', href: '#digital-solutions' },
    { name: 'Interior Space', href: '#interior-space' },
    { name: 'News & Media', href: '#digital-media' },
    { name: 'Equity Guidance', href: '#equity-guidance' },
    { name: 'FinTech Advisory', href: '#fintech-advisory' },
    { name: 'Swift Logistics', href: '#swift-logistics' },
    { name: 'Verified Realty', href: '#verified-realty' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      // Use a slightly larger offset to account for our sticky hierarchy (tops start at 100 on md)
      const offset = href === '#home' ? 0 : 120;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
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
        pt: { xs: 2.5, md: 12 },
        pb: { xs: 2, md: 4 },
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
        <Grid container spacing={{ xs: 2, lg: 8 }}>
          {/* Main Brand Section */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: 'flex-start' },
                mb: { xs: 1.5, md: 5 }
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 1, md: 1.5 },
                  mb: 1
                }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 950,
                      color: 'var(--primary)',
                      letterSpacing: '-0.06em',
                      fontSize: { xs: '2rem', md: '5rem' },
                      textAlign: { xs: 'center', lg: 'left' }
                    }}
                  >
                    PAUSH Group
                  </Typography>
                  <Box sx={{
                    width: { xs: 6, md: 12 },
                    height: { xs: 6, md: 12 },
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    alignSelf: 'center',
                    mt: { xs: 0.5, md: 2.5 }
                  }} />
                </Box>

                {/* 🟢 LIVE STATUS INDICATOR */}
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.2,
                  py: 0.4,
                  borderRadius: 10,
                  backgroundColor: 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                  width: 'fit-content'
                }}>
                  <Box sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'pulse-green 2s infinite'
                  }} />
                  <Typography variant="caption" sx={{ fontWeight: 900, color: '#15803d', letterSpacing: '0.05em', fontSize: { xs: '0.45rem', md: '0.6rem' } }}>
                    SYSTEMS ACTIVE • GLOBAL SUPPORT ONLINE
                  </Typography>
                </Box>
                <style>
                  {`
                    @keyframes pulse-green {
                      0% { transform: scale(0.95); opacity: 0.8; }
                      50% { transform: scale(1.1); opacity: 1; }
                      100% { transform: scale(0.95); opacity: 0.8; }
                    }
                  `}
                </style>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: '#0f172a',
                  lineHeight: { xs: 1.4, md: 1.7 },
                  mb: { xs: 2.5, md: 4 },
                  maxWidth: { xs: '100%', lg: 500 },
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  textAlign: { xs: 'center', lg: 'left' },
                  opacity: 0.9
                }}
              >
                Practical innovation across verticals.
                Supporting your ecosystem with integrity and foresight.
              </Typography>

              <Stack
                direction="row"
                spacing={{ xs: 1.2, sm: 3 }}
                sx={{
                  alignItems: 'center',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  flexWrap: 'wrap',
                  gap: { xs: 0.8, sm: 0 }
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="tel:+919456644264"
                  startIcon={<Phone />}
                  sx={{
                    background: 'var(--gradient-ocean)',
                    color: 'white',
                    px: { xs: 3, md: 6 },
                    py: { xs: 1.2, md: 2.2 },
                    borderRadius: 3,
                    fontWeight: 900,
                    boxShadow: '0 12px 24px rgba(0, 71, 171, 0.15)',
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    width: { xs: 'fit-content', sm: 'auto' }
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
                    px: { xs: 3, md: 6 },
                    py: { xs: 1.2, md: 2.2 },
                    borderRadius: 3,
                    fontWeight: 900,
                    boxShadow: '0 12px 24px rgba(37, 211, 102, 0.15)',
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    width: { xs: 'fit-content', sm: 'auto' },
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
            <Grid container spacing={{ xs: 2.2, md: 6 }}>
              <Grid item xs={6} sm={4} sx={{ display: { xs: 'none', sm: 'block' }, textAlign: { xs: 'center', sm: 'left' } }}>
                <Box sx={{ mb: { xs: 1.2, md: 3 }, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h6" sx={{
                    fontWeight: 950,
                    color: 'var(--primary)',
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: 0.5
                  }}>
                    Verticals
                    <Box sx={{ width: '12px', height: '2.5px', background: 'var(--accent)', borderRadius: 2 }} />
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, md: 2.5 } }}>
                  {businessLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      sx={{
                        color: '#0f172a',
                        textDecoration: 'none',
                        transition: '0.3s ease',
                        fontWeight: 700,
                        fontSize: { xs: '0.8rem', md: '1.05rem' },
                        '&:hover': { color: 'var(--primary)', transform: 'translateX(5px)' }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Box sx={{ mb: { xs: 1.2, md: 3 }, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h6" sx={{
                    fontWeight: 950,
                    color: 'var(--primary)',
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: 0.5
                  }}>
                    Navigation
                    <Box sx={{ width: '12px', height: '2.5px', background: 'var(--accent)', borderRadius: 2 }} />
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, md: 2.5 } }}>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      sx={{
                        color: '#0f172a',
                        textDecoration: 'none',
                        transition: '0.3s ease',
                        fontWeight: 700,
                        fontSize: { xs: '0.8rem', md: '1.05rem' },
                        '&:hover': { color: 'var(--primary)', transform: 'translateX(5px)' }
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Box sx={{ mb: { xs: 1.2, md: 3 }, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h6" sx={{
                    fontWeight: 950,
                    color: 'var(--primary)',
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: 0.5
                  }}>
                    Headquarters
                    <Box sx={{ width: '12px', height: '2.5px', background: 'var(--accent)', borderRadius: 2 }} />
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.8, md: 4 }, alignItems: { xs: 'center', sm: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <LocationOn sx={{ color: 'var(--primary)', fontSize: { xs: 20, md: 24 }, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.4, fontSize: { xs: '0.8rem', md: '1rem' }, textAlign: { xs: 'center', sm: 'left' } }}>
                      Office 509, Infinity Plaza,<br />
                      Sapphire Street, Pune
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Email sx={{ color: 'var(--primary)', fontSize: { xs: 20, md: 24 } }} />
                    <Typography variant="body1" sx={{ fontWeight: 800, color: '#0f172a', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                      paushgroup@gmail.com
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                    {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, idx) => (
                      <IconButton
                        key={idx}
                        sx={{
                          p: 1.2,
                          background: 'white',
                          color: 'var(--text-secondary)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                          '&:hover': {
                            background: 'var(--primary)',
                            color: 'white',
                            transform: 'translateY(-12px) scale(1.15) rotate(5deg)',
                            boxShadow: '0 25px 50px rgba(0, 71, 171, 0.25)',
                            '& svg': {
                              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))'
                            }
                          }
                        }}
                      >
                        <Icon sx={{ fontSize: { xs: 18, md: 22 } }} />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 🏢 TRUST BAR / CREDENTIALS STRIP */}
        {/* <Box sx={{
          display: { xs: 'none', md: 'flex' },
          mt: { xs: 6, md: 8 },
          mb: { xs: 4, md: 5 },
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
          opacity: 0.5,
          filter: 'grayscale(100%) brightness(0.8)',
          px: 2
        }}>
          {[' STARTUP INDIA VERIFIED', 'ISO 9001:2015', 'MSME REGISTERED', 'GDPR COMPLIANT', 'ZERO DATA LOGGING'].map((text) => (
            <Typography
              key={text}
              variant="caption"
              sx={{
                fontWeight: 950,
                letterSpacing: '0.2em',
                fontSize: { xs: '0.65rem', md: '0.75rem' },
                '&:hover': { filter: 'none', opacity: 1, color: 'var(--primary)' },
                transition: 'all 0.4s ease',
                cursor: 'default'
              }}
            >
              • {text}
            </Typography>
          ))}
        </Box> */}

        <Divider sx={{ my: { xs: 1.5, md: 6 }, borderColor: 'rgba(0, 71, 171, 0.12)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 0.8, md: 4 },
          }}
        >
          <Typography variant="body2" sx={{ color: '#475569', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'center', fontSize: { xs: '0.65rem', md: '0.8rem' } }}>
            © {currentYear} PAUSH GROUP. BUILT FOR THE FUTURE.
          </Typography>

          <Box sx={{ display: 'flex', gap: { xs: 2.5, md: 6 }, justifyContent: 'center' }}>
            <Link href="#" sx={{ color: '#475569', textDecoration: 'none', fontSize: { xs: '0.6rem', md: '0.8rem' }, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', '&:hover': { color: 'var(--primary)' } }}>
              Compliance
            </Link>
            <Link href="#" sx={{ color: '#475569', textDecoration: 'none', fontSize: { xs: '0.6rem', md: '0.8rem' }, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', '&:hover': { color: 'var(--primary)' } }}>
              Data Protocol
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
