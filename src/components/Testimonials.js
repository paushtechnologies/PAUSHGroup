import React from 'react';
import { Box, Container, Typography, Avatar, Rating, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'TechNova Solutions',
        role: 'FinTech Innovation Leader',
        text: "PAUSH Technologies revolutionized our digital infrastructure. Their AI-driven solutions increased our efficiency by 300% and transformed how we operate.",
        avatar: 'TS',
        rating: 5,
    },
    {
        name: 'Global Dynamics',
        role: 'International Manufacturing',
        text: "Working with PAUSH was a game-changer. Their blockchain integration and cloud architecture expertise helped us scale globally in record time.",
        avatar: 'GD',
        rating: 5,
    },
    {
        name: 'Quantum Ventures',
        role: 'Venture Capital Firm',
        text: "The team at PAUSH Technologies doesn't just build software—they digitize everything. Their digital transformation approach is truly revolutionary.",
        avatar: 'QV',
        rating: 5,
    },
    {
        role: 'Fintech Firm',
        name: 'Alpha Capital Club',
        text: "Working with PAUSH Technologies set a new standard for us. Their Algorithmic trading and cloud architecture expertise helped us scale in record time.",
        avatar: 'AC',
        rating: 5,
    },
    {
        name: 'Sandeep Kumar',
        role: 'Equity Analyst',
        text: "The portfolio reporting tools provided by PAUSH Group are world-class. Being able to visualize growth metrics instantly has helped our clients stay ahead of the curve.",
        avatar: 'SK',
        rating: 5,
    },
    {
        name: 'E commerce Platform',
        role: 'Jagriti Prakashan',
        text: "PAUSH Technologies transformed our business. Their solutions increased our efficiency by 300% and transformed how we operate.",
        avatar: 'JP',
        rating: 5,
    },
    {
        name: 'Arjun Sharma',
        role: 'Homeowner, Noida',
        text: "Finding a verified residential plot in North India was a challenge until I met the PAUSH Realty team. Their transparency regarding land documentation is unmatched.",
        avatar: 'AS',
        rating: 5,
    },
    {
        name: 'Meera Deshmukh',
        role: 'Boutique Owner',
        text: "The interior planning for our new store was handled with extreme precision. Their execution team delivered exactly what was promised on the blue-prints.",
        avatar: 'MD',
        rating: 5,
    },
    {
        name: 'Digital Bharat News',
        role: 'Regional Media House',
        text: "As a news organization, speed is everything. PAUSH's verification tech and digital delivery platforms have halved our distribution time for breaking news.",
        avatar: 'DB',
        rating: 5,
    },
    {
        name: 'Kunal Goel',
        role: 'Founder, CloudScale',
        text: "We needed a custom dashboard to track our infrastructure. The Digital Solutions team built a tool that is now central to our daily operations.",
        avatar: 'KG',
        rating: 5,
    },
    {
        name: 'Priya Verma',
        role: 'Private Investor',
        text: "The personalized market reviews and equity guidance clarified my strategy. Their data-driven insights are practical and easy to follow.",
        avatar: 'PV',
        rating: 5,
    },
    {
        name: 'Elite Residencies',
        role: 'Project Developer',
        text: "Partnering with PAUSH for our property marketing and land verification has significantly added value to our development projects.",
        avatar: 'ER',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 15, md: 25 },
                backgroundColor: '#fff',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Soft Animated Background Blobs */}
            <Box sx={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }}>
                <Box
                    className="blob-shape"
                    sx={{
                        position: 'absolute',
                        top: '10%',
                        right: '5%',
                        width: '450px',
                        height: '450px',
                        background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
                    }}
                />
                <Box
                    className="blob-shape"
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        left: '5%',
                        width: '450px',
                        height: '450px',
                        background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
                        opacity: 0.2
                    }}
                />
            </Box>

            <Container maxWidth="xl">
                <Box sx={{ mb: 12, textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'var(--primary)',
                            fontWeight: 950,
                            letterSpacing: '0.4em',
                            mb: 3,
                            display: 'block',
                        }}
                    >
                        True Partnerships
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            fontSize: { xs: '2.5rem', md: '4.8rem' },
                            letterSpacing: '-0.05em',
                        }}
                    >
                        The Voice of Our <Box component="span" className="text-gradient">Clients</Box>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        pb: 4,
                        pt: 4,
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <motion.div
                        style={{ display: 'flex', gap: '32px' }}
                        animate={{ x: [0, -3800] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    minWidth: { xs: 320, md: 550 },
                                    p: 6,
                                    borderRadius: 10,
                                    background: 'rgba(255, 255, 255, 0.85)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(0, 71, 171, 0.08)',
                                    boxShadow: '0 25px 50px rgba(0, 71, 171, 0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: 'translateY(-15px)',
                                        borderColor: 'var(--primary)',
                                        boxShadow: '0 45px 90px rgba(0, 71, 171, 0.1)',
                                        '& .avatar-glow': {
                                            boxShadow: '0 0 30px rgba(0, 71, 171, 0.4)'
                                        }
                                    }
                                }}
                            >
                                <Box>
                                    <Rating value={item.rating} readOnly sx={{ mb: 4, color: 'var(--primary)', fontSize: '1.2rem' }} />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: 'var(--text-primary)',
                                            lineHeight: 1.7,
                                            mb: 6,
                                            fontWeight: 500,
                                            fontSize: '1.35rem',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        "{item.text}"
                                    </Typography>
                                </Box>

                                <Stack direction="row" spacing={3} alignItems="center">
                                    <Avatar
                                        className="avatar-glow"
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            background: 'var(--gradient-ocean)',
                                            fontWeight: 950,
                                            fontSize: '1.2rem',
                                            boxShadow: '0 10px 20px rgba(0, 71, 171, 0.15)',
                                            transition: '0.4s'
                                        }}
                                    >
                                        {item.avatar}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 950, color: 'var(--text-primary)', mb: 0.5 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.75rem' }}>
                                            {item.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
