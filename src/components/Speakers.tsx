"use client";

const Speakers = () => {
    const speakers = [
        { name: "Dr. Aryan Sharma", role: "Innovation Strategist & Keynote Speaker", img: "speaker_1.jpg" },
        { name: "Hemant Desai", role: "Chairman, Apex Industries", img: "speaker_2.jpg" },
        { name: "Swami Chidanand", role: "Spiritual Mentor & Guide", img: "speaker_3.jpg" },
        { name: "Rahul Verma", role: "CEO, TechVantage Solutions", img: "speaker_4.jpg" },
        { name: "Sanjay Mehta", role: "Founder, Future Ventures", img: "speaker_5.jpg" }
    ];

    return (
        <section id="speakers" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Speakers At SVBE '24</h2>
                    <p style={{ color: '#666' }}>Gain valuable insights from industry experts and ignite the drive to excel in your field.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                    {speakers.map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '1/1.2',
                                background: '#F1F0EE',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                marginBottom: '15px'
                            }}>
                                <img
                                    src={`/assets/${s.img}`}
                                    alt={s.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222' }}>{s.name}</h3>
                            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.2' }}>{s.role}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button className="theme-btn">Explore All Speakers</button>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
