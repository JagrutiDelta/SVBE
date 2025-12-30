"use client";

const Stats = () => {
    const stats = [
        { label: "Visitors", value: "5000+", icon: "attendees-icon.png", color: "var(--secondary)" },
        { label: "Community", value: "Mevada", icon: "sponsors-icon.png", color: "var(--primary)" },
        { label: "Sections", value: "8+", icon: "speakers-icon.png", color: "var(--accent)" },
        { label: "Stalls", value: "123+", icon: "exhibitors-icon.png", color: "#B8860B" }
    ];

    return (
        <section style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Network with industry professionals</h2>
                    <p style={{ color: '#666' }}>Connect, collaborate and grow - seize the opportunity to network with inspiring professionals!</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
                    {stats.map((stat, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: '1 1 250px',
                            justifyContent: 'center',
                            borderRight: i < stats.length - 1 ? '1px solid #eee' : 'none'
                        }}>
                            <div style={{
                                background: stat.color,
                                padding: '16px',
                                borderRadius: '50%',
                                marginRight: '15px'
                            }}>
                                <img src={`/assets/${stat.icon}`} alt={stat.label} style={{ width: '40px' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '38px', fontWeight: 700, margin: 0, lineHeight: 1 }}>{stat.value}</h3>
                                <p style={{ fontSize: '18px', color: '#666' }}>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 992px) {
                    div[style*="borderRight"] { border-right: none !important; margin-bottom: 20px; }
                }
            `}</style>
        </section>
    );
};

export default Stats;
