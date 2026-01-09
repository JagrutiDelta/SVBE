
"use client";
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationPass from '@/components/RegistrationPass';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import confetti from 'canvas-confetti';
import { Download, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        attendees: '1'
    });
    const [submitted, setSubmitted] = useState(false);
    const [bookingRef, setBookingRef] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [isSimulated, setIsSimulated] = useState(false);

    useEffect(() => {
        if (submitted && emailStatus === 'idle') {
            // Wait for DOM render
            const timer = setTimeout(() => {
                handleSendEmail(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Generate a random booking reference
        const ref = 'EXPO' + Math.random().toString(36).substring(2, 8).toUpperCase();

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, bookingRef: ref })
            });

            if (!res.ok) {
                const err = await res.json();
                console.error('Booking failed:', err);
                throw new Error('Failed to save booking');
            }

            setBookingRef(ref);
            setSubmitted(true);

            // Celebrate!
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#800000', '#000000', '#ffd700']
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong causing the booking to fail. Please try again.');
        }
    };

    const handleDownload = async () => {
        const node = document.getElementById('registration-pass');
        if (!node) return;

        try {
            setIsDownloading(true);
            const dataUrl = await toPng(node, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: '#1a1a1a'
            });
            download(dataUrl, `Expo_Pass_${bookingRef}.png`);
        } catch (error) {
            console.error('Error downloading pass:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    const handleSendEmail = async (isAuto = false) => {
        const node = document.getElementById('registration-pass');
        if (!node) return;

        try {
            setIsSendingEmail(true);
            setEmailStatus('sending');
            const passImage = await toPng(node, {
                quality: 0.8,
                pixelRatio: 1.5,
                backgroundColor: '#1a1a1a'
            });

            const response = await fetch('/api/send-pass', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name,
                    bookingRef,
                    passImage
                }),
            });

            if (response.ok) {
                setEmailStatus('sent');
                const result = await response.json();

                if (result.isSimulated) {
                    setIsSimulated(true);
                } else {
                    if (!isAuto) alert('Success! Your pass has been sent to ' + formData.email);
                }
            } else {
                setEmailStatus('error');
                let errorMessage = 'Failed to send email.';
                try {
                    const err = await response.json();
                    console.error('Email error:', err);
                    if (err.message && err.message.includes('only send testing emails to your own email address')) {
                        errorMessage = 'RESEND FREE TIER LIMITATION:\nYou can only send emails to the address you signed up with.\n\nPlease register using your verified Resend email address.';
                    } else if (err.error && typeof err.error === 'object') {
                        errorMessage = JSON.stringify(err.error);
                    } else if (err.error) {
                        errorMessage = err.error;
                    } else if (err.message) {
                        errorMessage = err.message;
                    }
                } catch (e) {
                    console.error('Failed to parse error response', e);
                }

                if (errorMessage.includes('Resend API key') || response.status === 500) {
                    alert('Email service configuration failed. Please download your pass instead.');
                } else if (errorMessage.includes('RESEND FREE TIER')) {
                    alert(errorMessage);
                } else {
                    alert('Could not send email: ' + errorMessage);
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setEmailStatus('error');
            alert('Something went wrong while creating/sending the pass. Please try downloading it.');
        } finally {
            setIsSendingEmail(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Header />

            <section style={{ paddingTop: '150px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: submitted ? '800px' : '600px' }}>
                    <div style={{
                        background: '#fff',
                        padding: '40px',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(128,0,0,0.1)',
                        transition: 'all 0.5s ease'
                    }}>
                        {!submitted ? (
                            <>
                                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                    <h1 style={{ fontSize: '32px', color: 'var(--secondary)', marginBottom: '10px', fontWeight: 800 }}>Secure Your Entry</h1>
                                    <p style={{ color: '#666' }}>Shree Vishwakarma Business Expo 2026</p>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1.5px solid #eee', fontSize: '16px' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1.5px solid #eee', fontSize: '16px' }}
                                        />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91"
                                                style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1.5px solid #eee', fontSize: '16px' }}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Attendees</label>
                                            <select
                                                name="attendees"
                                                value={formData.attendees}
                                                onChange={handleChange}
                                                style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1.5px solid #eee', fontSize: '16px', background: '#fff' }}
                                            >
                                                <option value="1">1 Person</option>
                                                <option value="2">2 People</option>
                                                <option value="3">3 People</option>
                                                <option value="4+">4+ People</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Business / Profession</label>
                                        <input
                                            type="text"
                                            name="business"
                                            value={formData.business}
                                            onChange={handleChange}
                                            placeholder="e.g. IT, Manufacturing, Pharma"
                                            style={{ width: '100%', padding: '12px 15px', borderRadius: '12px', border: '1.5px solid #eee', fontSize: '16px' }}
                                        />
                                    </div>

                                    <div style={{ marginTop: '10px' }}>
                                        <button
                                            type="submit"
                                            className="theme-btn"
                                            style={{ width: '100%', padding: '15px', fontSize: '18px', fontWeight: 700, borderRadius: '12px' }}
                                        >
                                            Generate My Pass
                                        </button>
                                    </div>

                                    <p style={{ textAlign: 'center', fontSize: '12px', color: '#999' }}>
                                        By booking, you agree to our Terms and Conditions. Entry is free for community members.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '30px' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: '#ecfdf5', borderRadius: '50%', marginBottom: '15px' }}>
                                        <CheckCircle2 color="#059669" size={32} />
                                    </div>
                                    <h2 style={{ fontSize: '28px', color: 'var(--secondary)', marginBottom: '5px', fontWeight: 800 }}>Registration Complete!</h2>
                                    <p style={{ color: '#666' }}>Your exclusive event pass is ready.</p>

                                    {isSimulated && (
                                        <div style={{
                                            background: '#fff7ed',
                                            border: '1px solid #fed7aa',
                                            color: '#c2410c',
                                            padding: '15px',
                                            borderRadius: '8px',
                                            marginTop: '20px',
                                            marginBottom: '-10px',
                                            textAlign: 'center',
                                            fontSize: '14px'
                                        }}>
                                            <strong>⚠️ Test Mode Active</strong><br />
                                            Email delivery was simulated. <br />
                                            <span style={{ fontSize: '12px', opacity: 0.8 }}>(Configure RESEND_API_KEY in .env.local to send real emails)</span>
                                        </div>
                                    )}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                                    <div>
                                        <RegistrationPass data={{ ...formData, bookingRef }} />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '250px' }}>
                                        <button
                                            onClick={handleDownload}
                                            disabled={isDownloading}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px',
                                                background: 'var(--secondary)',
                                                color: 'white',
                                                borderRadius: '12px',
                                                border: 'none',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                width: '100%',
                                                transition: 'opacity 0.2s'
                                            }}
                                        >
                                            {isDownloading ? 'Downloading...' : <><Download size={18} /> Download Pass</>}
                                        </button>

                                        <button
                                            onClick={() => handleSendEmail(false)}
                                            disabled={emailStatus === 'sending' || emailStatus === 'sent'}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px',
                                                background: emailStatus === 'sent' ? '#dcfce7' : '#f3f4f6',
                                                color: emailStatus === 'sent' ? '#166534' : '#374151',
                                                borderRadius: '12px',
                                                border: emailStatus === 'sent' ? '1px solid #bbf7d0' : 'none',
                                                fontWeight: 600,
                                                cursor: emailStatus === 'sent' ? 'default' : 'pointer',
                                                width: '100%',
                                                transition: 'background 0.2s'
                                            }}
                                        >
                                            {emailStatus === 'sending' ? (
                                                'Sending Invite...'
                                            ) : emailStatus === 'sent' ? (
                                                <><CheckCircle2 size={18} /> Invite Sent!</>
                                            ) : (
                                                <><Mail size={18} /> {emailStatus === 'error' ? 'Retry Email' : 'Send to Email'}</>
                                            )}
                                        </button>

                                        <button
                                            onClick={() => window.location.href = '/'}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                padding: '14px',
                                                background: 'transparent',
                                                color: '#666',
                                                borderRadius: '12px',
                                                border: '1px solid #ddd',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                width: '100%',
                                                marginTop: '10px'
                                            }}
                                        >
                                            <ArrowLeft size={18} /> Return Home
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BookingPage;
