import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import AtalBridge from "@/components/AtalBridge";
import Events from "@/components/Events";
import IndustrySolutions from "@/components/IndustrySolutions";
import Sponsors from "@/components/Sponsors";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Stats />
            <AtalBridge />
            <Events />
            <IndustrySolutions />

            {/* Black Vortex CTA Section as seen in screenshot */}
            <section style={{ backgroundColor: '#000', color: '#fff', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ fontSize: '34px', color: '#fff', marginBottom: '20px' }}>Digital Transformation For Your Business</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                                Harness the power of cutting-edge technology to revolutionize your operations and drive unprecedented growth in the digital era.
                            </p>
                            <button className="theme-btn">Get Started Now</button>
                        </div>
                        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
                            <img src="/assets/digital-transformation-img.png" alt="Transformation" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 0 50px rgba(128, 0, 0, 0.4)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <Sponsors />
            <OurTeam />
            <Footer />
        </main>
    );
}
