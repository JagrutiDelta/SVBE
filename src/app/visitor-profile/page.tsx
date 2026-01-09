"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const VisitorProfile = () => {
    const profiles = [
        {
            title: "Pharma Manufacturing Leaders",
            icon: "🧪",
            who: [
                "Owners and promoters of pharmaceutical manufacturing units",
                "Key decision-makers for Capacity expansion, Technology and machinery upgrades, Contract manufacturing partnerships",
            ],
            value: "Direct access to serious buyers and strategic partners.",
        },
        {
            title: "Machine & Equipment Manufacturing Owners",
            icon: "🏭",
            who: [
                "Machinery manufacturers and industrial equipment suppliers",
                "Experts in automation, engineering, and fabrication",
            ],
            value: "Ideal for B2B sales, sourcing, and technical collaborations.",
        },
        {
            title: "Business Owners & Industrialists",
            icon: "💼",
            who: [
                "Established entrepreneurs from manufacturing, trading, and service sectors",
                "Decision-makers with strong purchasing power",
            ],
            value: "High-quality leads and long-term business relationships.",
        },
        {
            title: "Innovators & Inventors",
            icon: "💡",
            who: [
                "Product innovators and technology developers",
                "Individuals working on patents, prototypes, and new industrial solutions",
            ],
            value: "Opportunity for co-creation, licensing, and innovation partnerships.",
        },
        {
            title: "Young Startup Entrepreneurs",
            icon: "🚀",
            who: [
                "Startup founders and emerging entrepreneurs",
                "Actively looking for mentorship, funding, and market access",
            ],
            value: "Early access to future market leaders and disruptive ideas.",
        },
        {
            title: "Government Representatives",
            icon: "🏛️",
            who: [
                "Officials from Industry & Commerce departments, MSME & Startup initiatives, Skill development bodies",
                "Representatives involved in Policy implementation, Subsidy and incentive schemes",
            ],
            value: "Direct visibility with policy makers and insight into government schemes and support programs.",
        },
        {
            title: "Political Leaders & Public Representatives",
            icon: "🗳️",
            who: [
                "Elected representatives and political leaders",
                "Leaders supporting Industrial growth, Employment generation, Entrepreneurship development",
            ],
            value: "Increased credibility, networking with leadership, and enhanced brand trust.",
        },
        {
            title: "Social Activists & Community Leaders",
            icon: "🌱",
            who: [
                "Leaders working in Education, Skill development, Rural and industrial upliftment",
                "Representatives of social and business associations",
            ],
            value: "Strong community connect and opportunities for CSR and social impact initiatives.",
        },
        {
            title: "Business Influencers & Opinion Leaders",
            icon: "📣",
            who: [
                "Business influencers, Industry speakers and thought leaders",
                "Digital creators focused on Manufacturing, Entrepreneurship, Innovation and startups",
            ],
            value: "Brand amplification, digital visibility, and media reach beyond the Expo.",
        },
    ];

    return (
        <main>
            <Header />
            <section style={{ paddingTop: "140px", paddingBottom: "80px", background: "#f9f9f9" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h1
                            style={{
                                fontSize: "3rem",
                                fontWeight: "bold",
                                color: "var(--secondary)",
                                marginBottom: "20px",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                            }}
                        >
                            Visitor Profile
                        </h1>
                        <h2 style={{ fontSize: "24px", color: "#444", marginBottom: "20px", fontWeight: "600" }}>
                            Who Will You Meet at the Expo?
                        </h2>
                        <p
                            style={{
                                maxWidth: "900px",
                                margin: "0 auto",
                                fontSize: "18px",
                                lineHeight: "1.8",
                                color: "#666",
                            }}
                        >
                            The Shree Vishwakarma Business Expo is designed as a high-impact business and influence
                            platform, attracting not only industry leaders but also policy makers, social leaders,
                            and opinion shapers—creating a powerful ecosystem for growth, visibility, and collaboration.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: "30px",
                            marginBottom: "80px",
                        }}
                    >
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "#fff",
                                    borderRadius: "20px",
                                    padding: "30px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    border: "1px solid #eee",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                className="profile-card"
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                                    <div
                                        style={{
                                            fontSize: "40px",
                                            background: "#fff9f0",
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 5px 15px rgba(253, 185, 19, 0.2)",
                                        }}
                                    >
                                        {profile.icon}
                                    </div>
                                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#222", flex: 1 }}>
                                        {profile.title}
                                    </h3>
                                </div>

                                <div style={{ marginBottom: "20px", flex: 1 }}>
                                    <ul style={{ paddingLeft: "20px", color: "#555", lineHeight: "1.6" }}>
                                        {profile.who.map((item, i) => (
                                            <li key={i} style={{ marginBottom: "8px" }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div
                                    style={{
                                        background: "rgba(128, 0, 0, 0.05)",
                                        padding: "15px",
                                        borderRadius: "10px",
                                        borderLeft: "4px solid var(--secondary)",
                                    }}
                                >
                                    <p style={{ fontSize: "14px", fontWeight: "600", color: "var(--secondary)", margin: 0 }}>
                                        <span style={{ marginRight: "5px" }}>👉</span> Value for Exhibitors:
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#444", marginTop: "5px", lineHeight: "1.5" }}>
                                        {profile.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conclusion Section */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, var(--secondary) 0%, #500000 100%)",
                            borderRadius: "24px",
                            padding: "50px",
                            color: "#fff",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#fff" }}>
                                Why This Visitor Profile Matters to Exhibitors
                            </h2>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    gap: "20px",
                                    marginBottom: "40px",
                                }}
                            >
                                {[
                                    "Meet decision-makers & policy influencers",
                                    "Gain multi-level visibility",
                                    "Build trust & credibility",
                                    "Generate qualified leads",
                                    "Strengthen ecosystem positioning",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "rgba(255,255,255,0.15)",
                                            padding: "10px 20px",
                                            borderRadius: "30px",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                            backdropFilter: "blur(5px)",
                                        }}
                                    >
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>
                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "30px" }}>
                                <h3 style={{ fontSize: "22px", color: "var(--primary)", marginBottom: "10px" }}>
                                    ⭐ Visitor Quality Promise
                                </h3>
                                <p style={{ fontSize: "18px", opacity: 0.9 }}>
                                    This Expo ensures a curated, high-value visitor experience focused on real business outcomes,
                                    policy connect, and long-term growth.
                                </p>
                            </div>
                        </div>
                        {/* Simple decoration */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-50px",
                                right: "-50px",
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.05)",
                            }}
                        ></div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-50px",
                                left: "-50px",
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.05)",
                            }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* Homepage Highlight Style Injection for Hover Effects */}
            <style jsx>{`
        .profile-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
      `}</style>

            <Footer />
        </main>
    );
};

export default VisitorProfile;
