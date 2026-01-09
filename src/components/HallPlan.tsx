"use client";
import React from 'react';

const HallPlan = () => {
    // Stall Data Configuration
    // Ranges are inclusive.
    // Colors mapped from Image 1 legend + visual inspection:
    // Sapphire (Red): #FF0000 -> Modern: #EF4444
    // Diamond (Grey): #A0A0A0 -> Modern: #94A3B8
    // Platinum (Brown): #A0522D -> Modern: #B45309
    // Gold (Yellow): #FFD700 -> Modern: #F59E0B
    // Silver (Light Green/Yellow-ish): #ADFF2F -> Modern: #84CC16
    // Bronze (Pink): #FF69B4 -> Modern: #EC4899
    // Standard (Green): #32CD32 -> Modern: #22C55E

    const stallTypes = {
        sapphire: { color: "#EF4444", label: "Sapphire", price: "₹4,00,000" },
        diamond: { color: "#64748B", label: "Diamond", price: "₹4,50,000" },
        platinum: { color: "#D97706", label: "Platinum", price: "₹9,10,000" },
        gold: { color: "#F59E0B", label: "Gold", price: "₹7,70,000" },
        silver: { color: "#84CC16", label: "Silver", price: "₹1,08,000" },
        bronze: { color: "#EC4899", label: "Bronze", price: "₹7,70,000" },
        standard: { color: "#22C55E", label: "Standard", price: "₹7,35,000" },
    };

    // Helper to generate a range of stalls
    const range = (start: number, end: number, type: string) => {
        const stalls = [];
        const step = start < end ? 1 : -1;
        for (let i = start; i !== end + step; i += step) {
            stalls.push({ id: i, type });
        }
        return stalls;
    };

    // Construct Columns based on Image 1
    const columns = [
        // Column 1 (Left Wall): Top to Bottom is 19 down to 1
        [
            ...range(19, 15, 'standard'),
            ...range(14, 12, 'bronze'),
            ...range(11, 7, 'gold'),
            ...range(6, 4, 'platinum'),
            ...range(3, 1, 'diamond'),
        ],
        // Column 2 (Island 1 Left): Top to Bottom is 20 down to 39
        // Based on colors in image: 20-25 (Green), 26-29 (Red), 30-33 (Yellow), 34-35 (Yellow), 36-37 (Bronze? No looks like Orange/Platinum), 38-39 (Red)
        // Let's approximate visually:
        // 20-25: Standard
        // 26-29: Bronze (Pink) -- Wait, 26-29 in image 1 is PINK. Legend says Bronze.
        // 30-33: Gold (Yellow)
        // 34-37: Platinum (Brown) -- 34-35 Yellow? 36-37 Brown? Let's simplify: 30-35 Gold, 36-37 Platinum? 
        // Actually, let's map strictly to the visual blocks in the image 1 crop I can see.
        // 20-25: Green (Standard)
        // 26-29: Pink (Bronze)
        // 30-33: Yellow (Gold)
        // 34-37: Orange/Brown (Platinum)
        // 38-39: Red (Sapphire)
        [
            ...range(20, 25, 'standard'),
            ...range(26, 29, 'bronze'),
            ...range(30, 33, 'gold'),
            ...range(34, 37, 'platinum'),
            ...range(38, 39, 'sapphire'),
        ],
        // Column 3 (Island 1 Right): Top to Bottom 59 to 40
        [
            ...range(59, 54, 'standard'),
            ...range(53, 50, 'bronze'),
            ...range(49, 46, 'gold'),
            ...range(45, 42, 'platinum'),
            ...range(41, 40, 'sapphire'),
        ],
        // Column 4 (Island 2 Left): Top to Bottom 60 to 79
        [
            ...range(60, 65, 'standard'),
            ...range(66, 69, 'bronze'),
            ...range(70, 73, 'gold'),
            ...range(74, 77, 'platinum'),
            ...range(78, 79, 'sapphire'),
        ],
        // Column 5 (Island 2 Right): Top to Bottom 99 to 80
        [
            ...range(99, 94, 'standard'),
            ...range(93, 90, 'bronze'),
            ...range(89, 86, 'gold'),
            ...range(85, 82, 'platinum'),
            ...range(81, 80, 'sapphire'),
        ],
        // Column 6 (Right Wall): Top to Bottom 100 to 119
        [
            ...range(100, 104, 'standard'),
            ...range(105, 107, 'standard'), // 105 is green
            ...range(108, 109, 'bronze'), // 106-107 pink? 109 pink? 
            // Let's just mirror col 1 logic but reversed? No, colors are different.
            // 100-105: Green
            // 106-108: Pink
            // 109-112: Yellow
            // 113-116: Brown
            // 117-119: Grey
            ...range(105, 105, 'standard'),
            ...range(106, 108, 'bronze'),
            ...range(109, 112, 'gold'),
            ...range(113, 116, 'platinum'),
            ...range(117, 119, 'diamond'),
        ]
    ];

    return (
        <section className="hall-plan-section">
            <div className="container" style={{ maxWidth: '1400px' }}>
                <div className="plan-header">
                    <h2>Exhibition Hall Layout</h2>
                    <p>Navigate the floor plan to find your ideal stall location.</p>
                </div>

                <div className="hall-layout-wrapper">
                    {/* Hall Entrances/Exits Top */}
                    <div className="hall-boundary-top">
                        <div className="exit-marker">⚡ EMERGENCY EXIT</div>
                        <div className="exit-marker">⚡ EMERGENCY EXIT</div>
                    </div>

                    <div className="hall-grid">

                        {/* Left Wall Column */}
                        <div className="stall-column left-wall">
                            {columns[0].map((stall) => (
                                <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                            ))}
                        </div>

                        {/* Aisle 1 */}
                        <div className="aisle">
                            <span className="aisle-label">AISLE A</span>
                        </div>

                        {/* Island 1 */}
                        <div className="stall-island">
                            <div className="stall-column">
                                {columns[1].map((stall) => (
                                    <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                                ))}
                            </div>
                            <div className="stall-divider"></div>
                            <div className="stall-column">
                                {columns[2].map((stall) => (
                                    <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                                ))}
                            </div>
                        </div>

                        {/* main Aisle */}
                        <div className="aisle main-aisle">
                            <span className="aisle-label">MAIN WALKWAY</span>
                            <div className="direction-arrow">↑</div>
                        </div>

                        {/* Island 2 */}
                        <div className="stall-island">
                            <div className="stall-column">
                                {columns[3].map((stall) => (
                                    <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                                ))}
                            </div>
                            <div className="stall-divider"></div>
                            <div className="stall-column">
                                {columns[4].map((stall) => (
                                    <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                                ))}
                            </div>
                        </div>

                        {/* Aisle 3 */}
                        <div className="aisle">
                            <span className="aisle-label">AISLE B</span>
                        </div>

                        {/* Right Wall Column */}
                        <div className="stall-column right-wall">
                            {columns[5].map((stall) => (
                                <Stall key={stall.id} data={stall} config={stallTypes[stall.type as keyof typeof stallTypes]} />
                            ))}
                        </div>
                    </div>

                    {/* Hall Entrances/Exits Bottom */}
                    <div className="hall-boundary-bottom">
                        <div className="entry-gate">
                            <span>⬇ ENTRY</span>
                        </div>
                        <div className="exit-gate">
                            <span>⬇ EXIT</span>
                        </div>
                    </div>

                </div>

                {/* Legend */}
                <div className="hall-legend">
                    <h3>Stall Categories & Pricing</h3>
                    <div className="legend-grid">
                        {Object.entries(stallTypes).map(([key, info]) => (
                            <div key={key} className="legend-item">
                                <div className="legend-color" style={{ background: info.color }}></div>
                                <div className="legend-info">
                                    <span className="legend-label">{info.label}</span>
                                    <span className="legend-price">{info.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hall-plan-section {
                    background: #F8FAFC;
                    padding: 80px 0;
                    font-family: 'Inter', sans-serif;
                }

                .plan-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .plan-header h2 {
                    font-size: 36px;
                    font-weight: 800;
                    color: #0F172A;
                    margin-bottom: 10px;
                }
                .plan-header p {
                    color: #64748B;
                    font-size: 18px;
                }

                .hall-layout-wrapper {
                    background: #fff;
                    border: 4px solid #334155;
                    border-radius: 8px;
                    padding: 40px;
                    position: relative;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    max-width: 1200px;
                    margin: 0 auto 60px;
                }

                .hall-boundary-top, .hall-boundary-bottom {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 40px;
                    font-weight: 700;
                    color: #334155;
                }

                .exit-marker {
                    border: 2px solid #EF4444;
                    color: #EF4444;
                    padding: 5px 15px;
                    border-radius: 4px;
                    font-size: 12px;
                    letter-spacing: 1px;
                }

                .entry-gate, .exit-gate {
                    background: #0F172A;
                    color: #fff;
                    padding: 10px 30px;
                    border-radius: 0 0 8px 8px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .hall-grid {
                    display: grid;
                    grid-template-columns: 80px 40px 160px 60px 160px 40px 80px;
                    gap: 10px;
                    justify-content: center;
                    margin: 40px 0;
                }

                .stall-column {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .stall-island {
                    display: flex;
                    gap: 2px;
                    background: #F1F5F9;
                    padding: 5px;
                    border-radius: 4px;
                }
                
                .stall-divider {
                    width: 2px;
                    background: #E2E8F0;
                }

                .aisle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #CBD5E1;
                    font-weight: 700;
                    letter-spacing: 4px;
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-size: 12px;
                }
                
                .main-aisle {
                    font-size: 14px;
                    color: #94A3B8;
                }

                .hall-legend {
                    background: #fff;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    border: 1px solid #E2E8F0;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .hall-legend h3 {
                    margin-bottom: 20px;
                    color: #0F172A;
                }

                .legend-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 20px;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px;
                    background: #F8FAFC;
                    border-radius: 8px;
                }

                .legend-color {
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    flex-shrink: 0;
                }

                .legend-info {
                    display: flex;
                    flex-direction: column;
                }

                .legend-label {
                    font-weight: 600;
                    font-size: 14px;
                    color: #334155;
                }

                .legend-price {
                    font-size: 12px;
                    color: #64748B;
                }

                @media (max-width: 1024px) {
                    .hall-grid {
                        grid-template-columns: repeat(2, 1fr); /* Break grid on tablet */
                        gap: 40px;
                    }
                    .stall-column {
                        width: 100%;
                    }
                    .aisle { display: none; }
                }

                @media (max-width: 640px) {
                    .hall-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

const Stall = ({ data, config }: { data: { id: number, type: string }, config: any }) => {
    return (
        <div className="stall-unit" title={`${config.label} - Stall ${data.id}`}>
            <span className="stall-id">{data.id}</span>
            <style jsx>{`
                .stall-unit {
                    width: 40px; 
                    height: 30px;
                    background-color: ${config.color};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: transform 0.2s;
                    border: 1px solid rgba(0,0,0,0.1);
                }
                .stall-unit:hover {
                    transform: scale(1.1);
                    z-index: 10;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
                @media (max-width: 1024px) {
                     .stall-unit {
                        width: 100%;
                        height: 40px;
                     }
                }
            `}</style>
        </div>
    );
}

export default HallPlan;
