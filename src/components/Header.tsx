"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // prevent body scroll when mobile menu open
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const toggleMobile = () => setMobileOpen(v => !v);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <Link href="/" className="logo-link">
                    <img src="/assets/svbe_logo_new.png" alt="Shree Vishwakarma Business Expo" className={`site-logo ${isScrolled ? 'small' : ''}`} />
                </Link>

                <nav className="site-nav">
                    <Link href="/about" className="nav-link">About Expo</Link>
                    <Link href="/expo" className="nav-link">Business Expo 2026</Link>
                    <Link href="/contact" className="nav-link">Contact Us</Link>
                    <Link href="/book" className="theme-btn nav-cta">Book Tickets</Link>
                    <a href="tel:+919558840767" className="theme-btn nav-cta" style={{ background: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px' }}>📞</span>
                        Call for Inquiry
                    </a>
                </nav>

                <button
                    className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                    onClick={toggleMobile}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} role="menu">
                    <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>About Expo</Link>
                    <Link href="/expo" className="nav-link" onClick={() => setMobileOpen(false)}>Business Expo 2026</Link>
                    <Link href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                    <Link href="/book" className="theme-btn nav-cta" onClick={() => setMobileOpen(false)}>Book Tickets</Link>
                    <a href="tel:+919558840767" className="theme-btn nav-cta" style={{ background: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                        <span style={{ fontSize: '16px' }}>📞</span>
                        Call for Inquiry
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
