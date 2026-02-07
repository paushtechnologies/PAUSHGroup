import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
} from '@mui/material';
import { Close, ArrowBack, ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const InteriorPortfolio = ({ open, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'Residential - Flat',
      title: 'Modern 3 BHK Apartment',
      location: 'Noida',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      description: 'Contemporary design with Indian aesthetics',
    },
    {
      id: 2,
      category: 'Residential - Flat',
      title: 'Luxury 4 BHK Penthouse',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      description: 'Premium interiors with modern amenities',
    },
    {
      id: 3,
      category: 'Commercial - Shop',
      title: 'Retail Store Design',
      location: 'Gurgaon',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Functional and aesthetic commercial space',
    },
    {
      id: 4,
      category: 'Residential - Flat',
      title: 'Compact 2 BHK Design',
      location: 'Noida',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      description: 'Space-efficient modern design',
    },
    {
      id: 5,
      category: 'Commercial - Shop',
      title: 'Boutique Store Interior',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'Elegant retail space design',
    },
    {
      id: 6,
      category: 'Residential - Flat',
      title: 'Traditional Modern Fusion',
      location: 'Noida',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      description: 'Blend of traditional and contemporary',
    },
    {
      id: 7,
      category: 'Residential - Flat',
      title: 'Minimalist 3 BHK',
      location: 'Gurgaon',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      description: 'Clean lines and functional design',
    },
    {
      id: 8,
      category: 'Commercial - Shop',
      title: 'Showroom Design',
      location: 'Noida',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      description: 'Professional commercial interior',
    },
    {
      id: 9,
      category: 'Residential - Flat',
      title: 'Family Home Design',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      description: 'Warm and inviting family space',
    },
  ];

  const currentIndex = selectedImage !== null ? portfolioItems.findIndex(item => item.id === selectedImage) : -1;

  const handleNext = () => {
    if (currentIndex < portfolioItems.length - 1) {
      setSelectedImage(portfolioItems[currentIndex + 1].id);
    } else {
      setSelectedImage(portfolioItems[0].id);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(portfolioItems[currentIndex - 1].id);
    } else {
      setSelectedImage(portfolioItems[portfolioItems.length - 1].id);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: 'var(--bg-primary)',
            borderRadius: 4,
            maxHeight: '90vh',
            boxShadow: 'var(--shadow-lg)',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Interior Portfolio
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'var(--text-secondary)',
              '&:hover': { color: 'var(--primary)', background: 'rgba(0, 0, 0, 0.05)' },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 4 }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 600, maxWidth: 600, mx: 'auto' }}>
              We are currently finalizing project documentation and professional photography.
              Real-world site images will be updated shortly.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {portfolioItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0, 71, 171, 0.12)',
                        '& .portfolio-overlay': { opacity: 1 },
                        '& .portfolio-image': { transform: 'scale(1.1)' },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 300, overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        className="portfolio-image"
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          filter: 'grayscale(100%) blur(2px)',
                          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                      {/* Coming Soon Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 71, 171, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
                            fontWeight: 900,
                            letterSpacing: '0.2em',
                            fontSize: '0.9rem',
                            padding: '8px 20px',
                            border: '2px solid white',
                            backdropFilter: 'blur(5px)',
                            borderRadius: 1,
                            textTransform: 'uppercase',
                          }}
                        >
                          Coming Soon
                        </Typography>
                      </Box>

                      <Box
                        className="portfolio-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to top, rgba(0, 71, 171, 0.8) 0%, transparent 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          p: 3,
                          opacity: 0.9,
                          transition: 'opacity 0.3s ease',
                          zIndex: 3,
                        }}
                      >
                        <Chip
                          label={item.category}
                          size="small"
                          sx={{
                            backgroundColor: 'white',
                            color: 'var(--primary)',
                            fontWeight: 800,
                            mb: 1.5,
                            alignSelf: 'flex-start',
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
                            fontWeight: 800,
                            fontSize: '1.25rem',
                            letterSpacing: '-0.01em',
                            mb: 0.5,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                          {item.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Full Screen Image Viewer */}
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        maxWidth={false}
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.95)',
            maxWidth: '95vw',
            maxHeight: '95vh',
            m: 2,
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.8)',
                color: '#0A0A0A',
              },
            }}
          >
            <Close />
          </IconButton>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.8)',
                color: '#0A0A0A',
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.8)',
                color: '#0A0A0A',
              },
            }}
          >
            <ArrowForward />
          </IconButton>

          <AnimatePresence mode="wait">
            {selectedImage !== null && (
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  component="img"
                  src={portfolioItems.find(item => item.id === selectedImage)?.image}
                  alt={portfolioItems.find(item => item.id === selectedImage)?.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '95vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                    p: 3,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {portfolioItems.find(item => item.id === selectedImage)?.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {portfolioItems.find(item => item.id === selectedImage)?.description}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Dialog>
    </>
  );
};

export default InteriorPortfolio;
