import { useEffect } from 'react';
import './Lightbox.css';

interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose} id="lightbox">
      <button className="lightbox-close" onClick={onClose} id="lightbox-close">&times;</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || 'Gallery image'} />
      </div>
    </div>
  );
};

export default Lightbox;
