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

                <Countdown targetDate="2026-04-11T09:00:00" />

                <div className="hero-cta" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="/book" className="theme-btn">Book Tickets Now</a>
                    <a href="/contact" className="theme-btn outline">Inquiry</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

const Countdown = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(5px)',
                    padding: '15px 25px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    minWidth: '100px'
                }}>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#fff' }}>{value}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
                </div>
            ))}
        </div>
    );
};
