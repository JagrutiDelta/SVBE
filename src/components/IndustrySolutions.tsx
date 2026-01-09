"use client";

const IndustrySolutions = () => {
    const industries = [
        { name: "Architecture", img: "Industries/Architects and interior designers.png" },
        { name: "Builders & Developers", img: "Industries/Builders and developers.png" },
        { name: "Pharma & Health", img: "Industries/Pharma and Machinery.png" },
        { name: "Textile Machinery", img: "Industries/Textile machinery.png" },
        { name: "Civil & Construction", img: "Industries/Construction and civil engineering.png" },
        { name: "Engineering", img: "Industries/Engineering.png" },
        { name: "Software & IT", img: "Industries/Software and IT.png" },
        { name: "Health and Medical", img: "Industries/Health and medical.png" },
        { name: "Furniture", img: "Industries/Furniture.png" },
        { name: "Trading", img: "Industries/Trading.png" },
        { name: "Banking & Finance", img: "Industries/Banking and finance.png" },
        { name: "CMC VMC job work unit", img: "Industries/Cnc and Vmc job work unit.png" },
    ];

    return (
        <section style={{ backgroundColor: '#fff', padding: '60px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title">Solutions For All Industry Sectors</h2>
                    <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                        Providing innovative technology solutions tailored to meet the unique challenges of diverse industries and drive digital growth.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '25px'
                }}>
                    {industries.map((ind, i) => (
                        <div key={i} className="industry-card">
                            <img src={`/${ind.img}`} alt={ind.name} />
                            <div className="industry-overlay">
                                {ind.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .industry-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    height: 200px;
                    cursor: pointer;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    background: #fff;
                }
                .industry-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                .industry-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: transform 0.5s ease;
                }
                .industry-card:hover img {
                    transform: scale(1.1);
                }
                .industry-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px;
                    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                    color: #fff;
                    text-align: center;
                    font-weight: 600;
                    font-size: 16px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
};

export default IndustrySolutions;
