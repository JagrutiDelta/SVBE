"use client";

const About = () => {
    const features = [
        { title: "Mevada Businesses", img: "about-industry-img.png" },
        { title: "Networking Zones", img: "ai_speaker_sonu.png" },
        { title: "Seminars & Culture", img: "ai_speaker_gnanvatsal.png" }
    ];

    return (
        <section style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 500px', paddingRight: '10%' }}>
                        <h1 className="section-title">Shree Vishwakarma Community Business Expo 2026</h1>
                        <p style={{ fontSize: '18px', color: 'var(--secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                            Showcasing Strength, Diversity, and Innovation
                        </p>
                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Shree Vishwakarma Community Business Expo 2026 is a landmark two-day business exhibition organized to showcase the strength, diversity, and innovation of businesses owned by members of the Mevada community. The expo aims to provide a powerful platform for networking, business growth, brand visibility, and collaboration across industries.
                        </p>
                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                            A two-day mega business exhibition featuring 123+ stalls by Mevada community businesses across Pharma Machinery, Textile, Construction, IT, Architecture, Furniture, <strong>Consulting</strong>, and more. The Expo is open to all visitors and includes business networking zones, seminars, food stalls, and cultural programs—creating a powerful platform for business growth, collaboration, and visibility.
                        </p>

                        <div style={{ display: 'flex', gap: '30px' }}>
                            {features.map((f, i) => (
                                <div key={i} style={{ textAlign: 'center', width: '100px' }}>
                                    <div style={{
                                        width: '97px',
                                        height: '97px',
                                        borderRadius: '50%',
                                        border: '3px solid #F1F0EE',
                                        overflow: 'hidden',
                                        marginBottom: '10px'
                                    }}>
                                        <img src={`/assets/${f.img}`} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <p style={{ fontSize: '13px', lineHeight: '1.2' }}>{f.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
                        <img src="/assets/gujarat-map.gif" alt="Gujarat Map" style={{ width: '80%', maxWidth: '500px' }} />
                    </div>
                </div>
            </div>

            {/* Ribbon Background Effect could go here */}
        </section>
    );
};

export default About;
