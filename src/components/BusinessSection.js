import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import {
  Code,
  TrendingUp,
  Home,
  CreditCard,
  Article,
  ArrowForward,
  DesignServices,
  LocalShipping,
} from '@mui/icons-material';
import { motion, useInView, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import AppointmentForm from './AppointmentForm';
import CardOffers from './CardOffers';
import RealEstateListings from './RealEstateListings';
import InteriorPortfolio from './InteriorPortfolio';
import { GOOGLE_SHEET_URL } from '../config';

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StickyCard = ({ business, index, handleCardClick, setConsultationOpen, setInteriorPortfolioOpen }) => {
  const ref = useRef(null);

  // Use scroll progress for the animation effects - tracking entry and exit
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Optimized animation curves - softer spring for a premium "liquid" feel on all devices
  // Specialized config for the last card to make its arrival feel more deliberate
  const springConfig = business.isLast ? {
    stiffness: 30,
    damping: 25,
    mass: 1.5,
    restDelta: 0.001
  } : {
    stiffness: 45,
    damping: 20,
    mass: 1,
    restDelta: 0.001
  };

  // Scale: Enters at 0.96 -> Active at 1.0 -> Shrinks to 0.8 as it is 'covered'
  const smoothScale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.96, 1, 1, 0.8]), springConfig);
  // Opacity: Fades in -> Stays opaque -> Dips slightly to 0.5 as it recedes
  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.6, 0.8], [0, 1, 1, 0.5]), springConfig);
  // Last card starts appearing slightly later to give Swift Logistics more 'breathing room'
  const smoothY = useSpring(
    useTransform(scrollYProgress, business.isLast ? [0.05, 0.3] : [0, 0.2], [120, 0]),
    springConfig
  );

  return (
    <Box
      ref={ref}
      sx={{
        position: 'sticky',
        // Cumulative top offset for both mobile and desktop to create a 'stack' effect at the top
        top: { xs: 75 + (index * 15), md: 100 + (index * 20) },
        // Reduced distances to minimize "hard work" scrolling
        mb: business.isLast ? { xs: 2, md: 4 } : { xs: '30vh', md: '45vh' },
        zIndex: index,
        willChange: 'transform, opacity',
      }}
    >
      <motion.div
        style={{
          scale: smoothScale,
          opacity: smoothOpacity,
          y: smoothY,
          transformOrigin: 'top center'
        }}
      >
        <Card
          onClick={() => handleCardClick(business)}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: { xs: 4, md: 8 },
            overflow: 'hidden',
            background: 'white',
            border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.04)',
            // Adjusted minHeight and width for a better desktop balance
            minHeight: { xs: 520, sm: 580, md: 500 },
            maxWidth: { md: 1150 },
            mx: 'auto',
            transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
            cursor: 'pointer',
            userSelect: 'none',
            '&:hover': {
              borderColor: 'rgba(0, 71, 171, 0.1)',
              boxShadow: '0 45px 90px rgba(0, 71, 171, 0.08)',
            }
          }}
        >
          {/* Image Container - Premium fixed height/width ratio */}
          <Box sx={{
            width: { xs: '100%', md: '45%' },
            height: { xs: 180, sm: 240, md: 'auto' },
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000' // Better contrast for loading
          }}>
            <Box
              component="img"
              src={business.image}
              alt={business.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                willChange: 'transform',
                transition: 'transform 0.8s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 15, md: 40 },
                left: { xs: 15, md: 40 },
                p: { xs: 1, md: 1.5 },
                borderRadius: { xs: 2, md: 3 },
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: 'var(--primary)',
                display: 'flex',
                boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                zIndex: 2
              }}
            >
              {React.cloneElement(business.icon, { sx: { fontSize: { xs: 20, md: 32 } } })}
            </Box>
          </Box>

          <CardContent sx={{
            width: { xs: '100%', md: '55%' },
            p: { xs: 3, sm: 4, md: 5 },
            pt: { md: 4, lg: 5 },
            px: { md: 4, lg: 5 },
            pb: { md: 6, lg: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#fff',
            flexGrow: 1
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: { xs: 0.5, md: 1 } }}>
              <Typography variant="h3" sx={{
                fontWeight: 950,
                letterSpacing: '-0.04em',
                fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.5rem', lg: '3.1rem' },
                color: 'var(--text-primary)'
              }}>
                {business.title}
              </Typography>
              <Typography variant="h4" sx={{
                fontWeight: 950,
                color: 'rgba(0,0,0,0.03)',
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                lineHeight: 0.8,
                display: { xs: 'none', md: 'block' }
              }}>
                0{index + 1}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: { xs: 1.4, md: 1.6 },
                mb: { xs: 2, md: 1.5 },
                fontSize: { xs: '0.85rem', md: '1.15rem' },
                fontWeight: 500,
                maxWidth: { md: '100%' }
              }}
            >
              {business.desktopDescription || business.description}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 }, mb: { xs: 2.5, md: 2 } }}>
              {business.services.map((s, i) => (
                <Chip
                  key={i}
                  label={s}
                  variant="filled"
                  sx={{
                    background: 'rgba(0, 71, 171, 0.05)',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    fontSize: { xs: '0.62rem', md: '0.8rem' },
                    height: { xs: 20, md: 32 },
                    px: { md: 1.5 },
                    borderRadius: { xs: 1.2, md: 2 },
                  }}
                />
              ))}
            </Box>

            <Box sx={{ mt: { xs: 0, md: 3 } }}>
              {business.hasMultipleActions ? (
                <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1.5, md: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={(e) => { e.stopPropagation(); setConsultationOpen(true); }}
                    sx={{
                      py: { xs: 1.4, md: 1.8 },
                      borderRadius: { xs: 2.2, md: 3.5 },
                      fontWeight: 950,
                      background: 'var(--gradient-ocean)',
                      fontSize: { xs: '0.75rem', md: '0.9rem' },
                      boxShadow: '0 15px 35px rgba(0, 71, 171, 0.15)'
                    }}
                  >
                    <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>Book Consultation</Box>
                    <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>Consult</Box>
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={(e) => { e.stopPropagation(); setInteriorPortfolioOpen(true); }}
                    sx={{
                      py: { xs: 1.4, md: 1.8 },
                      borderRadius: { xs: 2.2, md: 3.5 },
                      fontWeight: 950,
                      fontSize: { xs: '0.75rem', md: '0.9rem' },
                      borderWidth: { md: 2 },
                      borderColor: 'rgba(0, 71, 171, 0.2)',
                      '&:hover': { borderWidth: { md: 2 } }
                    }}
                  >
                    <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>View Project Portfolio</Box>
                    <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>Portfolio</Box>
                  </Button>
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  onClick={(e) => { e.stopPropagation(); handleCardClick(business); }}
                  endIcon={<ArrowForward sx={{ fontSize: { md: 22 } }} />}
                  sx={{
                    py: { xs: 1.5, md: 1.8 },
                    px: { xs: 4, md: 6 },
                    borderRadius: { xs: 2.2, md: 3.5 },
                    fontWeight: 950,
                    background: 'var(--gradient-ocean)',
                    width: { xs: '100%', sm: 'fit-content' },
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    boxShadow: '0 15px 35px rgba(0, 71, 171, 0.15)'
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>Explore In Detail</Box>
                  <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>Explore</Box>
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

const BusinessSection = () => {
  const ref = useRef(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [realEstateOpen, setRealEstateOpen] = useState(false);
  const [interiorPortfolioOpen, setInteriorPortfolioOpen] = useState(false);
  const [logisticsOpen, setLogisticsOpen] = useState(false);

  const businesses = [
    {
      id: 1,
      title: 'Digital Solutions',
      icon: <Code sx={{ fontSize: 40 }} />,
      description: 'Personalized technology support for businesses. We build the tools that help you operate smoothly in the digital world.',
      desktopDescription: 'From custom enterprise tools to comprehensive digital transformation, we bridge the gap between technology and your daily operations. Our suite includes end-to-end website support, bespoke software development, and the implementation of robust digital infrastructures designed for global scalability.',
      services: ['Custom Tools', 'Website Development', 'Digital Setup'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=90',
      available: true,
      actionType: 'link',
      link: 'https://tech.paushgroup.in',
      anchorId: 'digital-solutions',
    },
    {
      id: 4,
      title: 'Interior Space',
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      description: 'End-to-end interior planning, design, and construction services across North India, delivering high-quality residential and commercial interior solutions through integrated expertise and execution.',
      desktopDescription: 'We provide complete interior solutions, managing every stage from initial conceptual architectural planning to final execution. Our experience on residential and commercial projects across North India combines luxury aesthetics with functional engineering, ensuring every vision is delivered with quality.',
      services: ['Planning', 'Handover Support', 'Execution'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=90',
      available: true,
      actionType: 'interior',
      hasMultipleActions: true,
      anchorId: 'interior-space',
    },
    {
      id: 6,
      title: 'News & Digital Media',
      icon: <Article sx={{ fontSize: 40 }} />,
      description: 'A digital media organization engaged in the collection, creation, and distribution of news and current-affairs content through online platforms.',
      desktopDescription: 'Operating at the intersection of information and integrity, our media vertical leverages cutting-edge verification technology to deliver accurate, real-time current affairs content. We provide high-value market trends and briefings through a network of online platforms, empowering our audience with trusted insights and global perspectives.',
      services: ['Briefings', 'Verification Tech', 'Market Trends'],
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=90',
      available: true,
      actionType: 'link',
      link: 'https://livebharat.paushgroup.in',
      anchorId: 'digital-media',
    },
    {
      id: 2,
      title: 'Equity Guidance',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      description: 'Straightforward market analysis and portfolio reviews. We help you understand the data to make confident decisions.',
      desktopDescription: 'Navigating the complexities of modern markets requires more than just data—it requires depth. We provide rigorous portfolio reviews and straightforward analysis, stripping away the noise to offer clear, actionable insights for confident decision-making and long-term wealth preservation for our individual and institutional partners.',
      services: ['Market Support', 'Portfolio Review', 'Data Insights'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90',
      available: true,
      actionType: 'appointment',
      anchorId: 'equity-guidance',
    },
    {
      id: 5,
      title: 'FinTech Advisory',
      icon: <CreditCard sx={{ fontSize: 40 }} />,
      description: 'Helping you choose the right financial instruments for your business and personal lifestyle needs.',
      desktopDescription: 'We simplify the selection of financial instruments, aligning high-performance credit options and reward strategies with your specific business goals and lifestyle requirements. Our advisory services focus on maximizing your financial potential through curated guidance and a deep understanding of the rapidly evolving FinTech landscape.',
      services: ['Credit Selection', 'Reward Strategy', 'Financial Guidance'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      available: false,
      actionType: 'offers',
      anchorId: 'fintech-advisory',
    },
    {
      id: 7,
      title: 'Swift Logistics',
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      description: 'Professional truck booking and transportation services. We provide reliable logistics solutions for businesses across the country.',
      desktopDescription: 'Streamlining your supply chain with precision and scale. Our logistics vertical offers a comprehensive fleet network for reliable truck booking, real-time load management, and customized transportation planning. Whether it is local distribution or long-haul haulage, we ensure your cargo moves efficiently through optimized routes and verified execution.',
      services: ['Truck Booking', 'Full Load', 'Route Planning'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90',
      available: true,
      actionType: 'logistics',
      anchorId: 'swift-logistics',
    },
    {
      id: 3,
      title: 'Verified Realty',
      icon: <Home sx={{ fontSize: 40 }} />,
      description: 'Direct access to verified residential plots and land options. We focus on transparency and strategic locations.',
      desktopDescription: 'Transparency is the cornerstone of our real estate operations. We offer direct access to verified residential plots and strategic land acquisitions, backed by thorough due diligence. Each project is vetted for its future value and regulatory compliance, ensuring your investment is secure and positioned for significant growth.',
      services: ['Property Match', 'Verified Land', 'Cost per Sq. Yard'],
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=90',
      available: true,
      actionType: 'realestate',
      anchorId: 'verified-realty',
    },
  ];

  const businessesWithZones = businesses.map((b, i) => ({
    ...b,
    isLast: i === businesses.length - 1
  }));

  const handleCardClick = (business) => {
    if (business.hasMultipleActions) return;
    if (business.actionType === 'appointment') setAppointmentOpen(true);
    else if (business.actionType === 'offers') setOffersOpen(true);
    else if (business.actionType === 'realestate') setRealEstateOpen(true);
    else if (business.actionType === 'logistics') setLogisticsOpen(true);
    else if (business.available && business.actionType === 'link') {
      window.open(business.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      ref={ref}
      id="services"
      sx={{
        py: { xs: 4, md: 10 },
        backgroundColor: '#fafafa',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 5, md: 15 }, textAlign: { xs: 'left', md: 'center' } }}>
          <Typography variant="overline" sx={{ color: 'var(--primary)', fontWeight: 900, letterSpacing: '0.4em', mb: 2, display: 'block', fontSize: { xs: '0.65rem', md: '0.75rem' } }}>
            Our Ecosystem
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 950, fontSize: { xs: '2.2rem', md: '5rem' }, letterSpacing: '-0.05em', lineHeight: 1.1, mb: 3 }}>
            Focused Impact Through<br />
            <Box component="span" className="text-gradient">Versatile Verticals</Box>
          </Typography>

          {/* Quick Counter Stats */}
          <Grid container spacing={{ xs: 2.5, md: 4 }} sx={{ mt: { xs: 4, md: 8 }, justifyContent: 'center' }}>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)', fontSize: { xs: '1.5rem', md: '2.1rem' } }}><Counter value={2020} /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6, fontSize: '0.65rem' }}>ESTABLISHED</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)', fontSize: { xs: '1.5rem', md: '2.1rem' } }}><Counter value={200} suffix="+" /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6, fontSize: '0.65rem' }}>PROJECTS DELIVERED</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)', fontSize: { xs: '1.5rem', md: '2.1rem' } }}><Counter value={12} suffix="+" /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6, fontSize: '0.65rem' }}>SERVICES</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {businessesWithZones.map((business, index) => (
            <React.Fragment key={business.id}>
              {/* Invisible anchor for precise footer navigation */}
              <div
                id={business.anchorId}
                style={{
                  position: 'relative',
                  top: '-50px', // Minor offset to land perfectly
                  height: 0,
                  visibility: 'hidden'
                }}
              />
              <StickyCard
                business={business}
                index={index}
                handleCardClick={handleCardClick}
                setConsultationOpen={setConsultationOpen}
                setInteriorPortfolioOpen={setInteriorPortfolioOpen}
              />
            </React.Fragment>
          ))}
        </Box>
      </Container>

      <AppointmentForm open={appointmentOpen} onClose={() => setAppointmentOpen(false)} type="appointment" googleSheetUrl={GOOGLE_SHEET_URL} />
      <AppointmentForm open={consultationOpen} onClose={() => setConsultationOpen(false)} type="consultation" googleSheetUrl={GOOGLE_SHEET_URL} />
      <CardOffers open={offersOpen} onClose={() => setOffersOpen(false)} />
      <RealEstateListings open={realEstateOpen} onClose={() => setRealEstateOpen(false)} />
      <InteriorPortfolio open={interiorPortfolioOpen} onClose={() => setInteriorPortfolioOpen(false)} />
      <AppointmentForm open={logisticsOpen} onClose={() => setLogisticsOpen(false)} type="logistics" googleSheetUrl={GOOGLE_SHEET_URL} />
    </Box>
  );
};

export default BusinessSection;
