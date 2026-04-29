import { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem('admin_user');

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/gallery', label: 'Gallery', icon: '🖼️' },
    { path: '/admin/news', label: 'News', icon: '📰' },
    { path: '/admin/enquiries', label: 'Enquiries', icon: '📩' },
    { path: '/admin/complaints', label: 'Complaints', icon: '🚨' },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar" id="admin-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-brand-icon"><span>ம</span></div>
          <div>
            <h3>Admin Panel</h3>
            <p>Makkalarasial Katchi</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              id={`sidebar-${item.label.toLowerCase()}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">👤</div>
            <span>{user || 'Admin'}</span>
          </div>
          <button className="sidebar-logout" onClick={handleLogout} id="admin-logout-btn">
            🚪 Logout
          </button>
          <Link to="/" className="sidebar-back-link">← Back to Website</Link>
        </div>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
