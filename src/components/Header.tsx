"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
            {/* Glass Container */}
            <div className={`container header-glass ${isScrolled ? "floating" : ""}`}>
                <div className="header-content">
                    {/* Logo */}
                    <Link href="/" className="logo-link">
                        <img
                            src="/assets/svbe_logo_new.png"
                            alt="Shree Vishwakarma Business Expo"
                            className="site-logo"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="site-nav">
                        <Link href="/about" className="nav-link">About</Link>
                        <Link href="/team" className="nav-link">Our Team</Link>
                        <a
                            href="https://svkbe2026.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                        >
                            Stall Layout
                        </a>
                        <Link href="/visitor-profile" className="nav-link">Visitor Profile</Link>

                        <Link href="/contact" className="nav-link">Contact Us</Link>

                        <div className="nav-actions">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfZ3a4kR1EuqYMvIYknL9KvKyyhFZEUIMs1cwZlVgeCQurV0g/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="theme-btn btn-navy">
                                Inquiry
                            </Link>
                            <Link href="https://svkbe2026.onrender.com/" target="_blank" rel="noopener noreferrer" className="theme-btn btn-saffron">
                                Book Ticket
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`nav-toggle ${mobileOpen ? "open" : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
                <div className="mobile-nav-inner">
                    <Link href="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
                    <Link href="/team" className="mobile-link" onClick={() => setMobileOpen(false)}>Our Team</Link>
                    <a
                        href="https://svkbe2026.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-link"
                        onClick={() => setMobileOpen(false)}
                    >
                        Stall Layout
                    </a>
                    <Link href="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                    <Link href="/visitor-profile" className="mobile-link" onClick={() => setMobileOpen(false)}>Visitor Profile</Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfZ3a4kR1EuqYMvIYknL9KvKyyhFZEUIMs1cwZlVgeCQurV0g/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="mobile-link" onClick={() => setMobileOpen(false)}>Inquiry</Link>

                    <Link
                        href="https://svkbe2026.onrender.com/" target="blank" rel="noopener noreferrer"
                        className="theme-btn btn-saffron full-width"
                        onClick={() => setMobileOpen(false)}
                    >
                        Book Ticket
                    </Link>
                </div>
            </div>

            {/* ================= STYLES ================= */}
            <style jsx>{`
        /* ===== HEADER ===== */
        .site-header {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 12px 0;
          transition: padding 0.4s ease;
        }

        .site-header.scrolled {
          padding: 8px 0;
        }

        /* ===== GLASS ===== */
        .header-glass {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          max-width: 96%;
          width: 1400px;
          margin: auto;
          padding: 10px 30px;
        }

        .header-glass.floating {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
          border-radius: 60px;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }

        /* ===== LOGO ===== */
        .site-logo {
          height: 80px;
          margin-top: 10px;
        }

        /* ===== NAV ===== */
        .site-nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          font-family: var(--font-outfit);
          font-size: 16px;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        /* 🔥 NEXT.JS LINK HOVER FIX */
        :global(a.nav-link:hover) {
          color: #d48f56;
        }

        /* ===== CTA ===== */
        .btn-saffron {
          background: linear-gradient(135deg, #bc7740, #d48f56);
          color: #fff;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-saffron:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(188, 119, 64, 0.5);
        }

        .btn-navy {
          background: linear-gradient(135deg, var(--primary), #1A3A54);
          color: #fff;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-navy:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 34, 51, 0.5);
        }

        /* ===== MOBILE ===== */
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-toggle .bar {
          width: 22px;
          height: 2px;
          background: #333;
          margin: 4px 0;
        }

        @media (max-width: 992px) {
          .site-nav {
            display: none;
          }
          .nav-toggle {
            display: block;
          }
        }

        .mobile-nav {
          position: fixed;
          inset: 0;
          background: #fff;
          height: 0;
          overflow: hidden;
          transition: height 0.4s ease;
          padding-top: 80px;
          z-index: 999;
        }

        .mobile-nav.open {
          height: 100vh;
        }

        .mobile-nav-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px;
          text-align: center;
        }

        .mobile-link {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        /* 🔥 MOBILE LINK FIX */
        :global(a.mobile-link:hover) {
          color: #d48f56;
        }

        .full-width {
          width: 100%;
          text-align: center;
        }
      `}</style>
        </header>
    );
};

export default Header;
