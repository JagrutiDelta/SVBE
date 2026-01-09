"use client";
import React from 'react';
import { FaUsers, FaNetworkWired, FaIndustry, FaTags, FaLightbulb, FaHandshake, FaUserGraduate, FaBriefcase, FaRocket } from 'react-icons/fa';

const ExpoObjectives = () => {
    const objectives = [
        {
            titleEng: "Networking & Unity",
            titleGuj: "સમાજના તમામ ઉદ્યોગકારોને એકત્રિત કરવા",
            desc: "Uniting all entrepreneurs of the community under one roof.",
            icon: <FaUsers />
        },
        {
            titleEng: "Strategic Networking",
            titleGuj: "ધંધાકીય વિકાસ અને સહકાર માટે મજબૂત નેટવર્ક ઊભું કરવું",
            desc: "Building a robust business network to drive growth and mutual cooperation.",
            icon: <FaNetworkWired />
        },
        {
            titleEng: "Showcasing Excellence",
            titleGuj: "કુશળતા અને ઉત્પાદન ક્ષમતાનું પ્રદર્શન",
            desc: "Showcasing industrial expertise and manufacturing capabilities.",
            icon: <FaIndustry />
        },
        {
            titleEng: "Value Addition & Branding",
            titleGuj: "સમાજના ઉદ્યોગોનું વેલ્યુ એડિશન અને બ્રાન્ડિંગ",
            desc: "Enhancing value addition and building strong brand identities for community businesses.",
            icon: <FaTags />
        },
        {
            titleEng: "Opportunity Creation",
            titleGuj: "નવા બિઝનેસ અને આઇડિયાની તક સર્જવી",
            desc: "Identifying and creating new business opportunities and innovative ideas.",
            icon: <FaLightbulb />
        },
        {
            titleEng: "B2B & B2C Connectivity",
            titleGuj: "ઉત્પાદકો, ખરીદદારો, સપ્લાયર્સ અને પાર્ટનર્સ સાથે જોડાવાની તક",
            desc: "Facilitating direct interaction between manufacturers, buyers, suppliers, and partners.",
            icon: <FaHandshake />
        },
        {
            titleEng: "Youth Empowerment",
            titleGuj: "યુવાઓને પ્રોત્સાહન આપવું",
            desc: "Empowering and inspiring the next generation of leaders.",
            icon: <FaUserGraduate />
        },
        {
            titleEng: "Employment Platform",
            titleGuj: "વિદ્યાર્થી, તાલીમાર્થીઓ તથા યુવાઓને યોગ્ય નોકરી માટે પ્લેટફોર્મ પૂરું પાડવું",
            desc: "Providing a dedicated platform for job placements and career growth for students and trainees.",
            icon: <FaBriefcase />
        },
        {
            titleEng: "Startup Incubator",
            titleGuj: "નવા સ્ટાર્ટઅપ બિઝનેસને પ્લેટફોર્મ પૂરું પાડવું",
            desc: "Providing a launchpad and platform for new startups to thrive.",
            icon: <FaRocket />
        }
    ];

    const keywords = [
        { eng: "Networking", guj: "નેટવર્કિંગ" },
        { eng: "Empowerment", guj: "સશક્તિકરણ" },
        { eng: "Global Branding", guj: "વૈશ્વિક બ્રાન્ડિંગ" },
        { eng: "Skill Development", guj: "કૌશલ્ય વિકાસ" },
        { eng: "Strategic Collaboration", guj: "વ્યૂહાત્મક સહકાર" }
    ];

    return (
        <section className="objectives-section">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Vision & Mission</span>
                    <h2 className="section-title">SVB Expo Objectives</h2>
                    <p className="subtitle">Core goals driving the Shree Vishwakarma Business Expo 2026</p>
                </div>

                <div className="objectives-grid">
                    {objectives.map((obj, index) => (
                        <div key={index} className="obj-card">
                            <div className="card-inner">
                                <div className="icon-wrapper">
                                    <div className="icon-box">
                                        {obj.icon}
                                    </div>
                                    <div className="icon-glow"></div>
                                </div>
                                <h3 className="title-guj">{obj.titleGuj}</h3>
                                <h4 className="title-eng">{obj.titleEng}</h4>
                                <div className="divider"></div>
                                <p className="desc">{obj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="keywords-container">
                    <div className="keywords-box">
                        <h3 className="kw-title">Focus Areas</h3>
                        <div className="keywords-list">
                            {keywords.map((kw, i) => (
                                <span key={i} className="keyword-tag">
                                    <span className="kw-eng">{kw.eng}</span>
                                    <span className="kw-guj">{kw.guj}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .objectives-section {
                    padding: 100px 0;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    color: #0f172a;
                    position: relative;
                    overflow: hidden;
                }

                .objectives-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at 50% 0%, rgba(188, 119, 64, 0.05), transparent 70%);
                    pointer-events: none;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 70px;
                    position: relative;
                    z-index: 2;
                }

                .badge {
                    background: rgba(188, 119, 64, 0.1);
                    color: var(--secondary);
                    padding: 8px 20px;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    border: 1px solid rgba(188, 119, 64, 0.2);
                    font-weight: 600;
                    display: inline-block;
                    margin-bottom: 15px;
                }

                .section-title {
                    font-size: 3rem;
                    color: #0f172a;
                    margin: 10px 0 20px;
                }

                .subtitle {
                    color: #64748b;
                    font-size: 1.2rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .objectives-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 80px;
                    position: relative;
                    z-index: 2;
                }

                .obj-card {
                    background: #fff;
                    border-radius: 20px;
                    padding: 2px; /* For hover border effect */
                    background-image: linear-gradient(135deg, transparent, transparent);
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
                }

                .card-inner {
                    background: #fff;
                    border-radius: 19px;
                    padding: 40px 30px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: all 0.4s ease;
                    border: 1px solid #f1f5f9;
                }

                .obj-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px -10px rgba(188, 119, 64, 0.15);
                }

                .obj-card:hover .card-inner {
                    border-color: rgba(188, 119, 64, 0.2);
                }

                .icon-wrapper {
                    position: relative;
                    margin-bottom: 30px;
                }

                .icon-box {
                    width: 80px;
                    height: 80px;
                    background: #f8fafc;
                    color: var(--secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 2rem;
                    position: relative;
                    z-index: 2;
                    border: 1px solid #e2e8f0;
                    transition: all 0.4s ease;
                }

                .icon-glow {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%; height: 100%;
                    background: var(--secondary);
                    filter: blur(20px);
                    opacity: 0;
                    transition: all 0.4s ease;
                    border-radius: 50%;
                }

                .obj-card:hover .icon-glow {
                    opacity: 0.15;
                    width: 120%; height: 120%;
                }

                .obj-card:hover .icon-box {
                     background: var(--secondary);
                     color: #fff;
                     border-color: transparent;
                }

                .title-guj {
                    font-size: 1.4rem;
                    color: #0f172a;
                    margin-bottom: 10px;
                    font-weight: 600;
                    line-height: 1.4;
                }

                .title-eng {
                    font-size: 0.95rem;
                    color: var(--secondary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                .divider {
                    width: 40px;
                    height: 2px;
                    background: #e2e8f0;
                    margin-bottom: 20px;
                    transition: width 0.4s ease;
                }

                .obj-card:hover .divider {
                    width: 80px;
                    background: var(--secondary);
                }

                .desc {
                    color: #64748b;
                    font-size: 1rem;
                    line-height: 1.6;
                }

                .keywords-container {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }

                .keywords-box {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
                    padding: 40px 60px;
                    border-radius: 100px;
                    text-align: center;
                }

                .kw-title {
                    color: #0f172a;
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 25px;
                    font-weight: 700;
                }

                .keywords-list {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .keyword-tag {
                    background: #f8fafc;
                    padding: 10px 25px;
                    border-radius: 50px;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .kw-eng {
                    color: #334155;
                    font-weight: 600;
                }

                .kw-guj {
                    color: var(--secondary);
                    font-weight: 500;
                    border-left: 1px solid #cbd5e1;
                    padding-left: 8px;
                }

                .keyword-tag:hover {
                    background: var(--secondary);
                    border-color: var(--secondary);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(188, 119, 64, 0.2);
                }

                .keyword-tag:hover .kw-eng,
                .keyword-tag:hover .kw-guj {
                    color: #fff;
                }
                
                .keyword-tag:hover .kw-guj {
                    border-left-color: rgba(255,255,255,0.3);
                }

                @media (max-width: 1200px) {
                     .objectives-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .keywords-box {
                        border-radius: 30px;
                        padding: 30px;
                        width: 100%;
                    }
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2.2rem;
                    }
                    .objectives-grid {
                        grid-template-columns: 1fr;
                    }
                    .title-guj {
                        font-size: 1.3rem;
                    }
                    .keywords-container {
                        padding: 0 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ExpoObjectives;
