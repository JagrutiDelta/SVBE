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
                <div className="speakers-intro">
                    <h2 className="section-title">Speakers At SVBE '24</h2>
                    <p className="speakers-desc">Gain valuable insights from industry experts and ignite the drive to excel in your field.</p>
                </div>

                <div className="speakers-grid">
                    {speakers.map((s, i) => (
                        <div key={i} className="speaker-card">
                            <div className="speaker-image-wrapper">
                                <img
                                    src={`/assets/${s.img}`}
                                    alt={s.name}
                                    className="speaker-image"
                                />
                            </div>
                            <h3 className="speaker-name">{s.name}</h3>
                            <p className="speaker-role">{s.role}</p>
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
