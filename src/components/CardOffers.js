import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Divider,
  Link,
  Chip,
  CircularProgress,
  Alert,
  IconButton,
} from '@mui/material';
import { Close, Launch, ContentCopy } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fetchGoogleSheetData } from '../utils/googleSheets';
import { CREDIT_CARD_SHEET_URL } from '../config';

const CardOffers = ({ open, onClose }) => {
  const [copied, setCopied] = useState('');
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open && CREDIT_CARD_SHEET_URL) {
      loadOffers();
    } else if (open && !CREDIT_CARD_SHEET_URL) {
      // Use default offers if no URL provided
      setOffers(getDefaultOffers());
      setLoading(false);
    }
  }, [open]);

  const loadOffers = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchGoogleSheetData(CREDIT_CARD_SHEET_URL);

      if (data && data.length > 0) {
        // Map Google Sheet data to offer format
        // Expected columns: Title, Type, Features, Cashback, ReferralCode, ReferralLink, Note, Validity, Steps
        const mappedOffers = data.map((row, index) => ({
          id: row.id || `offer-${index}`,
          title: row.Title || row.title || 'Card Offer',
          type: row.Type || row.type || 'Credit Card',
          features: row.Features || row.features ? (typeof row.Features === 'string' ? row.Features.split(',').map(f => f.trim()) : row.Features) : [],
          cashback: row.Cashback || row.cashback ? (typeof row.Cashback === 'string' ? row.Cashback.split(',').map(c => c.trim()) : row.Cashback) : [],
          referralCode: row.ReferralCode || row.referralCode || '',
          referralLink: row.ReferralLink || row.referralLink || row.ReferralLink || row.referralLink || '#',
          note: row.Note || row.note || '',
          validity: row.Validity || row.validity || '',
          steps: row.Steps || row.steps ? (typeof row.Steps === 'string' ? row.Steps.split(',').map(s => s.trim()) : row.Steps) : null,
        }));
        setOffers(mappedOffers);
      } else {
        setOffers(getDefaultOffers());
      }
    } catch (err) {
      console.error('Error loading offers:', err);
      setError('Failed to load offers. Showing default offers.');
      setOffers(getDefaultOffers());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultOffers = () => [
    {
      id: 'edge-plus',
      title: 'Edge+ CSB Bank RuPay Credit Card',
      type: 'Credit Card',
      features: [
        'Lifetime Free - ₹0 joining fee | ₹0 annual fee',
        'Welcome Offer: FREE 1-year Jio Hotstar',
        'Fraud Protect Included',
        'Credit limit up to ₹7 lakhs',
      ],
      cashback: [
        '10% cashback on shopping',
        '5% cashback on travel',
        '1% cashback on UPI spends',
      ],
      referralCode: '1Ft9kW',
      referralLink: 'http://jptr.onelink.me/TOMp/976c845681',
      note: 'Offers are only valid and extra ₹500 when done via link',
      validity: 'Enter referral code within 14 days of opening account',
    },
    {
      id: 'kotak-debit',
      title: 'Kotak 811 Debit Card - Credit Card Bill Hack',
      type: 'Debit Card',
      features: [
        'Earn 5% Cashback Monthly',
        'Earn ₹500 every month (₹6,000 per year)',
        'Pay credit card bills via Vi App',
        'Instant account opening',
      ],
      cashback: [
        '5% cashback on credit card bill payments',
        'Maximum ₹500 per month',
        'Use Vi (Vodafone Idea) App',
      ],
      referralCode: '',
      referralLink: 'https://h1e.in/Dx8oMQ',
      note: 'Simple trick to earn cashback on credit card bill payments',
      steps: [
        'Open Vi App: Head to Pay Credit Card Bill section',
        'Enter Bill Amount: Aim for ~₹10,000 to maximize reward',
        'Checkout: Select Debit Card as payment method',
        'Pay: Use your Kotak 811 Debit Card',
        'Profit: Enjoy your 5% cashback!',
      ],
    },
  ];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'var(--bg-primary)',
          borderRadius: 4,
          maxHeight: '85vh',
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
          variant="h5"
          sx={{
            fontWeight: 800,
            color: 'var(--text-primary)',
          }}
        >
          Exclusive Card Offers
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

      <DialogContent sx={{ p: { xs: 2, md: 3 }, pt: { xs: 1.5, md: 3 } }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="warning" sx={{ borderRadius: 2 }}>
            {error}
          </Alert>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 } }}>
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3.5,
                    background: 'white',
                    border: '1px solid rgba(0, 71, 171, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 71, 171, 0.08)',
                      borderColor: 'var(--primary)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      background: 'var(--primary)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: { xs: 1.5, md: 2 } }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--text-primary)', mb: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        {offer.title}
                      </Typography>
                      <Chip
                        label={offer.type}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 71, 171, 0.04)',
                          color: 'var(--primary)',
                          fontWeight: 700,
                          height: 20,
                          fontSize: '0.65rem'
                        }}
                      />
                    </Box>
                  </Box>

                  {offer.features?.length > 0 && (
                    <Box sx={{ mb: { xs: 2, md: 3 } }}>
                      {offer.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', gap: 1.2, mb: 1 }}>
                          <Box sx={{ color: 'var(--primary)', fontWeight: 900, mt: -0.2, fontSize: '0.9rem' }}>•</Box>
                          <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.875rem' }, lineHeight: 1.4 }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {offer.referralCode && (
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(0, 0, 0, 0.02)',
                        border: '1px dashed rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3,
                      }}
                    >
                      <Box>
                        <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block' }}>
                          Referral Code
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 800, fontFamily: 'monospace', color: 'var(--primary)' }}>
                          {offer.referralCode}
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        onClick={() => copyToClipboard(offer.referralCode, offer.id)}
                        sx={{
                          color: copied === offer.id ? '#4CAF50' : 'var(--primary)',
                          fontWeight: 700,
                        }}
                      >
                        {copied === offer.id ? 'Copied' : 'Copy'}
                      </Button>
                    </Box>
                  )}

                  <Button
                    component={Link}
                    href={offer.referralLink}
                    target="_blank"
                    fullWidth
                    variant="contained"
                    endIcon={<Launch fontSize="small" />}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    Get This Offer
                  </Button>

                  {offer.note && (
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        mt: 2,
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        opacity: 0.8,
                      }}
                    >
                      * {offer.note}
                    </Typography>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, background: 'rgba(0, 0, 0, 0.02)' }}>
        <Button onClick={onClose} sx={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CardOffers;
