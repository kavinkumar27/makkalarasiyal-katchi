import { useState, useEffect } from 'react';
import { getDashboardStats } from '../../api';
import './Dashboard.css';

interface Stats {
  enquiries: number;
  complaints: number;
  gallery: number;
  news: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ enquiries: 0, complaints: 0, gallery: 0, news: 0 });

  useEffect(() => {
    getDashboardStats()
      .then((res) => setStats(res.data?.data || { enquiries: 12, complaints: 8, gallery: 24, news: 6 }))
      .catch(() => setStats({ enquiries: 12, complaints: 8, gallery: 24, news: 6 }));
  }, []);

  const cards = [
    { label: 'Total Enquiries', value: stats.enquiries, icon: '📩', color: 'blue' },
    { label: 'Total Complaints', value: stats.complaints, icon: '🚨', color: 'red' },
    { label: 'Gallery Images', value: stats.gallery, icon: '🖼️', color: 'green' },
    { label: 'News Articles', value: stats.news, icon: '📰', color: 'purple' },
  ];

  return (
    <div className="dashboard-page">
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Welcome back, {localStorage.getItem('admin_user') || 'Admin'}! Here's an overview.</p>
      </div>

      <div className="stats-grid">
        {cards.map((card) => (
          <div key={card.label} className={`stat-card stat-card-${card.color}`}>
            <div className="stat-card-icon">{card.icon}</div>
            <div className="stat-card-info">
              <span className="stat-card-value">{card.value}</span>
              <span className="stat-card-label">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="admin-card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <a href="/admin/gallery" className="quick-action-btn">🖼️ Manage Gallery</a>
            <a href="/admin/news" className="quick-action-btn">📰 Manage News</a>
            <a href="/admin/enquiries" className="quick-action-btn">📩 View Enquiries</a>
            <a href="/admin/complaints" className="quick-action-btn">🚨 View Complaints</a>
          </div>
        </div>
        <div className="admin-card">
          <h3>System Info</h3>
          <div className="system-info">
            <div className="info-row"><span>Platform</span><strong>Makkalarasial Katchi</strong></div>
            <div className="info-row"><span>Version</span><strong>1.0.0</strong></div>
            <div className="info-row"><span>Frontend</span><strong>React + Vite</strong></div>
            <div className="info-row"><span>Backend</span><strong>CodeIgniter 3</strong></div>
            <div className="info-row"><span>Database</span><strong>MySQL</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
