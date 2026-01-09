"use client";
import React, { useState, useEffect } from 'react';

import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Hero = () => {
    const industries = [
        "Architect and Interior Designer",
        "Builder and Developer",
        "Pharma Machinery/Parts",
        "Textile Machinery/Parts",
        "Engineering",
        "Software and IT",
        "Health and Medical",
        "Furniture",
        "Traders",
        "Banking and Finance",
        "CMC VMC job work unit",
        "Industrial Product Manufacture",
        "Fabrication Workshop",
        "Laser Cutting and Welding",
        "Automation",
        "Tooling",
        "Service Providers"
    ];
    const [currentIndustry, setCurrentIndustry] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndustry((prev) => (prev + 1) % industries.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleSaveDate = () => {
        const event = {
            title: "Shree Vishwakarma Business Expo 2026",
            location: "Helipad Exhibition Centre, Gandhinagar, Gujarat",
            description: "Join us for the Shree Vishwakarma Business Expo 2026. Powered by Community, Driven by Business.",
            startDate: "20260411T090000",
            endDate: "20260412T180000"
        };

        const icsContent =
            `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.description}
DTSTART:${event.startDate}
DTEND:${event.endDate}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'svbe-expo-2026.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="home-banner-sec hero-section">
            <div className="hero-overlay"></div>

            <div className="container hero-inner">
                <div className="hero-title-wrapper">
                    <h2 className="hero-title gradient-text">For the First Time</h2>
                    <div className="gradient-underline"></div>
                </div>

                <div className="hero-speaker-row">
                    <span className="hero-meta-text">Powered by Community</span>
                    <img src="/assets/svbe_logo_new.png" alt="Shree Vishwakarma Business Expo" className="hero-image hero-center-logo" />
                    <span className="hero-meta-text">Driven by Business</span>
                </div>

                <div className="hero-industry-wrap">
                    <p className="hero-industry">{industries[currentIndustry]}</p>
                </div>

                <div className="hero-meta-row">
                    <div className="hero-meta-item">
                        <div className="meta-icon"><FaMapMarkerAlt size={24} /></div>
                        <div className="meta-text">
                            <a href="https://maps.app.goo.gl/fjbZfYQJEpzpw3EQ8?g_st=ipc" target="blank" className="meta-link">Helipad Exhibition Centre,</a>
                            <span>Gandhinagar, Gujarat</span>
                        </div>
                    </div>

                    <div
                        className="hero-meta-item clickable"
                        onClick={handleSaveDate}
                        title="Add to Calendar"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="meta-icon"><FaCalendarAlt size={24} /></div>
                        <div className="meta-text">
                            <span className="meta-date">11th & 12th April, 2026</span>
                            <span className="meta-sub">Save the Date!</span>
                        </div>
                    </div>
                </div>

                <Countdown targetDate="2026-04-11T09:00:00" />

                <div className="hero-cta" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://svkbe2026.onrender.com/" target="blank" rel="noopener noreferrer" className="theme-btn">Book Tickets Now</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ3a4kR1EuqYMvIYknL9KvKyyhFZEUIMs1cwZlVgeCQurV0g/viewform?usp=preview" target="blank" rel="noopener noreferrer" className="theme-btn outline">Inquiry</a>
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
