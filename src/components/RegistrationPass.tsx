
"use client";
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Calendar, MapPin, Ticket, User, Briefcase } from 'lucide-react';

interface PassData {
    name: string;
    email: string;
    phone: string;
    business: string;
    attendees: string;
    bookingRef: string;
}

const RegistrationPass = ({ data }: { data: PassData }) => {
    return (
        <div
            id="registration-pass"
            style={{
                width: '400px',
                background: '#1a1a1a',
                backgroundImage: `
                  radial-gradient(circle at 0% 0%, rgba(128, 0, 0, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.3) 0%, transparent 50%)
                `,
                borderRadius: '24px',
                overflow: 'hidden',
                color: 'white',
                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.6)',
                fontFamily: "'Outfit', 'Inter', sans-serif",
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                margin: '0 auto'
            }}
        >
            {/* Decorative Shine */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                zIndex: 2
            }} />

            {/* Header */}
            <div style={{
                padding: '30px 30px 25px',
                textAlign: 'center',
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.02)'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <img
                        src="/assets/svbe_logo_new.png"
                        alt="Logo"
                        style={{
                            height: '60px',
                            width: 'auto',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '5px'
                }}>
                    OFFICIAL ENTRY PASS
                </div>
                <h2 style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    background: 'linear-gradient(135deg, #fff 30%, #999 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2
                }}>
                    SHREE VISHWAKARMA<br />BUSINESS EXPO 2026
                </h2>
            </div>

            <div style={{ padding: '0 30px' }}>
                <div style={{ borderTop: '1px dashed rgba(255, 255, 255, 0.1)' }}></div>
            </div>

            {/* Main Content */}
            <div style={{ padding: '30px', position: 'relative' }}>
                <div style={{ marginBottom: '25px' }}>
                    <label style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', display: 'block', marginBottom: '6px', letterSpacing: '1px' }}>Primary Delegate</label>
                    <div style={{ fontSize: '26px', fontWeight: 700, color: '#fff' }}>{data.name}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px', marginBottom: '30px' }}>
                    <div>
                        <label style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', display: 'block', marginBottom: '6px', letterSpacing: '1px' }}>Organization</label>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#eee' }}>{data.business || 'Individual Professional'}</div>
                    </div>
                    <div>
                        <label style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', display: 'block', marginBottom: '6px', letterSpacing: '1px' }}>Admissions</label>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#eee' }}>{data.attendees} Person{parseInt(data.attendees) > 1 ? 's' : ''}</div>
                    </div>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '24px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                }}>
                        <div style={{
                        background: 'white',
                        padding: '10px',
                        borderRadius: '12px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                    }}>
                        <QRCodeSVG value={`https://www.svbe.com/verify/${data.bookingRef}`} size={85} level="H" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase', display: 'block', marginBottom: '6px', letterSpacing: '1px' }}>Reference ID</label>
                        <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'monospace', color: '#fff', letterSpacing: '1px' }}>
                            {data.bookingRef}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}></div>
                            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700 }}>VERIFIED PASS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Details Footer */}
            <div style={{
                padding: '20px 30px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#888'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={13} strokeWidth={2.5} /> JAN 2026
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} strokeWidth={2.5} /> GUJARAT, IND
                </div>
            </div>

            {/* Side Notch Cuts (Ticket style) */}
            <div style={{
                position: 'absolute',
                left: '-10px',
                top: '118px',
                width: '20px',
                height: '20px',
                background: '#fff',
                borderRadius: '50%',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                right: '-10px',
                top: '118px',
                width: '20px',
                height: '20px',
                background: '#fff',
                borderRadius: '50%',
                zIndex: 2
            }} />
        </div>
    );
};

export default RegistrationPass;
