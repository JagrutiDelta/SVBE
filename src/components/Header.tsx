"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                </nav>
            </div>
        </header>
    );
};

export default Header;
