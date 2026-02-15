import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  TextField,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Close,
  LocationOn,
  Home,
  SquareFoot,
  Phone,
  Email,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fetchGoogleSheetData } from '../utils/googleSheets';
import { REAL_ESTATE_SHEET_URL } from '../config';

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    backgroundColor: '#fff',
    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(0, 71, 171, 0.3)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--primary)', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-secondary)',
    fontWeight: 500,
    '&.Mui-focused': { color: 'var(--primary)' },
  },
};

const RealEstateListings = ({ open, onClose }) => {
  const [selectedListing, setSelectedListing] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open && REAL_ESTATE_SHEET_URL) {
      loadListings();
    } else if (open && !REAL_ESTATE_SHEET_URL) {
      // Use default listings if no URL provided
      setListings(getDefaultListings());
      setLoading(false);
    }
  }, [open]);

  const loadListings = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchGoogleSheetData(REAL_ESTATE_SHEET_URL);

      if (data && data.length > 0) {
        // Map Google Sheet data to listing format
        // Expected columns: Type, Title, Location, Price, Area, Bedrooms, Bathrooms, Image, Features
        const mappedListings = data.map((row, index) => ({
          id: index + 1,
          type: row.Type || row.type || 'Property',
          title: row.Title || row.title || 'Property Listing',
          location: row.Location || row.location || '',
          price: row.Price || row.price || '',
          area: row.Area || row.area || '',
          bedrooms: row.Bedrooms || row.bedrooms ? parseInt(row.Bedrooms || row.bedrooms) : null,
          bathrooms: row.Bathrooms || row.bathrooms ? parseInt(row.Bathrooms || row.bathrooms) : null,
          image: row.Image || row.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
          features: row.Features || row.features ? (typeof row.Features === 'string' ? row.Features.split(',').map(f => f.trim()) : row.Features) : [],
        }));
        setListings(mappedListings);
      } else {
        setListings(getDefaultListings());
      }
    } catch (err) {
      console.error('Error loading listings:', err);
      setError('Failed to load listings. Showing default listings.');
      setListings(getDefaultListings());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultListings = () => [
    {
      id: 1,
      type: 'Flat',
      title: '3 BHK Luxury Apartment',
      location: 'Sector 62, Noida',
      price: '₹85 Lakhs',
      area: '1,850 sq.ft',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      features: ['Parking', 'Lift', 'Power Backup', 'Security'],
    },
    {
      id: 2,
      type: 'Plot',
      title: 'Residential Plot',
      location: 'Sector 143, Noida',
      price: '₹1.2 Crores',
      area: '300 sq.yd',
      bedrooms: null,
      bathrooms: null,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      features: ['Corner Plot', 'Main Road', 'Clear Title'],
    },
    {
      id: 3,
      type: 'Shop',
      title: 'Commercial Shop',
      location: 'Sector 18, Noida',
      price: '₹45 Lakhs',
      area: '600 sq.ft',
      bedrooms: null,
      bathrooms: null,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      features: ['Ground Floor', 'Main Road', 'Parking Available'],
    },
    {
      id: 4,
      type: 'Flat',
      title: '2 BHK Ready to Move',
      location: 'Sector 137, Noida',
      price: '₹65 Lakhs',
      area: '1,200 sq.ft',
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      features: ['Ready to Move', 'Parking', 'Lift', 'Gated Society'],
    },
    {
      id: 5,
      type: 'Plot',
      title: 'Residential Plot',
      location: 'Sector 150, Noida',
      price: '₹95 Lakhs',
      area: '250 sq.yd',
      bedrooms: null,
      bathrooms: null,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      features: ['Corner Plot', 'Clear Title', 'Near Metro'],
    },
    {
      id: 6,
      type: 'Flat',
      title: '4 BHK Premium Apartment',
      location: 'Sector 44, Noida',
      price: '₹1.5 Crores',
      area: '2,400 sq.ft',
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
      features: ['Premium Location', 'Parking', 'Lift', 'Clubhouse', 'Swimming Pool'],
    },
  ];

  const handleContactClick = (listing) => {
    setSelectedListing(listing);
    setContactForm({
      name: '',
      phone: '',
      email: '',
      message: `I'm interested in this ${listing.type.toLowerCase()}: ${listing.title} at ${listing.location}. Please provide more details.`
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the contact form data
    alert(`Thank you! We'll contact you soon about ${selectedListing.title}`);
    setSelectedListing(null);
    setContactForm({ name: '', phone: '', email: '', message: '' });
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
            Real Estate Portfolio
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

        <DialogContent sx={{ p: { xs: 2, md: 4 }, pt: { xs: 1.5, md: 4 } }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Alert severity="warning" sx={{ borderRadius: 2 }}>{error}</Alert>
          ) : (
            <Grid container spacing={{ xs: 2.5, md: 4 }}>
              {listings.map((listing, index) => (
                <Grid item xs={12} sm={6} md={4} key={listing.id || index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      sx={{
                        borderRadius: { xs: 3, md: 4 },
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 0, 0, 0.04)',
                        boxShadow: 'var(--shadow-soft)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: { md: 'translateY(-10px)' },
                          boxShadow: '0 20px 40px rgba(0, 71, 171, 0.1)',
                          '& .listing-img': { transform: 'scale(1.1)' },
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', height: { xs: 200, md: 240 }, overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          image={listing.image}
                          alt={listing.title}
                          className="listing-img"
                          sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                        <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                          <Chip
                            label={listing.type}
                            size="small"
                            sx={{
                              backgroundColor: 'white',
                              color: 'var(--primary)',
                              fontWeight: 800,
                              boxShadow: 'var(--shadow-soft)',
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 2,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                          }}
                        >
                          <Typography variant="h6" sx={{ color: 'white', fontWeight: 800 }}>
                            {listing.price}
                          </Typography>
                        </Box>
                      </Box>

                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'var(--text-primary)' }}>
                          {listing.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'var(--text-secondary)' }}>
                          <LocationOn fontSize="small" color="primary" />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>{listing.location}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <SquareFoot fontSize="small" sx={{ opacity: 0.6 }} />
                            <Typography variant="caption" sx={{ fontWeight: 700 }}>{listing.area}</Typography>
                          </Box>
                          {listing.bedrooms && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Home fontSize="small" sx={{ opacity: 0.6 }} />
                              <Typography variant="caption" sx={{ fontWeight: 700 }}>{listing.bedrooms} BHK</Typography>
                            </Box>
                          )}
                        </Box>

                        <Button
                          fullWidth
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => handleContactClick(listing)}
                          sx={{
                            borderRadius: 2.5,
                            py: 1.5,
                            fontWeight: 700,
                            boxShadow: 'var(--shadow-soft)',
                          }}
                        >
                          Enquire Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedListing}
        onClose={() => setSelectedListing(null)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            background: 'var(--bg-primary)',
            borderRadius: 4,
            boxShadow: 'var(--shadow-lg)',
          },
        }}
      >
        <DialogTitle sx={{ p: 3, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--primary)' }}>
              Enquire Property
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
              {selectedListing?.title}
            </Typography>
          </Box>
          <IconButton onClick={() => setSelectedListing(null)} size="small">
            <Close fontSize="small" />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleContactSubmit}>
          <DialogContent sx={{ p: 3, pt: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                required
                fullWidth
                label="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                sx={textFieldStyles}
              />
              <TextField
                required
                fullWidth
                label="Phone Number"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                sx={textFieldStyles}
              />
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                sx={textFieldStyles}
              />
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                sx={textFieldStyles}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py: 1.5, borderRadius: 3, fontWeight: 700 }}
            >
              Send Enquiry
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};


export default RealEstateListings;
