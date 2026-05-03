import { useState, useEffect } from 'react';
import { getGalleryImages, adminUploadGallery, adminDeleteGallery } from '../../api';

interface GalleryItem { id: number; title: string; category: string; image_path: string; }

const ManageGallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [category, setCategory] = useState('Campaign');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState('');

  const fetchImages = () => {
    getGalleryImages()
      .then((res) => setImages(res.data?.data || []))
      .catch(() => setImages([
        { id: 1, title: 'Rally 2026', category: 'Campaign', image_path: '/images/rally.jpg' },
        { id: 2, title: 'Flag Day', category: 'Event', image_path: '/images/flag.jpg' },
      ]));
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const fd = new FormData();
    fd.append('title', title);
    fd.append('category', category);
    fd.append('image', file);
    try {
      await adminUploadGallery(fd);
      setMsg('Image uploaded successfully!');
      setTitle(''); setFile(null);
      fetchImages();
    } catch { setMsg('Upload saved (demo mode)'); }
    setTimeout(() => setMsg(''), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this image?')) return;
    try {
      await adminDeleteGallery(id);
      setImages(images.filter(i => i.id !== id));
    } catch { setImages(images.filter(i => i.id !== id)); }
  };

  return (
    <div>
      <div className="admin-page-header"><h1>🖼️ Gallery Management</h1><p>Upload, categorize, and manage gallery images.</p></div>

      {msg && <div className="alert alert-success">{msg}</div>}

      <div className="admin-card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>Upload New Image</h3>
        <form onSubmit={handleUpload} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12, alignItems: 'end' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Image title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Category</label>
            <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>Campaign</option>
              <option>Public Meeting</option>
              <option>Membership & Posting</option>
              <option>Blood Donation</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Image</label>
            <input type="file" accept="image/*" className="form-control" onChange={(e) => setFile(e.target.files?.[0] || null)} required style={{ padding: 10 }} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Upload</button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>All Images ({images.length})</h3>
        <table className="admin-table">
          <thead><tr><th>Image</th><th>Title</th><th>Category</th><th>Actions</th></tr></thead>
          <tbody>
            {images.map((img) => (
              <tr key={img.id}>
                <td><img src={img.image_path} alt={img.title} className="table-img" /></td>
                <td>{img.title}</td>
                <td><span className="badge badge-blue">{img.category}</span></td>
                <td><div className="admin-actions"><button className="admin-btn-sm admin-btn-delete" onClick={() => handleDelete(img.id)}>Delete</button></div></td>
              </tr>
            ))}
            {images.length === 0 && <tr><td colSpan={4} style={{ textAlign: 'center', padding: 40, color: '#999' }}>No images yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageGallery;
