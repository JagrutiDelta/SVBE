"use client";
import React from 'react';
import { FaUser } from 'react-icons/fa';

const OrganizerCommitteeStatic = () => {
    const organizers = [
        { name: "Niravbhai J Mevada", role: "Organizer", img: "organizer commity/Niravbhai J Mevada.png" },
        { name: "Giris Bhai", role: "Organizer", img: null },
        { name: "Jitendra Bhai", role: "Organizer", img: null },
        { name: "Sandip Mevada", role: "Organizer", img: "organizer commity/Sandip Mevada.png" },
        { name: "Ankit Mevada", role: "Organizer", img: "organizer commity/Ankit Mevada.png" },
        { name: "Vijay Mevada", role: "Organizer", img: "organizer commity/Vijaybhai.png" }
    ];

    const coOrganizers = [
        { name: "Ganpat Bhai", role: "Co-Organizer", img: null },
        { name: "Kauhsik Bhai", role: "Co-Organizer", img: null },
        { name: "Atul Bhai", role: "Co-Organizer", img: "organizer commity/Atul G. Suthar.png" },
        { name: "Rajanikant Bhai", role: "Co-Organizer", img: "organizer commity/Rajanikant Mevada.png" },
        { name: "Girish Bhai", role: "Co-Organizer", img: "organizer commity/Girish Mevada.png" },
        { name: "Anil Bhai", role: "Co-Organizer", img: null },
        { name: "Bhavin Bhai", role: "Co-Organizer", img: null },
        { name: "Paresh Bhai", role: "Co-Organizer", img: null },
        { name: "Mayur H Suthar", role: "Co-Organizer", img: "organizer commity/Mayur H Suthar.png" },
        { name: "Nayana Ben", role: "Co-Organizer", img: null }
    ];

    return (
        <section className="organizing-committee-static">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="subtitle">Leadership</div>
                    <h2 className="section-title">Organizing Committee</h2>
                    <p className="section-description">
                        Meet the dedicated professionals steering SVBE 2026 towards excellence
                    </p>
                </div>

                {/* Organizers Section */}
                <div className="committee-group">
                    <h3 className="group-title">Organizers</h3>
                    <div className="committee-grid">
                        {organizers.map((member, idx) => (
                            <div key={idx} className="member-card">
                                <div className="card-inner">
                                    <div className="image-section">
                                        {member.img ? (
                                            <img src={`/assets/${member.img}`} alt={member.name} className="member-photo" />
                                        ) : (
                                            <div className="placeholder-avatar">
                                                <FaUser size={40} />
                                            </div>
                                        )}
                                        <div className="role-badge">{member.role}</div>
                                    </div>
                                    <div className="info-section">
                                        <h3 className="member-name">{member.name}</h3>
                                        <div className="divider-line"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Co-Organizers Section */}
                <div className="committee-group">
                    <h3 className="group-title">Co-Organizers</h3>
                    <div className="committee-grid">
                        {coOrganizers.map((member, idx) => (
                            <div key={idx} className="member-card">
                                <div className="card-inner">
                                    <div className="image-section">
                                        {member.img ? (
                                            <img src={`/assets/${member.img}`} alt={member.name} className="member-photo" />
                                        ) : (
                                            <div className="placeholder-avatar">
                                                <FaUser size={40} />
                                            </div>
                                        )}
                                        <div className="role-badge">{member.role}</div>
                                    </div>
                                    <div className="info-section">
                                        <h3 className="member-name">{member.name}</h3>
                                        <div className="divider-line"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .organizing-committee-static {
                    padding: 60px 0 100px;
                    background: var(--white);
                    position: relative;
                }

                .section-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 70px;
                }

                .subtitle {
                    color: var(--secondary);
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }

                .section-title {
                    font-size: 2.8rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: var(--font-outfit);
                }

                .section-description {
                    font-size: 1.1rem;
                    color: #666;
                    line-height: 1.8;
                }

                /* Committee Groups */
                .committee-group {
                    margin-bottom: 80px;
                }

                .group-title {
                    text-align: center;
                    font-size: 2.2rem;
                    color: var(--primary);
                    margin-bottom: 50px;
                    font-weight: 700;
                    font-family: var(--font-outfit);
                    position: relative;
                }

                .group-title::after {
                    content: '';
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
                    border-radius: 2px;
                }

                .committee-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 35px;
                    padding: 0 20px;
                }

                /* Member Card */
                .member-card {
                    flex-shrink: 0;
                    background: var(--white);
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    border: 1px solid rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                }

                .member-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
                    border-color: var(--secondary);
                }

                .card-inner {
                    position: relative;
                }

                /* Image Section */
                .image-section {
                    position: relative;
                    width: 100%;
                    height: 320px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
                }

                .member-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .member-card:hover .member-photo {
                    transform: scale(1.05);
                }

                .placeholder-avatar {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #bbb;
                    background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
                }

                .role-badge {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    background: rgba(13, 34, 51, 0.95);
                    color: var(--white);
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    backdrop-filter: blur(10px);
                }

                /* Info Section */
                .info-section {
                    padding: 25px 20px;
                    text-align: center;
                    background: var(--white);
                }

                .member-name {
                    font-size: 1.25rem;
                    color: var(--primary);
                    font-weight: 700;
                    margin-bottom: 12px;
                    font-family: var(--font-outfit);
                    line-height: 1.4;
                }

                .divider-line {
                    width: 40px;
                    height: 3px;
                    background: var(--secondary);
                    margin: 0 auto;
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                .member-card:hover .divider-line {
                    width: 60px;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .organizing-committee-static {
                        padding: 40px 0 60px;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }

                    .section-description {
                        font-size: 1rem;
                    }

                    .group-title {
                        font-size: 1.8rem;
                        margin-bottom: 35px;
                    }

                    .committee-grid {
                        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                        gap: 25px;
                    }

                    .image-section {
                        height: 280px;
                    }

                    .member-name {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default OrganizerCommitteeStatic;
