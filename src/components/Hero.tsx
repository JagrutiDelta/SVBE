"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const industries = ["Pharma Machinery", "Textile", "Construction", "IT", "Architecture", "Furniture", "Consulting"];
    const [currentIndustry, setCurrentIndustry] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndustry((prev) => (prev + 1) % industries.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="home-banner-sec hero-section">
            <div className="hero-overlay"></div>

            <div className="container hero-inner">
                <h2 className="hero-title">Shree Vishwakarma Business Expo</h2>

                <div className="hero-industry-wrap">
                    <p className="hero-industry">{industries[currentIndustry]}</p>
                </div>

                <div className="hero-speaker-row">
                    <span className="hero-meta-text">Mevada Community</span>
                    <img src="/assets/ai_speaker_sonu.png" alt="Speakers" className="hero-image" />
                    <span className="hero-meta-text">123+ Stalls</span>
                </div>

                <div className="hero-meta-row">
                    <div className="hero-meta-item">
                        <div className="meta-icon">📍</div>
                        <div className="meta-text">
                            <a href="#" className="meta-link">Helipad Exhibition Centre,</a>
                            <span>Gandhinagar, Gujarat</span>
                        </div>
                    </div>

                    <div className="hero-meta-item">
                        <div className="meta-icon">📅</div>
                        <div className="meta-text">
                            <span className="meta-date">11th & 12th April, 2026</span>
                            <span className="meta-sub">Save the Date!</span>
                        </div>
                    </div>
                </div>

                <div className="hero-cta">
                    <a href="/book" className="theme-btn">Book Tickets Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
