"use client";

const IndustrySolutions = () => {
    const industries = [
        { name: "Healthcare", img: "healthcare.png" },
        { name: "Manufacturing", img: "manufacturing.png" },
        { name: "Agriculture", img: "electronics.png" }, // Replaced with existing asset
        { name: "Automobiles", img: "electronics.png" }, // Placeholder
        { name: "Energy", img: "electronics.png" },
        { name: "Finance", img: "finance-institutions.png" },
        { name: "Retail", img: "retailers.png" },
        { name: "Textiles", img: "textile-garments.png" },
        { name: "Insurance", img: "insurance.png" }
    ];

    return (
        <section style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title">Solutions For All Industry Sectors</h2>
                    <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                        Providing innovative technology solutions tailored to meet the unique challenges of diverse industries and drive digital growth.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    {industries.map((ind, i) => (
                        <div key={i} style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            height: '150px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}>
                            <img src={`/assets/${ind.img}`} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '10px',
                                background: 'rgba(128, 0, 0, 0.9)', // Maroon
                                color: '#fff',
                                textAlign: 'center',
                                fontWeight: 600,
                                fontSize: '14px'
                            }}>
                                {ind.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;
