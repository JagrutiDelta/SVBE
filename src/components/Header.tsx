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
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.5s ease',
            backgroundColor: isScrolled ? '#fff' : 'transparent',
            boxShadow: isScrolled ? '0px 0px 9px 1px rgba(0,0,0,0.16)' : 'none',
            padding: isScrolled ? '10px 0' : '20px 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/svbe_logo_new.png" alt="Shree Vishwakarma Business Expo" style={{ height: isScrolled ? '60px' : '80px', transition: 'height 0.3s', objectFit: 'contain' }} />
                </Link>

                <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <Link href="/about" style={{ color: isScrolled ? 'var(--foreground)' : 'var(--primary)', fontWeight: 500 }}>About Expo</Link>
                    <Link href="/expo" style={{ color: isScrolled ? 'var(--foreground)' : 'var(--primary)', fontWeight: 500 }}>Business Expo 2026</Link>
                    <Link href="/contact" style={{ color: isScrolled ? 'var(--foreground)' : 'var(--primary)', fontWeight: 500 }}>Contact Us</Link>
                    <Link href="/book" className="theme-btn" style={{ marginLeft: '10px' }}>Book Tickets</Link>
                </nav>
            </div>

            <style jsx>{`
                @media (max-width: 992px) {
                    nav { display: none !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
