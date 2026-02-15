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
        minHeight: { xs: 'auto', md: '100vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 6 },
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
            width: { xs: '300px', md: '600px' },
            height: { xs: '300px', md: '600px' },
            background: 'radial-gradient(circle, rgba(0, 71, 171, 0.4) 0%, transparent 75%)',
          }}
        />
        <Box
          className="hero-blob-active"
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: { xs: '300px', md: '700px' },
            height: { xs: '300px', md: '700px' },
            background: 'radial-gradient(circle, rgba(32, 178, 170, 0.3) 0%, transparent 75%)',
            animationDelay: '-5s',
          }}
        />
        {/* 🌟 INFINITE MOVING GEOMETRIC OBJECTS */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={`shape-${i}`}
            sx={{
              position: 'absolute',
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              width: { xs: '20px', md: '40px' },
              height: { xs: '20px', md: '40px' },
              border: '2px solid',
              borderColor: i % 2 === 0 ? 'rgba(0, 71, 171, 0.1)' : 'rgba(32, 178, 170, 0.1)',
              borderRadius: i % 3 === 0 ? '50%' : '8px',
              animation: `shape-float-${i} ${15 + i * 5}s infinite ease-in-out`,
              zIndex: 1,
              '@keyframes shape-float-0': { '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(100px, -50px) rotate(45deg)' } },
              '@keyframes shape-float-1': { '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(-80px, 100px) rotate(-90deg)' } },
              '@keyframes shape-float-2': { '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(60px, 80px) rotate(180deg)' } },
              '@keyframes shape-float-3': { '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(-120px, -40px) rotate(-45deg)' } },
              '@keyframes shape-float-4': { '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' }, '50%': { transform: 'translate(40px, -100px) rotate(90deg)' } },
              willChange: 'transform'
            }}
          />
        ))}

        {/* 🌟 INFINITE MOVING MICRO-DOTS */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={`dot-${i}`}
            sx={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
              borderRadius: '50%',
              opacity: 0.25,
              animation: `micro-float ${10 + Math.random() * 15}s infinite linear`,
              animationDelay: `-${Math.random() * 10}s`,
              willChange: 'transform'
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={{ xs: 2, lg: 6 }} alignItems="center">
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
                    gap: 0,
                    px: 2,
                    py: 0.8,
                    background: 'white',
                    borderRadius: 50,
                    width: 'fit-content',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    mb: { xs: 0, md: 4 },
                  }}
                >
                  <RocketLaunch sx={{ fontSize: 16, color: 'var(--primary)' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: { xs: '0.5rem', md: '0.75rem' } }}>
                    Forward-Thinking Since 2020
                  </Typography>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 950,
                    fontSize: { xs: '2.1rem', sm: '3rem', md: '4.5rem', xl: '5.5rem' },
                    lineHeight: { xs: 1.1, md: 1.1 },
                    letterSpacing: '-0.04em',
                    mb: { xs: 0, md: 2 },
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
                    fontSize: { xs: '0.95rem', md: '1.4rem' },
                    lineHeight: 1.5,
                    mb: { xs: 1.5, md: 6 },
                    maxWidth: 550,
                    fontWeight: 500
                  }}
                >
                  A multi-disciplinary ecosystem driving practical innovation across
                  Technology, Interior Design, Media, Logistics, Finance, and Real Estate.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setPartnershipOpen(true)}
                    sx={{
                      background: 'var(--gradient-ocean)',
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.2, md: 2.2 },
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      fontWeight: 900,
                      borderRadius: 3,
                      boxShadow: '0 20px 40px rgba(0, 71, 171, 0.2)',
                    }}
                  >
                    Partner With Us
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className="animate-pulse-premium"
                    sx={{
                      px: { xs: 4, md: 5 },
                      py: { xs: 1.2, md: 2.2 },
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      fontWeight: 800,
                      borderRadius: 3,
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
                    marginTop: { xs: 0, md: '10px' },
                    width: '100%',
                    aspectRatio: { xs: '1.2/1', md: '1.1/1' },
                    borderRadius: { xs: 6, md: 10 },
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

                  {/* Floating Moving Objects (Badges) */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '10%', right: '10%', zIndex: 20 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1.5, md: 3 },
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: { xs: 2.5, md: 4 },
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 950, color: 'var(--primary)', fontSize: { xs: '1.2rem', md: '2.1rem' } }}>
                        <Counter value={50} suffix="+" />
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.6, fontSize: '0.6rem' }}>ACTIVE PROJECTS</Typography>
                    </Box>
                  </motion.div>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '10%',
                      left: '10%',
                      zIndex: 20,
                      p: { xs: 1.5, md: 3 },
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: { xs: 2.5, md: 4 },
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1, md: 2 }
                    }}
                  >
                    <Box sx={{ p: { xs: 0.8, md: 1 }, background: 'var(--primary)', borderRadius: 2, color: 'white' }}>
                      <TrendingUp sx={{ fontSize: { xs: 18, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.2, fontSize: { xs: '0.9rem', md: '1.25rem' } }}>300% Growth</Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontSize: { xs: '0.65rem', md: '0.85rem' } }}>Client Efficiency</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container >
      <PartnershipForm open={partnershipOpen} onClose={() => setPartnershipOpen(false)} />
    </Box >
  );
};

export default Hero;
