"use client";

const Footer = () => {
    return (
        <footer style={{ background: '#000', color: '#fff', padding: '60px 0 30px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>SVBE 2026</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.8' }}>
                            Landmark two-day business exhibition showcasing Mevada community businesses across various industries.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '18px' }}>Sections</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Business Expo 2026</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="https://svkbe2026.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Stall Layout and Booking</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ3a4kR1EuqYMvIYknL9KvKyyhFZEUIMs1cwZlVgeCQurV0g/viewform?usp=preview" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Stall Inquiry</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '18px' }}>Contact Details</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '10px' }}>
                            📍 Helipad Exhibition Centre, Gandhinagar, Gujarat
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '10px' }}>
                            📧 contact@svbe2026.com
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                            📅 11th & 12th April, 2026
                        </p>
                    </div>

                    {/* Simple Map Placeholder */}
                    <div style={{ borderRadius: '15px', overflow: 'hidden', height: '150px', background: '#111' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117420.53513153006!2d72.49838325819724!3d23.119352784590557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0072faf80b%3A0x9745a1972ef5c9f1!2sHelipad%20exhibition%20centre!5e0!3m2!1sen!2sin!4v1767006788492!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                        © 2026 SHREE VISHWAKARMA BUSINESS EXPO. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
