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
        <section className="home-banner-sec" style={{
            position: 'relative',
            minHeight: '100vh',
            padding: '12rem 0 8rem',
            background: 'url(/assets/home-banner-img-min.png) no-repeat center center / cover',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.6)',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                    fontSize: '2.8rem',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontFamily: 'var(--font-outfit)',
                    marginBottom: '10px'
                }}>
                    Shree Vishwakarma Business Expo
                </h2>

                <div style={{ margin: '20px 0' }}>
                    <p style={{
                        fontSize: '3.8rem',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        lineHeight: '1.2'
                    }}>
                        {industries[currentIndustry]}
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
                    <span style={{ color: '#fff', fontSize: '18px' }}>Mevada Community</span>
                    <img src="/assets/ai_speaker_sonu.png" alt="Speakers" style={{ width: '320px', borderRadius: '50px' }} />
                    <span style={{ color: '#fff', fontSize: '18px' }}>123+ Stalls</span>
                </div>

                <div style={{
                    marginTop: '60px',
                    padding: '30px 0',
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '40px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ background: 'var(--secondary)', padding: '15px', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                            {/* Location Icon Placeholder */}
                            📍
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <a href="#" style={{ color: '#fff', fontSize: '19px', fontWeight: 500, display: 'block' }}>Helipad Exhibition Centre,</a>
                            <span style={{ color: '#fff', fontSize: '19px', fontWeight: 500 }}>Gandhinagar, Gujarat</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '40px' }}>
                        <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                            📅
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <span style={{ color: '#fff', fontSize: '19px', fontWeight: 600, display: 'block' }}>11th & 12th April, 2026</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>Save the Date!</span>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '50px' }}>
                    <a href="/book" className="theme-btn" style={{ padding: '15px 50px', fontSize: '1.2rem', fontWeight: 700 }}>Book Tickets Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
