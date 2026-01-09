"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';

export default function SponsorsPage() {
    return (
        <main style={{ background: 'var(--background)' }}>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <Sponsors />
            </div>
            <Footer />
        </main>
    );
}
