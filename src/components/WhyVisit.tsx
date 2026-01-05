"use client";
import React from 'react';

const WhyVisit = () => {
    const reasons = [
        { title: "Networking", icon: "🤝", desc: "Connect with 123+ exhibitors and industry leaders from the Mevada community." },
        { title: "Growth", icon: "🚀", desc: "Discover new business opportunities and expand your market reach." },
        { title: "Innovation", icon: "💡", desc: "Explore the latest trends in technology, manufacturing, and design." },
        { title: "Knowledge", icon: "📚", desc: "Attend expert-led seminars and gain insights into industry shifts." }
    ];

    return (
        <section style={{ padding: '80px 0', background: 'var(--foreground)', color: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title" style={{ color: '#fff' }}>Why Visit SVBE 2026?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
                        Your gateway to business excellence and community collaboration.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    {reasons.map((r, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '40px 30px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease'
                        }}
                            className="why-card"
                        >
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>{r.icon}</div>
                            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'var(--primary)' }}>{r.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{r.desc}</p>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    .why-card:hover {
                        background: rgba(255,255,255,0.1) !important;
                        transform: translateY(-10px);
                        border-color: var(--primary) !important;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default WhyVisit;
