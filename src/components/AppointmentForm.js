import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  MenuItem,
  Grid,
  IconButton,
} from '@mui/material';
import { Close, Send } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config';

const AppointmentForm = ({ open, onClose, type = 'appointment', googleSheetUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    duration: '',
    purpose: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
  ];

  const durationOptions = [
    '30 minutes',
    '1 hour',
    '1.5 hours',
    '2 hours',
  ];

  const purposeOptions = type === 'appointment'
    ? [
      'Stock Market Training',
      'Portfolio Review',
      'Investment Consultation',
      'Market Analysis',
      'Other',
    ]
    : [
      'Interior Design Consultation',
      'Space Planning',
      'Renovation Discussion',
      'Budget Planning',
      'Other',
    ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      setLoading(false);
      return;
    }

    try {
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'short',
        timeStyle: 'short',
      });

      if (!googleSheetUrl) {
        setError('Google Sheet URL not configured. Please contact administrator.');
        setLoading(false);
        return;
      }

      // 1. Submit to Google Sheets (Parallel)
      if (googleSheetUrl) {
        fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp,
            type: type === 'appointment' ? 'Stock Market Appointment' : 'Interior Design Consultation',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
            duration: formData.duration || 'N/A',
            purpose: formData.purpose || 'N/A',
            message: formData.message || 'N/A',
          }),
        }).catch(err => console.error('Google Sheet submission failed:', err));
      }

      // 2. Send Automated Email using EmailJS (Manual check for window.emailjs)
      if (window.emailjs) {
        try {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          const serviceId = EMAILJS_SERVICE_ID;
          const templateId = EMAILJS_TEMPLATE_ID;

          await window.emailjs.send(serviceId, templateId, {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service_type: type === 'appointment' ? 'Equity Guidance' : 'Interior Consultation',
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            purpose: formData.purpose || 'N/A',
            message: formData.message || 'N/A',
            to_email: 'paushgroup@gmail.com', // Target email
          });
        } catch (mailErr) {
          console.error('EmailJS failed:', mailErr);
        }
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        duration: '',
        purpose: '',
        message: '',
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        duration: '',
        purpose: '',
        message: '',
      });
      setError('');
      setSuccess(false);
      onClose();
    }
  };

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Minimum tomorrow
    return today.toISOString().split('T')[0];
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'var(--bg-primary)',
          borderRadius: 4,
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
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: 'var(--text-primary)',
          }}
        >
          {type === 'appointment' ? 'Book Appointment' : 'Book Consultation'}
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{
            color: 'var(--text-secondary)',
            '&:hover': { color: 'var(--primary)', background: 'rgba(0, 0, 0, 0.05)' },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Alert
              severity="success"
              sx={{
                m: 3,
                borderRadius: 2,
                '& .MuiAlert-icon': { color: 'var(--primary)' },
              }}
            >
              We've received your request! Our team will reach out shortly.
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ p: 3, pt: 1.5 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <Grid container spacing={2.5}>
            <Grid item xs={12}>
              <TextField
                required
                name="name"
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="email"
                label="Email Address"
                placeholder="john@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="phone"
                label="Phone Number"
                placeholder="9876543210"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                inputProps={{ maxLength: 10 }}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="preferredDate"
                label="Select Date"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: getMinDate() }}
                sx={textFieldStyles}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="preferredTime"
                label="Select Time"
                select
                value={formData.preferredTime}
                onChange={handleChange}
                fullWidth
                sx={textFieldStyles}
              >
                {timeSlots.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="purpose"
                label="Service Type"
                select
                value={formData.purpose}
                onChange={handleChange}
                fullWidth
                sx={textFieldStyles}
              >
                {purposeOptions.map((purpose) => (
                  <MenuItem key={purpose} value={purpose}>
                    {purpose}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="message"
                label="Additional Details"
                placeholder="How can we help you?"
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                sx={textFieldStyles}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button
            onClick={handleClose}
            sx={{
              color: 'var(--text-secondary)',
              fontWeight: 600,
              '&:hover': { color: 'var(--text-primary)' },
            }}
          >
            Discard
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            endIcon={loading ? <CircularProgress size={18} /> : <Send />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            {loading ? 'Sending...' : 'Confirm'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    backgroundColor: '#fff',
    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.08)' },
    '&:hover fieldset': { borderColor: 'rgba(0, 71, 171, 0.3)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--primary)', borderWidth: 2 },
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-secondary)',
    fontWeight: 500,
    '&.Mui-focused': { color: 'var(--primary)' },
  },
};

export default AppointmentForm;
