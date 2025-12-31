"use client";

const Gallery = () => {
    const galleryImages = [
        { title: "Expo Hall Overview", img: "expo-gate.png" },
        { title: "Networking Session", img: "all-events.png" },
        { title: "Exhibition Booths", img: "about-conference-img.png" },
        { title: "Business Meetings", img: "about-industry-img.png" },
        { title: "Product Showcase", img: "atal-bridge.png" },
        { title: "Opening Ceremony", img: "expo-gate.png" }
    ];

    return (
        <section id="gallery" style={{ background: 'linear-gradient(135deg, #FFF9F0 0%, #FFE8CC 100%)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Expo Gallery</h2>
                    <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                        Explore moments from our previous exhibitions and get a glimpse of the vibrant atmosphere at SVBE.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '3rem'
                }}>
                    {galleryImages.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                aspectRatio: '4/3'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(128, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                        >
                            <img
                                src={`/assets/${item.img}`}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                padding: '30px 20px 20px',
                                color: '#fff'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button className="theme-btn" style={{ fontSize: '16px', padding: '12px 40px' }}>
                        View All Photos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
