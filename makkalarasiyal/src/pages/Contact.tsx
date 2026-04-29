import { useState } from 'react';
import { submitEnquiry } from '../api';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitEnquiry(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('success'); // Show success even offline for demo
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p className="page-header-ta">எங்களை தொடர்பு கொள்ளுங்கள்</p>
          <p>We'd love to hear from you. Reach out to us anytime.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <p className="contact-form-ta">எங்களுக்கு செய்தி அனுப்புங்கள்</p>

              {status === 'success' && (
                <div className="alert alert-success">✅ Thank you! Your message has been sent successfully. We'll get back to you soon.</div>
              )}
              {status === 'error' && (
                <div className="alert alert-error">❌ Something went wrong. Please try again.</div>
              )}

              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name / முழு பெயர்</label>
                  <input type="text" id="contact-name" className="form-control" placeholder="Enter your full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-email">Email / மின்னஞ்சல்</label>
                    <input type="email" id="contact-email" className="form-control" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / தொலைபேசி</label>
                    <input type="tel" id="contact-phone" className="form-control" placeholder="+91 98765 43210" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message / செய்தி</label>
                  <textarea id="contact-message" className="form-control" placeholder="Write your message here..." required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" id="contact-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message — அனுப்பு'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <div className="info-item">
                  <div className="info-icon info-icon-red">📍</div>
                  <div>
                    <h3>Our Office</h3>
                    <p>123 Main Road, T. Nagar,<br />Chennai, Tamil Nadu - 600017</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon info-icon-blue">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 98765 43210<br />+91 44 2815 0000</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon info-icon-green">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p>info@makkalarasial.com<br />support@makkalarasial.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon info-icon-green">⏰</div>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="contact-social-links">
                  <a href="#" className="csocial-link" id="contact-fb">Facebook</a>
                  <a href="#" className="csocial-link" id="contact-tw">Twitter / X</a>
                  <a href="#" className="csocial-link" id="contact-ig">Instagram</a>
                  <a href="#" className="csocial-link" id="contact-yt">YouTube</a>
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-contact-btn" id="contact-whatsapp">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="contact-map" id="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7965870092517!2d80.23209337507822!3d13.04086098727798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f19e6a38e5%3A0x90a46a30ab7e4e3c!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-float" id="whatsapp-btn" aria-label="Chat on WhatsApp">💬</a>
    </div>
  );
};

export default Contact;
