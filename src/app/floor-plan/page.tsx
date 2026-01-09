"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HallPlan from '@/components/HallPlan';

const FloorPlanPage = () => {
    return (
        <main style={{ minHeight: '100vh', background: '#F8FAFC' }}>
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <HallPlan />
            </div>
            <Footer />
        </main>
    );
};

export default FloorPlanPage;
