"use client";

const About = () => {


    return (
        <section style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 500px', paddingRight: '10%' }}>
                        <h1 className="section-title">Shree Vishwakarma Business Expo 2026</h1>
                        <p style={{ fontSize: '18px', color: 'var(--secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                            A two-day mega business exhibition featuring 119+ stalls by Mevada community businesses across Pharma Machinery, Textile, Construction, IT, Architecture, Furniture, Consulting, and more.
                        </p>
                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Showcasing Strength, Diversity, and Innovation
                        </p>
                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                            Shree Vishwakarma Business Expo 2026 is a landmark two-day business exhibition organized to showcase the strength, diversity, and innovation of businesses owned by members of the Mevada community. The expo aims to provide a powerful platform for networking, business growth, brand visibility, and collaboration across industries.
                            <br /><br />
                            The Expo is open to all visitors and includes business networking zones, seminars, food stalls, and cultural programs—creating a powerful platform for business growth, collaboration, and visibility.
                        </p>


                    </div>

                    <div style={{ flex: '1 1 400px', textAlign: 'center', position: 'relative', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Map Base */}
                        <img src="/assets/gujarat-map.gif" alt="Gujarat Map" style={{ width: '70%', maxWidth: '400px', opacity: 1 }} />

                        {/* Floating Expo Images */}
                        <div className="map-float-img img-1">
                            <img src="/assets/Expo images/1.jpeg" alt="Expo Highlight 1" />
                        </div>
                        <div className="map-float-img img-2">
                            <img src="/assets/Expo images/3.jpeg" alt="Expo Highlight 2" />
                        </div>
                        <div className="map-float-img img-3">
                            <img src="/assets/Expo images/5.jpeg" alt="Expo Highlight 3" />
                        </div>
                        <div className="map-float-img img-4">
                            <img src="/assets/Expo images/2.jpeg" alt="Expo Highlight 4" />
                        </div>

                        {/* Bottom Row */}
                        <div className="map-float-img img-5">
                            <img src="/assets/Expo images/4.jpeg" alt="Expo Highlight 5" />
                        </div>
                        <div className="map-float-img img-6">
                            <img src="/assets/Expo images/6.jpeg" alt="Expo Highlight 6" />
                        </div>
                        <div className="map-float-img img-7">
                            <img src="/assets/Expo images/7.jpeg" alt="Expo Highlight 7" />
                        </div>
                        <div className="map-float-img img-8">
                            <img src="/assets/Expo images/8.jpeg" alt="Expo Highlight 8" />
                        </div>
                        <div className="map-float-img img-9">
                            <img src="/assets/Expo images/9.jpeg" alt="Expo Highlight 9" />
                        </div>

                        <style jsx>{`
                            .map-float-img {
                                position: absolute;
                                width: 100px;
                                height: 70px;
                                border-radius: 12px;
                                overflow: hidden;
                                border: 3px solid #fff;
                                box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                                z-index: 2;
                                cursor: pointer;
                                background: #fff;
                                animation: float 6s ease-in-out infinite;
                            }
                            
                            .map-float-img img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                transition: transform 0.5s ease;
                            }

                            /* Animations */
                            @keyframes float {
                                0%, 100% { transform: translateY(0); }
                                50% { transform: translateY(-10px); }
                            }

                            /* Top Row (Symmetrical Arc) */
                            .img-1 { top: -5%; left: 0%; animation-delay: 0s; }
                            .img-2 { top: -12%; left: 24%; animation-delay: 1s; } 
                            .img-3 { top: -12%; right: 24%; animation-delay: 2s; }
                            .img-4 { top: -5%; right: 0%; animation-delay: 3s; }

                            /* Bottom Row (Symmetrical Arc) */
                            .img-5 { bottom: -5%; left: -2%; animation-delay: 0.5s; }
                            .img-6 { bottom: -12%; left: 20%; animation-delay: 1.5s; z-index: 3; }
                            .img-7 { bottom: -15%; left: calc(50% - 50px); animation-delay: 2.5s; }
                            .img-8 { bottom: -12%; right: 20%; animation-delay: 1.2s; }
                            .img-9 { bottom: -5%; right: -2%; animation-delay: 3.2s; }


                            /* Hover Effects */
                            .map-float-img:hover {
                                width: 220px; 
                                height: 160px;
                                transform: scale(1.1) translateY(-15px);
                                z-index: 20;
                                box-shadow: 0 25px 50px rgba(0,0,0,0.3);
                                border-color: var(--secondary);
                                animation-play-state: paused;
                            }
                            
                            .map-float-img:hover img {
                                transform: scale(1.1);
                            }
                        `}</style>
                    </div>
                </div>
            </div>

            {/* Ribbon Background Effect could go here */}
        </section>
    );
};

export default About;
