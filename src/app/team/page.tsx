"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrganizerCommitteeStatic from '@/components/OrganizerCommitteeStatic';

export default function TeamPage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <OrganizerCommitteeStatic />
            </div>
            <Footer />
        </main>
    );
}
