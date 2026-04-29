import { useState, useEffect } from 'react';
import { getEnquiries, resolveEnquiry, deleteEnquiry } from '../../api';

interface Enquiry { id: number; name: string; email: string; phone: string; message: string; status: string; created_at: string; }

const ManageEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    getEnquiries()
      .then((res) => setEnquiries(res.data?.data || []))
      .catch(() => setEnquiries([
        { id: 1, name: 'Kumar', email: 'kumar@email.com', phone: '9876543210', message: 'Interested in joining', status: 'Pending', created_at: '2026-04-20' },
        { id: 2, name: 'Priya', email: 'priya@email.com', phone: '9876543211', message: 'Event enquiry', status: 'Pending', created_at: '2026-04-19' },
      ]));
  }, []);

  const handleResolve = async (id: number) => {
    try { await resolveEnquiry(id); } catch {}
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: 'Resolved' } : e));
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this enquiry?')) return;
    try { await deleteEnquiry(id); } catch {}
    setEnquiries(enquiries.filter(e => e.id !== id));
  };

  return (
    <div>
      <div className="admin-page-header"><h1>📩 Enquiry Management</h1><p>View and manage contact form submissions.</p></div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>All Enquiries ({enquiries.length})</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
            <tbody>
              {enquiries.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.message}</td>
                  <td><span className={`badge ${item.status === 'Resolved' ? 'badge-resolved' : 'badge-pending'}`}>{item.status}</span></td>
                  <td>{item.created_at}</td>
                  <td>
                    <div className="admin-actions">
                      {item.status !== 'Resolved' && <button className="admin-btn-sm admin-btn-resolve" onClick={() => handleResolve(item.id)}>Resolve</button>}
                      <button className="admin-btn-sm admin-btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {enquiries.length === 0 && <tr><td colSpan={7} style={{ textAlign: 'center', padding: 40, color: '#999' }}>No enquiries yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEnquiries;
