"use client";

const OurTeam = () => {
    const team = [
        { name: "Arjun Reddy", role: "Founder", img: "ai_speaker_sonu.png" },
        { name: "Vivaan Bhatt", role: "Co-Founder", img: "ai_speaker_sonu.png" },
        { name: "Kabir Das", role: "CEO", img: "ai_speaker_savjibhai.png" },
        { name: "Reyansh Iyer", role: "VP Operations", img: "ai_speaker_sonu.png" },
        { name: "Dhruv Kapoor", role: "Tech Lead", img: "ai_speaker_sonu.png" }
    ];

    return (
        <section style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title">Meet Our Team</h2>
                    <p style={{ color: '#666' }}>The visionary leaders and dedicated experts behind Tech Expo Gujarat.</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    {team.map((member, i) => (
                        <div key={i} style={{ textAlign: 'center', width: '200px' }}>
                            <div style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                border: '5px solid #F1F0EE',
                                overflow: 'hidden',
                                margin: '0 auto 15px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                            }}>
                                <img src={`/assets/${member.img}`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222' }}>{member.name}</h3>
                            <p style={{ fontSize: '14px', color: '#14A850', fontWeight: 500 }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
