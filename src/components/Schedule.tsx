"use client";
import React, { useState } from 'react';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState(1);

    const scheduleData = {
        1: [
            { time: "09:00 AM", title: "Inauguration Ceremony", desc: "Grand opening by Chief Guest & Community Leaders" },
            { time: "10:30 AM", title: "Expo Floor Opens", desc: "Visit 123+ Stalls across various industries" },
            { time: "01:00 PM", title: "Networking Lunch", desc: "Connect with industry peers over lunch" },
            { time: "03:00 PM", title: "Panel Discussion: Future of Manufacturing", desc: "Insights from industry experts" },
            { time: "06:00 PM", title: "Cultural Program", desc: "Evening performance by community talent" }
        ],
        2: [
            { time: "10:00 AM", title: "Expo Opens", desc: "Day 2 of business networking and exhibits" },
            { time: "11:30 AM", title: "Startup Pitch Session", desc: "Innovative ideas from young entrepreneurs" },
            { time: "02:00 PM", title: "B2B Meetings", desc: "Structured networking sessions" },
            { time: "04:30 PM", title: "Award Ceremony", desc: "Recognizing best stalls and innovative businesses" },
            { time: "06:00 PM", title: "Closing Remarks", desc: "Vote of thanks and future roadmap" }
        ]
    };

    return (
        <section className="schedule-section" style={{ background: '#f5f5f5', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title">Event Schedule</h2>
                    <p style={{ color: '#666', fontSize: '18px' }}>
                        Two days packed with business, learning, and celebration.
                    </p>
                </div>

                {/* Day Toggles */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                    {[1, 2].map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            style={{
                                padding: '15px 40px',
                                fontSize: '18px',
                                borderRadius: '30px',
                                border: 'none',
                                background: activeDay === day ? 'var(--primary)' : '#e0e0e0',
                                color: activeDay === day ? '#fff' : '#666',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeDay === day ? '0 10px 20px rgba(253, 185, 19, 0.3)' : 'none'
                            }}
                        >
                            Day {day} (1{day}th April)
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: '#ddd',
                        transform: 'translateX(-50%)',
                        display: 'none', // Hidden on mobile, shown on desktop via media query logic typically, but inline styles are tricky. Let's do a simple centered layout for now.
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {scheduleData[activeDay as 1 | 2]?.map((item, index) => (
                            // @ts-ignore
                            <div key={index} className="timeline-item" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px',
                                background: '#fff',
                                padding: '25px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                borderLeft: `5px solid ${activeDay === 1 ? 'var(--secondary)' : 'var(--primary)'}`
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    minWidth: '100px',
                                    textAlign: 'center',
                                    color: 'var(--secondary)',
                                    fontWeight: 'bold',
                                    fontSize: '18px'
                                }}>
                                    {item.time}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: '0 0 5px', fontSize: '20px' }}>{item.title}</h3>
                                    <p style={{ margin: 0, color: '#666' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
