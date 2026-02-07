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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  });

  // Use Springs for smoother, jitter-free transitions
  const smoothScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.9, 1]), { stiffness: 100, damping: 20 });
  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.8], [0.98, 1]), { stiffness: 100, damping: 20 });
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [50, 0]), { stiffness: 100, damping: 20 });

  return (
    <Box
      ref={ref}
      sx={{
        position: 'sticky',
        top: 100 + index * 40,
        mb: index === 5 ? 0 : 20,
        zIndex: index,
        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))'
      }}
    >
      <motion.div style={{ scale: smoothScale, opacity: smoothOpacity, y: smoothY }}>
        <Card
          onClick={() => handleCardClick(business)}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: 10,
            overflow: 'hidden',
            background: 'white',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.05)',
            minHeight: { md: 520 },
            transition: 'all 0.5s ease',
            '&:hover': {
              boxShadow: '0 50px 100px rgba(0, 71, 171, 0.1)',
              '& .card-img': { transform: 'scale(1.05)' },
            }
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '45%' }, position: 'relative', overflow: 'hidden' }}>
            <Box
              component="img"
              src={business.image}
              alt={business.title + " - PAUSH Group Service"}
              className="card-img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 40,
                left: 40,
                p: 2.5,
                borderRadius: 5,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                color: 'var(--primary)',
                display: 'flex',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }}
            >
              {business.icon}
            </Box>
          </Box>

          <CardContent sx={{ width: { xs: '100%', md: '55%' }, p: { xs: 5, md: 10 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Typography variant="h3" sx={{ fontWeight: 950, letterSpacing: '-0.04em' }}>
                {business.title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'rgba(0,0,0,0.1)', fontSize: '4rem', lineHeight: 0.8 }}>
                0{index + 1}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 5, fontSize: '1.2rem', fontWeight: 500 }}
            >
              {business.description}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
              {business.services.map((s, i) => (
                <Chip
                  key={i}
                  label={s}
                  variant="filled"
                  sx={{
                    background: 'rgba(0, 71, 171, 0.04)',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    fontSize: '0.8rem',
                    borderRadius: 3,
                    px: 1.5,
                  }}
                />
              ))}
            </Box>

            <Box>
              {business.hasMultipleActions ? (
                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    onClick={(e) => { e.stopPropagation(); setConsultationOpen(true); }}
                    sx={{ py: 2, px: 5, borderRadius: 4, fontWeight: 900, background: 'var(--gradient-ocean)' }}
                  >
                    Consultation
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={(e) => { e.stopPropagation(); setInteriorPortfolioOpen(true); }}
                    sx={{ py: 2, px: 5, borderRadius: 4, fontWeight: 900 }}
                  >
                    Portfolio
                  </Button>
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  onClick={(e) => { e.stopPropagation(); handleCardClick(business); }}
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 2, px: 6,
                    borderRadius: 4,
                    fontWeight: 900,
                    background: 'var(--gradient-ocean)',
                  }}
                >
                  Explore
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

  const businesses = [
    {
      id: 1,
      title: 'Digital Solutions',
      icon: <Code sx={{ fontSize: 40 }} />,
      description: 'Personalized technology support for businesses. We build the tools that help you operate smoothly in the digital world.',
      services: ['Custom Tools', 'Website Support', 'Digital Setup'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=90',
      available: true,
      actionType: 'link',
      link: 'https://tech.paushgroup.in',
    },
    {
      id: 4,
      title: 'Interior Space',
      icon: <DesignServices sx={{ fontSize: 40 }} />,
      description: 'End-to-End interior planning, design, and construction services across North India, delivering high-quality residential and commercial interior solutions through integrated expertise and execution.',
      services: ['Planning', 'Handover Support', 'Execution'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=90',
      available: true,
      actionType: 'interior',
      hasMultipleActions: true,
    },
    {
      id: 6,
      title: 'News & Digital Media',
      icon: <Article sx={{ fontSize: 40 }} />,
      description: 'A digital media organization engaged in the collection, creation, and distribution of news and current-affairs content through online platforms.',
      services: ['Briefings', 'Verification Tech', 'Market Trends'],
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=90',
      available: true,
      actionType: 'link',
      link: 'https://linkbharat.paushgroup.in',
    },
    {
      id: 2,
      title: 'Equity Guidance',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      description: 'Straightforward market analysis and portfolio reviews. We help you understand the data to make confident decisions.',
      services: ['Market Support', 'Portfolio Review', 'Data Insights'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90',
      available: true,
      actionType: 'appointment',
    },
    {
      id: 5,
      title: 'FinTech Advisory',
      icon: <CreditCard sx={{ fontSize: 40 }} />,
      description: 'Helping you choose the right financial instruments for your business and personal lifestyle needs.',
      services: ['Credit Selection', 'Reward Strategy', 'Financial Guidance'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      available: false,
      actionType: 'offers',
    },
    {
      id: 3,
      title: 'Verified Realty',
      icon: <Home sx={{ fontSize: 40 }} />,
      description: 'Direct access to verified residential plots and land options. We focus on transparency and strategic locations.',
      services: ['Property Match', 'Verified Land', 'Cost per Sq. Yard'],
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=90',
      available: true,
      actionType: 'realestate',
    },
  ];

  const handleCardClick = (business) => {
    if (business.hasMultipleActions) return;
    if (business.actionType === 'appointment') setAppointmentOpen(true);
    else if (business.actionType === 'offers') setOffersOpen(true);
    else if (business.actionType === 'realestate') setRealEstateOpen(true);
    else if (business.available && business.actionType === 'link') {
      window.open(business.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      ref={ref}
      id="services"
      sx={{
        py: { xs: 15, md: 25 },
        backgroundColor: '#fafafa',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 15, textAlign: { xs: 'left', md: 'center' } }}>
          <Typography variant="overline" sx={{ color: 'var(--primary)', fontWeight: 900, letterSpacing: '0.4em', mb: 3, display: 'block' }}>
            Our Ecosystem
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 950, fontSize: { xs: '3rem', md: '5rem' }, letterSpacing: '-0.05em', lineHeight: 1.1, mb: 4 }}>
            Focused Impact Through<br />
            <Box component="span" className="text-gradient">Versatile Verticals</Box>
          </Typography>

          {/* Quick Counter Stats */}
          <Grid container spacing={4} sx={{ mt: 8, justifyContent: 'center' }}>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)' }}><Counter value={2020} /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6 }}>ESTABLISHED</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)' }}><Counter value={200} suffix="+" /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6 }}>PROJECTS DELIVERED</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--primary)' }}><Counter value={12} suffix="+" /></Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.6 }}>SERVICES</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {businesses.map((business, index) => (
            <StickyCard
              key={business.id}
              business={business}
              index={index}
              handleCardClick={handleCardClick}
              setConsultationOpen={setConsultationOpen}
              setInteriorPortfolioOpen={setInteriorPortfolioOpen}
            />
          ))}
        </Box>
      </Container>

      <AppointmentForm open={appointmentOpen} onClose={() => setAppointmentOpen(false)} type="appointment" googleSheetUrl={GOOGLE_SHEET_URL} />
      <AppointmentForm open={consultationOpen} onClose={() => setConsultationOpen(false)} type="consultation" googleSheetUrl={GOOGLE_SHEET_URL} />
      <CardOffers open={offersOpen} onClose={() => setOffersOpen(false)} />
      <RealEstateListings open={realEstateOpen} onClose={() => setRealEstateOpen(false)} />
      <InteriorPortfolio open={interiorPortfolioOpen} onClose={() => setInteriorPortfolioOpen(false)} />
    </Box>
  );
};

export default BusinessSection;
