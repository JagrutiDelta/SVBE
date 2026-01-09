"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send } from 'lucide-react';

const InquiryPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend or API
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
            <Header />
            <div style={{ paddingTop: '150px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h1 className="section-title">Product/Stall Inquiry</h1>
                        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                            Interested in exhibiting or have specific product queries? Fill out the form below.
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        required
                                        style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    required
                                    style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Inquiry Type</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none', background: '#fff' }}
                                >
                                    <option value="Stall Booking">Stall Booking Error/Query</option>
                                    <option value="Product Details">Product Information</option>
                                    <option value="Sponsorship">Sponsorship</option>
                                    <option value="Visiting">Visitor Query</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your requirement..."
                                    rows={4}
                                    required
                                    style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none', resize: 'vertical' }}
                                ></textarea>
                            </div>
                            <button type="submit" className="theme-btn" style={{ width: '100%', padding: '15px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '16px', fontWeight: 600 }}>
                                <Send size={18} /> Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default InquiryPage;
