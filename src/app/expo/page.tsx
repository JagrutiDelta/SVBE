"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Events from '@/components/Events';
import IndustrySolutions from '@/components/IndustrySolutions';

const ExpoPage = () => {
    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <Events />
                <IndustrySolutions />
            </div>
            <Footer />
        </main>
    );
};

export default ExpoPage;
