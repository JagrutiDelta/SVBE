import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import ExpoObjectives from "@/components/ExpoObjectives";
import About from "@/components/About";
import Stats from "@/components/Stats";
import AtalBridge from "@/components/AtalBridge";
import Events from "@/components/Events";
import StallVisuals from "@/components/StallVisuals";
import IndustrySolutions from "@/components/IndustrySolutions";
import Sponsors from "@/components/Sponsors";
import Schedule from "@/components/Schedule";
import WhyVisit from "@/components/WhyVisit";
import OrganizerCommittee from "@/components/OrganizerCommittee";
import MevadaSutharSamaj from "@/components/MevadaSutharSamaj";
import Footer from "@/components/Footer";

export default function Home() {
    // SVBE 2026 Home Page
    return (
        <main>
            <Header />
            <Hero />
            <Why />
            <ExpoObjectives />
            <About />
            <Events />
            <StallVisuals />
            <IndustrySolutions />
            <WhyVisit />
            <OrganizerCommittee />
            <MevadaSutharSamaj />
            <AtalBridge />
            <Stats />
            <Footer />
        </main>
    );
}
