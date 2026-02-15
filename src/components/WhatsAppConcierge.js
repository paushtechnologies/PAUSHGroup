import React from 'react';
import {
    Box,
    Tooltip,
    IconButton,
    Zoom,
} from '@mui/material';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const WhatsAppConcierge = () => {
    const phoneNumber = "919456644264";
    const message = "Hello PAUSH Group, I would like to enquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 24, md: 40 },
                right: { xs: 24, md: 40 },
                zIndex: 2000,
            }}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 1.5
                }}
            >
                <Tooltip
                    title="WhatsApp Concierge"
                    placement="left"
                    arrow
                    TransitionComponent={Zoom}
                >
                    <Box sx={{ position: 'relative' }}>
                        {/* Pulse Animation */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: -4,
                                borderRadius: '50%',
                                background: 'rgba(37, 211, 102, 0.4)',
                                animation: 'whatsapp-pulse 2s infinite',
                                zIndex: -1
                            }}
                        />
                        <IconButton
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                width: { xs: 56, md: 64 },
                                height: { xs: 56, md: 64 },
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                color: 'white',
                                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
                                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                                '&:hover': {
                                    transform: 'scale(1.1) translateY(-5px)',
                                    boxShadow: '0 12px 40px rgba(37, 211, 102, 0.5)',
                                    background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
                                },
                            }}
                        >
                            <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                        </IconButton>
                    </Box>
                </Tooltip>
            </motion.div>

            <style>
                {`
                    @keyframes whatsapp-pulse {
                        0% {
                            transform: scale(1);
                            opacity: 0.6;
                        }
                        70% {
                            transform: scale(1.4);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default WhatsAppConcierge;
