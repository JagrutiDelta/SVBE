"use client";
import React from 'react';

const StallVisuals = () => {
    return (
        <section style={{
            padding: '80px 0',
            background: 'linear-gradient(180deg, #fff 0%, #FFF9F0 100%)',
            position: 'relative'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        color: 'var(--secondary)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '15px'
                    }}>
                        Exhibition Preview
                    </div>
                    <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
                        Professional Stall Designs
                    </h2>
                    <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Get a glimpse of the world-class exhibition stalls and booth designs at SVBE 2026
                    </p>
                </div>

                {/* Stall Images Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    marginBottom: '50px'
                }}>
                    {/* Stall Design 1 */}
                    <div className="stall-visual-card">
                        <div className="stall-image-wrapper">
                            <img
                                src="/assets/stall-design-1.jpg"
                                alt="SVBE 2026 Exhibition Stall Design"
                                className="stall-image"
                            />
                        </div>
                        <div className="stall-info">
                            <h3 className="stall-title">SVBE 2026 Booth Design</h3>
                            <p className="stall-description">
                                Premium exhibition space featuring modern aesthetics and professional branding
                            </p>
                        </div>
                    </div>

                    {/* Stall Design 2 */}
                    <div className="stall-visual-card">
                        <div className="stall-image-wrapper">
                            <img
                                src="/assets/stall-design-2.jpg"
                                alt="Modern Exhibition Booth Designs"
                                className="stall-image"
                            />
                        </div>
                        <div className="stall-info">
                            <h3 className="stall-title">Premium Booth Concepts</h3>
                            <p className="stall-description">
                                Innovative exhibition stalls with cutting-edge design and impactful layouts
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <a
                        href="https://svkbe2026.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '15px 35px',
                            fontSize: '16px',
                            fontWeight: 600
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        View Full Stall Layout
                    </a>
                </div>
            </div>

            <style jsx>{`
                .stall-visual-card {
                    background: var(--white);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .stall-visual-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                    border-color: var(--secondary);
                }

                .stall-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 75%; /* 4:3 aspect ratio */
                    overflow: hidden;
                    background: #f5f5f5;
                }

                .stall-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .stall-visual-card:hover .stall-image {
                    transform: scale(1.05);
                }

                .stall-info {
                    padding: 30px 25px;
                }

                .stall-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 12px;
                    font-family: var(--font-outfit);
                }

                .stall-description {
                    color: #666;
                    font-size: 0.95rem;
                    line-height: 1.7;
                }

                @media (max-width: 768px) {
                    .stall-visual-card {
                        margin: 0 10px;
                    }

                    .stall-title {
                        font-size: 1.3rem;
                    }

                    .stall-info {
                        padding: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default StallVisuals;
