import React from "react";
import { Box } from "@mui/material";

export default function FooterWave() {
    // 🌊 Path from your snippet
    const wavePath = `M0,60 C60,40 120,80 180,70 C240,60 300,20 360,30 C420,40 480,90 540,80 C600,70 660,30 720,40 C780,50 840,90 900,80 C960,70 1020,30 1080,40 C1140,50 1200,90 1260,80 C1320,70 1380,40 1440,50 C1500,60 1560,20 1620,30 C1680,40 1740,80 1800,70 L1800,100 L0,100 Z`;

    const maskSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 100" preserveAspectRatio="none">
       <path d="${wavePath}" fill="black"></path>
    </svg>
  `);

    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "60px", md: "110px" },
                position: "relative",
                zIndex: 5,
                backgroundColor: "#ffffff", // Top section color
                overflow: "hidden",
                mb: -1, // Remove tiny gaps
            }}
        >
            {/* 🌊 The Background Container: Using the SAME CLASSES as Footer.js */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    maskImage: `url("data:image/svg+xml;charset=utf-8,${maskSvg}")`,
                    webkitMaskImage: `url("data:image/svg+xml;charset=utf-8,${maskSvg}")`,
                    maskSize: "200% 100%",
                    webkitMaskSize: "200% 100%",
                    maskRepeat: "repeat-x",
                    webkitMaskRepeat: "repeat-x",
                    animation: "waveMask 22s linear infinite",
                }}
            >
                <Box className="footer-liquid-container" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1000px' }}>
                    <Box className="glow-orb orb-1" />
                    <Box className="glow-orb orb-2" />
                    <Box className="glow-orb orb-3" />
                    <Box className="footer-grid-overlay" />
                    <Box className="grid-scanner" />
                    {[...Array(8)].map((_, i) => (
                        <Box
                            key={i}
                            className="footer-micro-dot"
                            sx={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)'
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <style>
                {`
          @keyframes waveMask {
            0% { mask-position: 0% 0; -webkit-mask-position: 0% 0; }
            100% { mask-position: 100% 0; -webkit-mask-position: 100% 0; }
          }
        `}
            </style>
        </Box>
    );
}
