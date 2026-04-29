import { useState, useEffect } from 'react';
import { getGalleryImages } from '../api';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image_path: string;
}

const categories = ['All', 'Campaign', 'Public Meeting', 'Event'];

const Gallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState('');

  useEffect(() => {
    getGalleryImages()
      .then((res) => setImages(res.data?.data || []))
      .catch(() => {
        // Placeholder gallery items
        setImages([
          { id: 1, title: 'Campaign Rally Chennai', category: 'Campaign', image_path: '/images/rally.jpg' },
          { id: 2, title: 'Public Meeting Madurai', category: 'Public Meeting', image_path: '/images/flag.jpg' },
          { id: 3, title: 'Youth Wing Event', category: 'Event', image_path: '/images/emblem.png' },
          { id: 4, title: 'District Conference', category: 'Campaign', image_path: '/images/rally.jpg' },
          { id: 5, title: 'Community Service', category: 'Event', image_path: '/images/flag.jpg' },
          { id: 6, title: 'State Conference', category: 'Public Meeting', image_path: '/images/emblem.png' },
        ]);
      });
  }, []);

  const filtered = activeCategory === 'All' ? images : images.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page">
      <section className="page-header">
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Gallery</h1>
          <p className="page-header-ta">கேலரி</p>
          <p>Moments from our campaigns, meetings, and community events.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="gallery-filters" id="gallery-filters">
            {categories.map(cat => (
              <button key={cat} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)} id={`filter-${cat.replace(/\s/g, '-').toLowerCase()}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {filtered.map(img => (
              <div key={img.id} className="gallery-item" onClick={() => setLightboxSrc(img.image_path)} id={`gallery-item-${img.id}`}>
                <img src={img.image_path} alt={img.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-cat">{img.category}</span>
                  <h3>{img.title}</h3>
                  <span className="gallery-zoom">🔍 View</span>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="gallery-empty">No images found in this category.</p>}
        </div>
      </section>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc('')} />}
    </div>
  );
};

export default Gallery;
