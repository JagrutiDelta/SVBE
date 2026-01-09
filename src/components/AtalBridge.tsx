"use client";
import { useState } from 'react';

const AtalBridge = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {/* JOIN NOW Ribbon */}
            <div style={{
                background: '#EBE7DE',
                transform: 'rotate(-1deg)',
                width: '110%',
                marginLeft: '-5%',
                padding: '20px 0',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex'
            }}>
                <div className="marquee-content" style={{
                    display: 'flex',
                    gap: '50px',
                    alignItems: 'center',
                    fontSize: '22px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    animation: 'marquee 20s linear infinite'
                }}>
                    <span>Join Now</span>
                    <img src="/assets/platinum-icon.png" style={{ height: '20px' }} alt="" />
                    <span style={{ color: 'var(--secondary)' }}></span>
                    <img src="/assets/gold-icon.png" style={{ height: '20px' }} alt="" />
                    <span>Stay Connected</span>
                    <img src="/assets/silver-icon.png" style={{ height: '20px' }} alt="" />
                    <span style={{ color: 'var(--primary)' }}>TECH MEETS STRATEGY</span>

                    {/* Duplicate for seamless loop */}
                    <span>Join Now</span>
                    <img src="/assets/platinum-icon.png" style={{ height: '20px' }} alt="" />
                    <span style={{ color: 'var(--secondary)' }}> Powered by Community, Driven by Business</span>
                    <img src="/assets/gold-icon.png" style={{ height: '20px' }} alt="" />
                    <span>Stay Connected</span>
                    <img src="/assets/silver-icon.png" style={{ height: '20px' }} alt="" />
                    <span style={{ color: 'var(--primary)' }}>TECH MEETS STRATEGY</span>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(50%); }
                    }
                `}</style>
            </div>

            {/* Bridge Image Section */}
            <section style={{ padding: '2rem 0', background: '#fff' }}>
                <div style={{ width: '100%' }}>
                    <img
                        src={isHovered ? "/assets/gandhinagar.png" : "/assets/gnagar-bw.png"}
                        alt="Gandhinagar"
                        style={{ width: '100%', height: 'auto', cursor: 'pointer', transition: '0.3s ease' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </section>
        </>
    );
};

export default AtalBridge;
