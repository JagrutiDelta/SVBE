"use client";
import Link from 'next/link';

const Events = () => {
    const events = [
        {
            title: "Exhibition",
            img: "Exhibition.jpg",
            icon: "exhibition-icon.png",
            color: "var(--secondary)",
            desc: "Explore 125+ exhibits offering cutting-edge solutions designed to meet the unique needs of various industries."
        },
        {
            title: "Knowledge sessions",
            img: "Knowledge Sessions.jpg",
            icon: "knowledge-icon.png",
            color: "var(--accent)",
            desc: "Gain deeper insights at the thought-provoking conferences scheduled at the expo."
        },
        {
            title: "Networking",
            img: "Networking.jpg",
            icon: "networking-icon.png",
            color: "var(--primary)",
            desc: "Unlock new growth opportunities by connecting and networking with industry experts."
        },
        {
            title: "Digital Transformation",
            img: "Digital Tranformation.jpg",
            icon: "digital-transformation-icon.png",
            color: "#B8860B",
            desc: "Revolutionize your business by harnessing the transformative power of technology."
        },
        {
            title: "Job Opportunities",
            img: "Job Opportunity.jpg",
            icon: "attendees-icon.png",
            color: "var(--secondary)",
            desc: "Connect with top employers and discover career-defining opportunities in the industry."
        }
    ];

    return (
        <section style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 className="section-title">Events At SVBE 2026</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                        Explore 119+ stalls offering cutting-edge solutions across Pharma, Textile, IT, and more, designed to showcase community excellence.
                    </p>
                </div>

                <div className="events-wrapper">
                    {events.map((e, i) => (
                        <div key={i} className="event-card">
                            <img src={`/assets/${e.img}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 1
                            }}></div>

                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                padding: '20px',
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{
                                    width: '60px', height: '60px', background: e.color,
                                    borderRadius: '50%', border: '1px solid #fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <img src={`/assets/${e.icon}`} style={{ width: '30px' }} />
                                </div>
                                <div className="event-info">
                                    <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '10px' }}>{e.title}</h3>
                                    <p className="event-desc" style={{ color: '#fff', fontSize: '14px', lineHeight: '1.4' }}>{e.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link href="https://svkbe2026.onrender.com/" target="_blank" className="theme-btn">
                        Book Ticket Now
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .events-wrapper {
                    display: flex;
                    gap: 15px;
                }
                .event-card {
                    position: relative;
                    height: 400px;
                    flex: 1;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                @media (max-width: 1024px) {
                    .events-wrapper {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 600px) {
                    .events-wrapper {
                        grid-template-columns: 1fr;
                    }
                }
                .event-card .event-desc {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                }
                .event-card:hover .event-desc {
                    opacity: 1;
                    transform: translateY(0);
                }
                .event-card .event-info {
                    transition: transform 0.3s ease;
                }
                .event-card:hover .event-info {
                    transform: translateY(-10px);
                }
                .book-btn {
                    display: inline-block;
                    padding: 16px 40px;
                    background: var(--primary);
                    color: #fff;
                    font-weight: 600;
                    font-size: 1.1rem;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(13, 34, 51, 0.3);
                }
                .book-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(13, 34, 51, 0.4);
                    background: var(--primary-hover);
                }
            `}</style>
        </section>
    );
};

export default Events;
