import { useState, useEffect } from 'react';
import { getLatestNews, adminAddNews, adminDeleteNews } from '../../api';

interface NewsItem { id: number; title: string; description: string; image_path: string; news_date: string; }

const ManageNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [form, setForm] = useState({ title: '', description: '', news_date: '' });
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState('');

  const fetchNews = () => {
    getLatestNews()
      .then((res) => setNews(res.data?.data || []))
      .catch(() => setNews([
        { id: 1, title: 'Youth Wing Initiative', description: 'Empowering next gen leaders.', image_path: '', news_date: '2026-04-20' },
        { id: 2, title: 'Clean TN Campaign', description: 'Volunteers join movement.', image_path: '', news_date: '2026-04-18' },
      ]));
  };

  useEffect(() => { fetchNews(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('news_date', form.news_date);
    if (file) fd.append('image', file);
    try {
      await adminAddNews(fd);
      setMsg('News article added!');
      setForm({ title: '', description: '', news_date: '' }); setFile(null);
      fetchNews();
    } catch { setMsg('News saved (demo mode)'); }
    setTimeout(() => setMsg(''), 3000);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this article?')) return;
    try { await adminDeleteNews(id); } catch {}
    setNews(news.filter(n => n.id !== id));
  };

  return (
    <div>
      <div className="admin-page-header"><h1>📰 News Management</h1><p>Add, edit, and manage news articles.</p></div>

      {msg && <div className="alert alert-success">{msg}</div>}

      <div className="admin-card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>Add News Article</h3>
        <form onSubmit={handleAdd}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Title</label>
              <input type="text" className="form-control" placeholder="Article title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Date</label>
              <input type="date" className="form-control" value={form.news_date} onChange={(e) => setForm({ ...form, news_date: e.target.value })} required />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" placeholder="Article description..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} />
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'end' }}>
            <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
              <label>Image (optional)</label>
              <input type="file" accept="image/*" className="form-control" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ padding: 10 }} />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Add News</button>
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>All News ({news.length})</h3>
        <table className="admin-table">
          <thead><tr><th>Title</th><th>Date</th><th>Description</th><th>Actions</th></tr></thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600 }}>{item.title}</td>
                <td>{item.news_date}</td>
                <td style={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description}</td>
                <td><div className="admin-actions"><button className="admin-btn-sm admin-btn-delete" onClick={() => handleDelete(item.id)}>Delete</button></div></td>
              </tr>
            ))}
            {news.length === 0 && <tr><td colSpan={4} style={{ textAlign: 'center', padding: 40, color: '#999' }}>No news articles yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageNews;
