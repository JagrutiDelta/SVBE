"use client";

const Sponsors = () => {
    return (
        <section style={{ background: 'url(/assets/home-banner-img-min.png) no-repeat center center / cover', position: 'relative' }}>
            {/* Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 1 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ color: '#fff', fontSize: '34px', fontWeight: 600 }}>Sponsors At SVBE '24</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '20px auto 0' }}>
                        Kudos to our SVBE sponsors, who are making it possible for cutting-edge solutions to come to life at this event.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', marginBottom: '30px' }}>
                    {/* Platinum */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                            <img src="/assets/platinum-icon.png" style={{ height: '30px' }} />
                            <h3 style={{ color: '#fff', fontSize: '20px' }}>Platinum <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Sponsor</span></h3>
                        </div>
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                            <img src="/assets/platinum-sponsor-gtpl.png" style={{ maxWidth: '100%', height: '50px', objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* Gold */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                            <img src="/assets/gold-icon.png" style={{ height: '30px' }} />
                            <h3 style={{ color: '#fff', fontSize: '20px' }}>Gold <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Sponsor</span></h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                            {['gold-sponsor-elsner.png', 'gold-sponsor-zero.png', 'gold-sponsor-factohr.png', 'gold-sponsor-razorpay.png'].map((img, i) => (
                                <div key={i} style={{ background: '#fff', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={`/assets/${img}`} style={{ maxWidth: '100%', height: '40px', objectFit: 'contain' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Silver */}
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <img src="/assets/silver-icon.png" style={{ height: '30px' }} />
                        <h3 style={{ color: '#fff', fontSize: '20px' }}>Silver <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Sponsors</span></h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
                        {['silver-sponsor-bizcompass.png', 'silver-sponsor-biztech.png', 'silver-sponsor-miracle.png', 'silver-sponsor-veloxhire.png', 'silver-sponsor-techify.png', 'silver-sponsor-zealousweb.png'].map((img, i) => (
                            <div key={i} style={{ background: '#fff', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={`/assets/${img}`} style={{ maxWidth: '100%', height: '35px', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    div[style*="gridTemplateColumns: 1fr 2fr"] { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Sponsors;
