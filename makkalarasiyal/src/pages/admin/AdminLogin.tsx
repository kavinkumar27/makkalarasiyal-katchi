import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../api';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await adminLogin(username, password);
      if (res.data?.token) {
        localStorage.setItem('admin_token', res.data.token);
        localStorage.setItem('admin_user', username);
        navigate('/admin/dashboard');
      } else {
        setError(res.data?.message || 'Invalid credentials');
      }
    } catch {
      // Demo mode: allow login with admin/admin123
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('admin_token', 'demo_token_12345');
        localStorage.setItem('admin_user', 'admin');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-brand-icon"><span>ம</span></div>
          <h1>Admin Panel</h1>
          <p>Makkalarasial Katchi — Management Portal</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} id="admin-login-form">
          <div className="form-group">
            <label htmlFor="admin-username">Username</label>
            <input type="text" id="admin-username" className="form-control" placeholder="Enter username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Password</label>
            <input type="password" id="admin-password" className="form-control" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg admin-login-btn" id="admin-login-submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="admin-login-hint">Default: admin / admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;
