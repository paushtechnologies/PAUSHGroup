import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    RocketLaunch,
    Architecture,
    LocalShipping,
    TrendingUp,
    Public,
} from '@mui/icons-material';

const timelineData = [
    {
        year: '2020',
        title: 'The Foundation',
        description: 'PAUSH Group established with a vision to bridge the gap between traditional industry and digital efficiency.',
        icon: <RocketLaunch />,
        color: '#0047AB',
    },
    {
        year: '2021',
        title: 'Digital & Interior Expansion',
        description: 'Launched PAUSH Technologies and established our interior design and civil works vertical across North India.',
        icon: <Architecture />,
        color: '#20B2AA',
    },
    {
        year: '2022',
        title: 'Logistics Connectivity',
        description: 'Swift Logistics integrated into the ecosystem, providing nationwide FTL services for industrial growth.',
        icon: <LocalShipping />,
        color: '#357ABD',
    },
    {
        year: '2023',
        title: 'Financial & Realty Growth',
        description: 'Introduced Equity Guidance and Verified Realty, bringing transparency to investment and real estate.',
        icon: <TrendingUp />,
        color: '#0047AB',
    },
    {
        year: '2024',
        title: 'Media & Multi-Disciplinary Ecosystem',
        description: 'Consolidated into a unified multi-disciplinary ecosystem driving practical innovation across all sectors.',
        icon: <Public />,
        color: '#20B2AA',
    },
];

const ImpactTimeline = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id="impact"
            sx={{
                py: { xs: 10, md: 25 },
                backgroundColor: '#fff',
                position: 'relative',
                overflow: 'hidden',
                scrollSnapAlign: 'start',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
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
                        Our Journey
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            fontSize: { xs: '2.5rem', md: '4.5rem' },
                            letterSpacing: '-0.04em'
                        }}
                    >
                        Evolution of <Box component="span" className="text-gradient">Impact</Box>
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    {/* Vertical Line */}
                    {!isMobile && (
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                background: 'linear-gradient(to bottom, transparent, rgba(0, 71, 171, 0.1) 10%, rgba(0, 71, 171, 0.1) 90%, transparent)',
                                transform: 'translateX(-50%)',
                            }}
                        />
                    )}

                    {timelineData.map((item, index) => (
                        <Grid container spacing={4} key={index} sx={{ mb: { xs: 6, md: 10 }, position: 'relative' }}>
                            {/* Year Label - Desktop */}
                            {!isMobile && index % 2 === 0 && (
                                <Grid item md={5} sx={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <Typography variant="h2" sx={{ fontWeight: 950, color: 'rgba(0, 71, 171, 0.15)', fontSize: '6rem', lineHeight: 1 }}>
                                            {item.year}
                                        </Typography>
                                    </motion.div>
                                </Grid>
                            )}

                            {/* Icon / Node */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: '20px', md: '50%' },
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                >
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            background: 'white',
                                            border: `4px solid ${item.color}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: item.color,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                </motion.div>
                            </Box>

                            {/* Card - Right Side or Full Width on Mobile */}
                            <Grid
                                item
                                xs={12}
                                md={5}
                                sx={{
                                    ml: { xs: 6, md: index % 2 !== 0 ? 0 : 'auto' },
                                    mr: { md: index % 2 !== 0 ? 'auto' : 0 },
                                    textAlign: { xs: 'left', md: index % 2 === 0 ? 'left' : 'right' }
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Box
                                        sx={{
                                            p: 4,
                                            borderRadius: 6,
                                            background: 'white',
                                            border: '1px solid rgba(0, 0, 0, 0.04)',
                                            boxShadow: 'var(--shadow-soft)',
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: 'var(--shadow-medium)',
                                            }
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: item.color }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>

                            {/* Year Label - Desktop (Odd Index) */}
                            {!isMobile && index % 2 !== 0 && (
                                <Grid item md={5} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <Typography variant="h2" sx={{ fontWeight: 950, color: 'rgba(0, 71, 171, 0.15)', fontSize: '6rem', lineHeight: 1 }}>
                                            {item.year}
                                        </Typography>
                                    </motion.div>
                                </Grid>
                            )}
                        </Grid>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ImpactTimeline;
