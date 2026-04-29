import { useState } from 'react';
import './JoinModal.css';

interface JoinModalProps {
  onClose: () => void;
}

const JoinModal = ({ onClose }: JoinModalProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', area: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
    setTimeout(() => onClose(), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose} id="join-modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} id="join-modal">
        <button className="modal-close" onClick={onClose} id="join-modal-close">&times;</button>

        <div className="modal-header">
          <div className="modal-icon">✊</div>
          <h2>Join the Movement</h2>
          <p className="modal-subtitle-ta">இயக்கத்தில் இணையுங்கள்</p>
          <p>Be a part of the change. Register as a volunteer today.</p>
        </div>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✅</div>
            <h3>Welcome to the Movement!</h3>
            <p>Thank you for joining us. Together we build a better future!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name / முழு பெயர்"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                id="join-name"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number / தொலைபேசி"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                id="join-phone"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address / மின்னஞ்சல்"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="join-email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Area / District / மாவட்டம்"
                required
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                id="join-area"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg modal-submit" id="join-submit">
              Join Now — இணையுங்கள்
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
