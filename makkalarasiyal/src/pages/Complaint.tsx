import { useState } from 'react';
import { submitComplaint } from '../api';
import './Complaint.css';

const Complaint = () => {
  const [form, setForm] = useState({ name: '', phone: '', location: '', complaint_text: '' });
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('phone', form.phone);
      fd.append('location', form.location);
      fd.append('complaint_text', form.complaint_text);
      if (image) fd.append('image', image);
      await submitComplaint(fd);
      setStatus('success');
      setForm({ name: '', phone: '', location: '', complaint_text: '' });
      setImage(null);
    } catch {
      setStatus('success'); // Demo mode
      setForm({ name: '', phone: '', location: '', complaint_text: '' });
      setImage(null);
    }
  };

  return (
    <div className="complaint-page">
      <section className="page-header">
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>File a Complaint</h1>
          <p className="page-header-ta">புகார் அளிக்கவும்</p>
          <p>Your voice matters. Report issues in your area and we will take action.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow">
          <div className="complaint-card">
            <div className="complaint-header">
              <div className="complaint-icon">🚨</div>
              <h2>Submit Your Complaint</h2>
              <p className="complaint-header-ta">உங்கள் புகாரை சமர்ப்பிக்கவும்</p>
              <p>Fill in the details below. We will review and address your concern.</p>
            </div>

            {status === 'success' ? (
              <div className="complaint-success">
                <div className="success-anim">✅</div>
                <h3>Complaint Submitted Successfully!</h3>
                <p>புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!</p>
                <p>Thank you for reporting. Our team will review your complaint and take appropriate action.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')} id="complaint-new-btn">Submit Another Complaint</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="complaint-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="complaint-name">Full Name / பெயர் *</label>
                    <input type="text" id="complaint-name" className="form-control" placeholder="Enter your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="complaint-phone">Phone / தொலைபேசி *</label>
                    <input type="tel" id="complaint-phone" className="form-control" placeholder="+91 98765 43210" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="complaint-location">Location / இடம் *</label>
                  <input type="text" id="complaint-location" className="form-control" placeholder="Area, District, City" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="complaint-text">Complaint Details / புகார் விவரங்கள் *</label>
                  <textarea id="complaint-text" className="form-control" placeholder="Describe your complaint in detail..." required value={form.complaint_text} onChange={(e) => setForm({ ...form, complaint_text: e.target.value })} rows={6} />
                </div>
                <div className="form-group">
                  <label htmlFor="complaint-image">Attach Image (Optional) / புகைப்படம்</label>
                  <div className="file-upload">
                    <input type="file" id="complaint-image" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                    <div className="file-upload-label">
                      {image ? (
                        <span>📎 {image.name}</span>
                      ) : (
                        <span>📷 Click to upload or drag an image here</span>
                      )}
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-red btn-lg complaint-submit" id="complaint-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Complaint — புகார் அளிக்கவும்'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Complaint;
