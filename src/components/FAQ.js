import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "What is the core vision of PAUSH Group?",
        answer: "PAUSH Group is built as a multi-disciplinary ecosystem designed to bridge the gap between traditional industries and modern digital efficiency. We focus on delivering practical innovation across Real Estate, Logistics, FinTech, and Interior Design."
    },
    {
        question: "How can I explore partnership opportunities?",
        answer: "We are always looking for visionary partners and collaborators. You can reach out via our 'Partner With Us' form in the Hero section, or contact us directly at paushgroup@gmail.com for institutional enquiries."
    },
    {
        question: "What regions do you currently serve?",
        answer: "While our digital and logistics verticals operate nationwide, our core physical infrastructure and interior design services are currently focused on major hubs across North India, including New Delhi, Gurgaon, and Meerut."
    },
    {
        question: "What makes PAUSH Logistics 'Swift'?",
        answer: "Swift Logistics is powered by our proprietary tech stack that optimizes route planning and real-time FTL (Full Truck Load) tracking, ensuring that industrial goods move with maximum efficiency and zero downtime."
    },
    {
        question: "Is there a dedicated concierge for client support?",
        answer: "Yes, we provide a WhatsApp Concierge service for high-priority support and real estate enquiries. You can find the contact link in our navigation or footer sections."
    }
];

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            id="faq"
            sx={{
                pt: { xs: 4, md: 8 },
                pb: { xs: 6, md: 15 },
                backgroundColor: 'var(--bg-primary)',
                position: 'relative',
                overflow: 'hidden',
                scrollSnapAlign: 'start',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'var(--primary)',
                            fontWeight: 900,
                            letterSpacing: '0.4em',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        Questions
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            letterSpacing: '-0.04em'
                        }}
                    >
                        Expert <Box component="span" className="text-gradient">Insights</Box>
                    </Typography>
                </Box>

                <Box>
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    mb: 2,
                                    borderRadius: '16px !important',
                                    background: 'white',
                                    border: '1px solid rgba(0, 0, 0, 0.03)',
                                    boxShadow: expanded === `panel${index}` ? 'var(--shadow-medium)' : 'var(--shadow-soft)',
                                    transition: 'all 0.4s ease',
                                    '&:before': { display: 'none' },
                                    overflow: 'hidden',
                                    '&:hover': {
                                        borderColor: 'rgba(0, 71, 171, 0.1)',
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <Box sx={{
                                            color: expanded === `panel${index}` ? 'var(--primary)' : 'var(--text-secondary)',
                                            transition: 'color 0.3s'
                                        }}>
                                            <ExpandMoreIcon />
                                        </Box>
                                    }
                                    sx={{
                                        px: { xs: 2.5, md: 4 },
                                        py: { xs: 0.5, md: 1 },
                                        '& .MuiAccordionSummary-content': {
                                            my: { xs: 1.5, md: 2 }
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                                            color: expanded === `panel${index}` ? 'var(--primary)' : 'var(--text-primary)',
                                            transition: 'color 0.3s'
                                        }}
                                    >
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: { xs: 2.5, md: 4 }, pb: { xs: 3, md: 4 }, pt: 0 }}>
                                    <Typography
                                        sx={{
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.7,
                                            fontSize: { xs: '0.85rem', md: '1.05rem' }
                                        }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;
