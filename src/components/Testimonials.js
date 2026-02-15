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
    {
        name: 'Harish Rao',
        role: 'Logistics Head, Manufacturing',
        text: "Our experience with Swift Logistics for Full Truck Load transport was seamless. The real-time tracking and professional handling of our industrial goods were impressive.",
        avatar: 'HR',
        rating: 5,
    },
    {
        name: 'Sunita Williams',
        role: 'Homeowner, Delhi',
        text: "Transforming our villa into a luxury residency was a dream come true with PAUSH Interiors. Their space planning and premium finishes are truly world-class.",
        avatar: 'SW',
        rating: 5,
    },
    {
        name: 'Dr. Vivek Oberoi',
        role: 'Private Investor',
        text: "The Portfolio Health Check at Equity Guidance revealed critical gaps in my strategy. I'm now much more confident in my investment decisions.",
        avatar: 'VO',
        rating: 5,
    },
    {
        name: 'Tech Park Developers',
        role: 'Commercial Project',
        text: "PAUSH Realty helped us secure a prime commercial spot in the city. Their deep knowledge of local zoning and land laws saved us weeks of due diligence.",
        avatar: 'TP',
        rating: 5,
    },
    {
        name: 'FoodGo Services',
        role: 'App Development Client',
        text: "The mobile delivery app built by PAUSH Technologies has significantly improved our customer engagement. The UI is sleek and the performance is liquid smooth.",
        avatar: 'FG',
        rating: 5,
    },
    {
        name: 'Corporate Solutions Inc.',
        role: 'Relocation Client',
        text: "Moving our entire corporate office across states seemed daunting, but Swift Logistics made it effortless. Not a single piece of equipment was damaged.",
        avatar: 'CS',
        rating: 5,
    },
    {
        name: 'Brew & Bake Cafe',
        role: 'Hospitality Partner',
        text: "We opted for their turnkey interior solution for our new cafe. From electricals to the modular counter, the execution was flawless and on time.",
        avatar: 'BB',
        rating: 5,
    },
    {
        name: 'Ananya Bir',
        role: 'Day Trader',
        text: "The one-on-one mentorship session provided deep insights into technical indicators. It's rare to find such high-quality guidance in the stock market.",
        avatar: 'AB',
        rating: 5,
    },
    {
        name: 'Sharma & Sons',
        role: 'Property Investment',
        text: "The land verification report provided by PAUSH Realty was incredibly detailed. It helped us avoid a risky investment and find a clean title property.",
        avatar: 'SS',
        rating: 5,
    },
    {
        name: 'SecurePay FinTech',
        role: 'Blockchain Integration',
        text: "Their expertise in blockchain integration helped us launch our secure payment gateway ahead of schedule. Truly innovative partners.",
        avatar: 'SP',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <Box
            id="review"
            sx={{
                py: { xs: 8, md: 25 },
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
                        width: { xs: '250px', md: '450px' },
                        height: { xs: '250px', md: '450px' },
                        background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
                    }}
                />
            </Box>

            <Container maxWidth="xl">
                <Box sx={{ mb: { xs: 6, md: 12 }, textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'var(--primary)',
                            fontWeight: 950,
                            letterSpacing: '0.4em',
                            mb: 2,
                            display: 'block',
                            fontSize: { xs: '0.65rem', md: '0.75rem' }
                        }}
                    >
                        True Partnerships
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            fontSize: { xs: '2.2rem', md: '4.8rem' },
                            letterSpacing: '-0.05em',
                        }}
                    >
                        The Voice of Our <Box component="span" className="text-gradient">Clients</Box>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 2.5, md: 4 },
                        pb: 4,
                        pt: 2,
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <motion.div
                        style={{ display: 'flex', gap: '24px' }}
                        animate={{ x: [0, -7500] }}
                        transition={{
                            duration: 80,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    minWidth: { xs: 290, sm: 350, md: 550 },
                                    p: { xs: 4, md: 6 },
                                    borderRadius: { xs: 6, md: 10 },
                                    background: 'rgba(255, 255, 255, 0.85)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(0, 71, 171, 0.08)',
                                    boxShadow: '0 25px 50px rgba(0, 71, 171, 0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: { md: 'translateY(-15px)' },
                                        borderColor: 'var(--primary)',
                                        boxShadow: '0 45px 90px rgba(0, 71, 171, 0.1)',
                                    }
                                }}
                            >
                                <Box>
                                    <Rating value={item.rating} readOnly sx={{ mb: { xs: 2.5, md: 4 }, color: 'var(--primary)', fontSize: { xs: '1rem', md: '1.2rem' } }} />
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: 'var(--text-primary)',
                                            lineHeight: 1.5,
                                            mb: { xs: 4, md: 6 },
                                            fontWeight: 500,
                                            fontSize: { xs: '1rem', md: '1.35rem' },
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        "{item.text}"
                                    </Typography>
                                </Box>

                                <Stack direction="row" spacing={{ xs: 2, md: 3 }} alignItems="center">
                                    <Avatar
                                        className="avatar-glow"
                                        sx={{
                                            width: { xs: 48, md: 64 },
                                            height: { xs: 48, md: 64 },
                                            background: 'var(--gradient-ocean)',
                                            fontWeight: 950,
                                            fontSize: { xs: '1rem', md: '1.2rem' },
                                            boxShadow: '0 10px 20px rgba(0, 71, 171, 0.15)',
                                        }}
                                    >
                                        {item.avatar}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 950, color: 'var(--text-primary)', mb: 0.2, fontSize: { xs: '0.95rem', md: '1.25rem' } }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: { xs: '0.65rem', md: '0.75rem' } }}>
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
