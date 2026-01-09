"use client";
import React from 'react';
import { FaExternalLinkAlt, FaPhone, FaQuoteLeft } from 'react-icons/fa';

const MevadaSutharSamaj = () => {
    return (
        <section className="samaj-section">
            <div className="container">
                <div className="content-wrapper">
                    {/* Header */}
                    <div className="section-header">
                        <h2 className="section-title">Mevada Suthar Samaj</h2>
                        <a
                            href="https://www.mevadasutharambaji.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="website-link"
                        >
                            Visit Website <FaExternalLinkAlt size={14} />
                        </a>
                    </div>

                    {/* Quote */}
                    <div className="quote-box">
                        <FaQuoteLeft className="quote-icon" size={28} />
                        <p className="quote-text">
                            Only humility will lead us to unity, and unity will lead to peace.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="content-box">
                        <p className="gujarati-text">
                            શ્રી વિશ્વકર્મા મેવાડા સુથાર સમાજ (ગુજરાત) અંબાજીથી આપ પરિચિત છો જ. તા. ૧૨/૦૫/૨૦૦૪ થી રજીસ્ટર્ડ થયેલી સંસ્થા છે. તેનો મુખ્ય ઉદ્દેશ ગુજરાત રાજ્યમાં વસતા મેવાડા સુથાર પરિવારોને એકત્ર કરી ગોળ અને વાડાને ભુલી સંગઠન કરવાનો છે.
                        </p>
                        <p className="gujarati-text">
                            અત્યારે પચ્ચીસ જેટલા ગોળના ભાઇઓ આ સંસ્થાની વ્યવસ્થાપક કમિટિમાં પ્રતિનિધિ છે. ગુજરાત ૨૬ જીલ્લાઓના તમામ મેવાડા સુથાર પરિવારોને એક મંચ ઉપર લાવવા આ સંસ્થા દ્રારા અંબાજી ખાતે શ્રી વિશ્વકર્મા સાંસ્કૃતિક ભવનનું નિર્માણ કાર્ય ચાલુ કર્યું છે. આ અતિથિ ભવનના બાંધકામ માટે રાજ્યમાંથી આપણા સમાજના પરિવારો તરફથી સારો પ્રતિભાવ મળ્યો છે. આ સાંસ્કૃતિક ભવન મેવાડા સુથાર પરિવારોની એકતાનું પ્રતિક બની રરહ્યું છે. ગુજરાતના અઢાર હજાર ગામડાઓમાં વસતા આપણા સમાજના પરિવારોને  આ કાર્યમાં જોડાયા છે. આ માટે રાજ્યના અલગ અલગ સ્થળે સભાનું આયોજન આ સંસ્થા દ્રારા સ્થાનિક ભાઇઓ/સંસ્થાઓના સહકારથી કરવામાં આવે છે.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="contact-section">
                        <h3 className="contact-title">Contact Us</h3>
                        <div className="contact-cards">
                            <a href="tel:+917046103269" className="contact-card">
                                <div className="contact-icon">
                                    <FaPhone size={20} />
                                </div>
                                <div className="contact-info">
                                    <div className="contact-name">Kaushik Mevada</div>
                                    <div className="contact-number">+91 7046103269</div>
                                </div>
                            </a>
                            <a href="tel:+919825800326" className="contact-card">
                                <div className="contact-icon">
                                    <FaPhone size={20} />
                                </div>
                                <div className="contact-info">
                                    <div className="contact-name">Atulbhai Suthar</div>
                                    <div className="contact-number">+91 9825800326</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .samaj-section {
                    padding: 100px 0;
                    background: linear-gradient(135deg, #FFF9F0 0%, #ffffff 100%);
                    position: relative;
                }

                .content-wrapper {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                /* Header */
                .section-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .section-title {
                    font-size: 2.8rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: var(--font-outfit);
                }

                .website-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 28px;
                    background: var(--secondary);
                    color: var(--white);
                    border-radius: 50px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(188, 119, 64, 0.3);
                }

                .website-link:hover {
                    background: var(--primary);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(13, 34, 51, 0.3);
                }

                /* Quote Box */
                .quote-box {
                    background: var(--white);
                    padding: 40px 50px;
                    border-radius: 16px;
                    border-left: 5px solid var(--secondary);
                    margin-bottom: 40px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    position: relative;
                }

                .quote-icon {
                    color: var(--secondary);
                    opacity: 0.3;
                    margin-bottom: 15px;
                }

                .quote-text {
                    font-size: 1.4rem;
                    color: var(--primary);
                    font-weight: 600;
                    font-style: italic;
                    line-height: 1.8;
                    margin: 0;
                }

                /* Content Box */
                .content-box {
                    background: var(--white);
                    padding: 45px;
                    border-radius: 16px;
                    margin-bottom: 50px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .gujarati-text {
                    font-size: 1.15rem;
                    line-height: 2;
                    color: #333;
                    margin-bottom: 25px;
                    text-align: justify;
                }

                .gujarati-text:last-child {
                    margin-bottom: 0;
                }

                /* Contact Section */
                .contact-section {
                    text-align: center;
                }

                .contact-title {
                    font-size: 2rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin-bottom: 30px;
                    font-family: var(--font-outfit);
                }

                .contact-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .contact-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 25px 30px;
                    background: var(--white);
                    border-radius: 12px;
                    border: 2px solid rgba(0,0,0,0.06);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }

                .contact-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--secondary);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                }

                .contact-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, var(--secondary), var(--accent));
                    color: var(--white);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }

                .contact-card:hover .contact-icon {
                    transform: rotate(15deg) scale(1.1);
                }

                .contact-info {
                    text-align: left;
                    flex: 1;
                }

                .contact-name {
                    font-size: 1.1rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin-bottom: 5px;
                }

                .contact-number {
                    font-size: 1rem;
                    color: #666;
                    font-weight: 500;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .samaj-section {
                        padding: 70px 0;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }

                    .quote-box {
                        padding: 30px 25px;
                    }

                    .quote-text {
                        font-size: 1.1rem;
                    }

                    .content-box {
                        padding: 30px 25px;
                    }

                    .gujarati-text {
                        font-size: 1rem;
                        line-height: 1.8;
                    }

                    .contact-title {
                        font-size: 1.6rem;
                    }

                    .contact-cards {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default MevadaSutharSamaj;
