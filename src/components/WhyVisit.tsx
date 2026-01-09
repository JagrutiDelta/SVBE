"use client";
import React from 'react';
import { FaHandshake, FaRocket, FaLightbulb, FaBookOpen, FaBriefcase, FaTicketAlt } from 'react-icons/fa';
import Link from 'next/link';

const WhyVisit = () => {
    const reasons = [
        {
            title: "Networking",
            icon: <FaHandshake size={40} />,
            desc: "Connect with 119+ exhibitors and industry leaders from the Mevada community."
        },
        {
            title: "Growth",
            icon: <FaRocket size={40} />,
            desc: "Discover new business opportunities and expand your market reach locally and globally."
        },
        {
            title: "Innovation",
            icon: <FaLightbulb size={40} />,
            desc: "Explore the latest trends in technology, manufacturing, and design excellence."
        },
        {
            title: "Knowledge",
            icon: <FaBookOpen size={40} />,
            desc: "Attend expert-led seminars and gain insights into future industry shifts."
        }
    ];

    return (
        <section className="why-visit-section">
            <div className="container-fluid">
                <div className="section-header">
                    <span className="sub-title">Benefits</span>
                    <h2 className="section-title">Why Visit SVBE 2026?</h2>
                    <p className="section-desc">
                        Your gateway to business excellence, community collaboration, and future growth.
                    </p>
                </div>

                <div className="why-grid">
                    {reasons.map((r, i) => (
                        <div key={i} className="why-card">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">{r.icon}</div>
                            </div>
                            <h3 className="card-title">{r.title}</h3>
                            <p className="card-desc">{r.desc}</p>
                        </div>
                    ))}
                </div>


            </div>

            <style jsx>{`
                .why-visit-section {
                    padding: 80px 0;
                    background: #f8fafc;
                    color: #0f172a;
                    position: relative;
                    overflow: hidden;
                }
                
                .container-fluid {
                    width: 90%;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .why-visit-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at 50% 50%, rgba(188, 119, 64, 0.05), transparent 70%);
                    pointer-events: none;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                    position: relative;
                    z-index: 2;
                }

                .sub-title { color: var(--secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; display: block; margin-bottom: 10px; }
                .section-title { color: #0f172a; margin-bottom: 20px; }
                .section-desc { color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto; }

                /* Grid Layout */
                .why-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                    position: relative;
                    z-index: 2;
                    margin-bottom: 60px;
                }

                /* Card Design */
                .why-card {
                    background: #fff;
                    padding: 40px 30px;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                }

                /* Hover State */
                .why-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border-color: rgba(188, 119, 64, 0.3);
                }

                /* Icon Styling */
                .card-icon-wrapper {
                    margin-bottom: 25px;
                    position: relative;
                    display: inline-block;
                }
                
                .card-icon {
                    color: var(--secondary);
                    font-size: 2.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: #f1f5f9;
                    border-radius: 50%;
                    border: 1px solid #e2e8f0;
                    transition: all 0.4s ease;
                }

                .why-card:hover .card-icon {
                    background: var(--secondary);
                    color: #fff;
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 10px 15px -3px rgba(188, 119, 64, 0.3);
                    border-color: transparent;
                }

                .card-title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: #0f172a;
                }

                .card-desc {
                    color: #64748b;
                    line-height: 1.6;
                    font-size: 1rem;
                }

                /* Shared dimming effect on parent hover */
                .why-grid:hover .why-card:not(:hover) {
                    opacity: 0.7;
                    transform: scale(0.98);
                }

                /* CTA */
                .cta-wrapper { text-align: center; position: relative; z-index: 2; margin-top: 50px; }
                .book-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 18px 48px;
                    background: var(--secondary);
                    color: #fff;
                    font-weight: 600;
                    font-size: 1.2rem;
                    border-radius: 50px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    box-shadow: 0 10px 20px rgba(188, 119, 64, 0.2);
                    letter-spacing: 0.5px;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }

                .book-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.1);
                    transition: width 0.3s ease;
                    z-index: -1;
                }

                .book-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(188, 119, 64, 0.4);
                }

                .book-btn:hover::before {
                    width: 100%;
                }

                .book-btn svg {
                    transition: transform 0.3s ease;
                }
                
                .book-btn:hover svg {
                    transform: rotate(15deg);
                }

                @media (max-width: 1200px) {
                    .why-grid {
                        grid-template-columns: repeat(2, 1fr);
                        max-width: 800px;
                        margin: 0 auto 60px;
                    }
                }
                
                @media (max-width: 600px) {
                    .why-grid { grid-template-columns: 1fr; }
                    .section-title { font-size: 2.2rem; }
                }
            `}</style>
        </section >
    );
};

export default WhyVisit;
