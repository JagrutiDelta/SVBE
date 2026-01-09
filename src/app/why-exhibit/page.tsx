"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhyExhibit() {
    return (
        <main style={{ background: 'var(--background)' }}>
            <Header />
            <section className="container" style={{ paddingTop: '150px', minHeight: '60vh', textAlign: 'center' }}>
                <h1>Why Exhibit?</h1>
                <p style={{ marginTop: '20px', fontSize: '18px', color: '#666' }}>Content coming soon...</p>
            </section>
            <Footer />
        </main>
    );
}
