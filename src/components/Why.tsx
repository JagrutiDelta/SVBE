"use client";
import React from 'react';

const Why = () => {
    return (
        <section className="why-section">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content">
                        <div className="why-big-question">Why?</div>
                        <div className="why-badge">Purpose of Expo</div>
                        <h2 className="section-title why-title">એક્ઝિબિશન નો હેતુ</h2>

                        <div className="why-text-gujarati">
                            આપણા સમાજના અનેક સભ્યો નાના-મધ્યમ સાઇઝના બિઝનેસ ચલાવે છે,
                            પરંતુ મોટાભાગે એકબીજાને ઓળખતા નથી. આ ગેપ પૂર્ણ કરવા માટે અમે
                            સમાજનું સૌપ્રથમ એક્ઝિબિશન યોજી રહ્યા છીએ.
                        </div>

                        <div className="why-divider"></div>

                        <div className="why-text-english">
                            Many members of our community run small-medium sized businesses,
                            but most of them don't know each other. To bridge this gap,
                            we are organizing the community's first exhibition to solve this gap.
                        </div>
                    </div>

                    <div className="why-image-wrapper">
                        <div className="why-img-border">
                            <img src="/assets/why.png" alt="Why this Expo" className="why-image" />
                        </div>
                        <div className="why-decoration"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .why-section {
                    padding: 6rem 0;
                    background-color: var(--white);
                    overflow: hidden;
                }

                .why-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .why-badge {
                    display: inline-block;
                    padding: 8px 16px;
                    background: var(--color-cream);
                    color: var(--secondary);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 50px;
                    font-size: 14px;
                    margin-bottom: 20px;
                    border: 1px solid rgba(188, 119, 64, 0.2);
                }

                .why-title {
                    /* font-size and color inherited from section-title */
                    margin-bottom: 30px;
                    line-height: 1.2;
                }

                .why-text-gujarati {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    color: var(--foreground);
                    font-weight: 500;
                    margin-bottom: 30px;
                    border-left: 4px solid var(--secondary);
                    padding-left: 20px;
                }

                .why-divider {
                    height: 1px;
                    background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
                    margin: 30px 0;
                    width: 100%;
                }

                .why-text-english {
                    font-size: 1.25rem;
                    color: #555;
                    line-height: 1.7;
                    font-family: var(--font-jost);
                }

                .why-image-wrapper {
                    position: relative;
                }

                .why-img-border {
                    position: relative;
                    z-index: 2;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }

                .why-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.5s ease;
                }

                .why-image-wrapper:hover .why-image {
                    transform: scale(1.02);
                }

                .why-decoration {
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--secondary);
                    border-radius: 20px;
                    z-index: 1;
                    opacity: 0.5;
                }

                @media (max-width: 992px) {
                    .why-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    
                    .why-title {
                        font-size: 2.5rem;
                    }
                }

                .why-big-question {
                    font-size: 100px;
                    font-weight: 800;
                    color: var(--secondary);
                    opacity: 0.60;
                    line-height: 1;
                    margin-bottom: -20px;
                    font-family: var(--font-outfit);
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .why-big-question {
                        font-size: 80px;
                    }
                    .why-section {
                        padding: 4rem 0;
                    }
                    
                    .why-title {
                        font-size: 2rem;
                    }

                    .why-text-gujarati {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Why;
