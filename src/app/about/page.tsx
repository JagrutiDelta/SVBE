"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import AtalBridge from '@/components/AtalBridge';

const AboutPage = () => {
    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <About />
                <AtalBridge />
            </div>
            <Footer />
        </main>
    );
};

export default AboutPage;
