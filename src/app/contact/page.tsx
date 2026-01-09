"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            // Using FormSubmit.co's direct submission
            const formSubmitData = new FormData();
            formSubmitData.append('name', formData.name);
            formSubmitData.append('email', formData.email);
            formSubmitData.append('message', formData.message);
            formSubmitData.append('_subject', `New Contact Form - SVBE 2026 - ${formData.name}`);
            formSubmitData.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/uidesign.delta@gmail.com', {
                method: 'POST',
                body: formSubmitData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Header />
            <div style={{ paddingTop: '150px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h1 className="section-title">Get in Touch</h1>
                        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                            Have questions about the Expo? Reach out to us directly.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                        {/* Contact Info */}
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '24px', marginBottom: '30px', color: 'var(--secondary)' }}>Contact Information</h3>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Venue Location</h4>
                                    <p style={{ color: '#666' }}>Helipad Exhibition Centre,<br />Gandhinagar, Gujarat</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                    <Mail />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Email Us</h4>
                                    <p style={{ color: '#666' }}>contact@svbe2026.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                    <Phone />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Call Us</h4>
                                    <p style={{ color: '#666' }}>+91 98765 43210</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            {/* Success Message */}
                            {success && (
                                <div style={{
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    color: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    animation: 'slideIn 0.3s ease-out'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    <span style={{ fontWeight: 600 }}>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div style={{
                                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                    color: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    marginBottom: '20px',
                                    animation: 'slideIn 0.3s ease-out'
                                }}>
                                    <span style={{ fontWeight: 600 }}>{error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        disabled={loading}
                                        style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        disabled={loading}
                                        style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type your message here..."
                                        rows={4}
                                        required
                                        disabled={loading}
                                        style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none', resize: 'vertical' }}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="theme-btn"
                                    disabled={loading}
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        opacity: loading ? 0.7 : 1,
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <div style={{
                                                width: '18px',
                                                height: '18px',
                                                border: '2px solid #fff',
                                                borderTopColor: 'transparent',
                                                borderRadius: '50%',
                                                animation: 'spin 0.8s linear infinite'
                                            }}></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            <style jsx>{`
                                @keyframes slideIn {
                                    from {
                                        opacity: 0;
                                        transform: translateY(-10px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateY(0);
                                    }
                                }

                                @keyframes spin {
                                    to {
                                        transform: rotate(360deg);
                                    }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ContactPage;
