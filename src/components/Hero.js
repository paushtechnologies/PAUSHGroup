import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material';
import {
  RocketLaunch,
  TrendingUp,
} from '@mui/icons-material';
import { motion, animate } from 'framer-motion';
import PartnershipForm from './PartnershipForm';

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (value) => setCount(Math.floor(value)),
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const [partnershipOpen, setPartnershipOpen] = useState(false);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* 🌟 HIGHLY NOTICEABLE Animated Background Elements */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Box
          className="hero-blob-active"
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 71, 171, 0.4) 0%, transparent 75%)',
          }}
        />
        <Box
          className="hero-blob-active"
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(32, 178, 170, 0.3) 0%, transparent 75%)',
            animationDelay: '-5s',
          }}
        />

        {/* Floating Particles/Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              width: i % 2 === 0 ? '40px' : '60px',
              height: i % 2 === 0 ? '40px' : '60px',
              border: '2px solid var(--primary)',
              borderRadius: i % 3 === 0 ? '50%' : '12px',
              opacity: 0.2
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    background: 'white',
                    borderRadius: 50,
                    width: 'fit-content',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    mb: 4,
                  }}
                >
                  <RocketLaunch sx={{ fontSize: 16, color: 'var(--primary)' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    Forward-Thinking Since 2020
                  </Typography>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '3rem', md: '4.5rem', xl: '5.5rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.04em',
                    mb: 2,
                  }}
                >
                  <Typography component="span" sx={{ display: 'none' }}>PAUSH Group: </Typography>
                  Architects of<br />
                  <Box component="span" className="text-gradient">Possibility.</Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    lineHeight: 1.6,
                    mb: 6,
                    maxWidth: 550,
                    fontWeight: 500
                  }}
                >
                  A dynamic team dedicated to practical innovation across
                  Technology, Finance, and Real Estate.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setPartnershipOpen(true)}
                    sx={{
                      background: 'var(--gradient-ocean)',
                      px: 5,
                      py: 2.2,
                      fontSize: '1.1rem',
                      fontWeight: 900,
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0, 71, 171, 0.25)',
                    }}
                  >
                    Partner With Us
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="animate-pulse-premium"
                    component={motion.button}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    sx={{
                      px: 5,
                      py: 2.2,
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      borderRadius: 4,
                      borderWidth: 2,
                      borderColor: 'rgba(0, 71, 171, 0.2)',
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': { borderWidth: 2, background: 'rgba(0, 71, 171, 0.05)' }
                    }}
                  >
                    Our Verticals
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    marginTop: '10px',
                    width: '100%',
                    aspectRatio: '1.1/1',
                    borderRadius: 10,
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-medium)',
                    position: 'relative',
                  }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Corporate Architecture"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Counter Badges */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                      p: 3,
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 950, color: 'var(--primary)' }}>
                      <Counter value={50} suffix="+" />
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.6 }}>ACTIVE PROJECTS</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    p: 3,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box sx={{ p: 1, background: 'var(--primary)', borderRadius: 2, color: 'white' }}>
                    <TrendingUp />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.2 }}>300% Growth</Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>Client Efficiency</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <PartnershipForm open={partnershipOpen} onClose={() => setPartnershipOpen(false)} />
    </Box >
  );
};

export default Hero;
