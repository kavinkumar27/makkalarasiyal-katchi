import { useState, useEffect } from 'react';
import { getComplaints, resolveComplaint, deleteComplaint } from '../../api';

interface ComplaintItem { id: number; name: string; phone: string; location: string; complaint_text: string; image_path: string; status: string; created_at: string; }

const ManageComplaints = () => {
  const [complaints, setComplaints] = useState<ComplaintItem[]>([]);

  useEffect(() => {
    getComplaints()
      .then((res) => setComplaints(res.data?.data || []))
      .catch(() => setComplaints([
        { id: 1, name: 'Ravi', phone: '9876543210', location: 'Madurai, TN', complaint_text: 'Road damage in our area needs repair.', image_path: '', status: 'Pending', created_at: '2026-04-22' },
        { id: 2, name: 'Lakshmi', phone: '9876543211', location: 'Salem, TN', complaint_text: 'Water supply issues in ward 5.', image_path: '', status: 'Pending', created_at: '2026-04-21' },
      ]));
  }, []);

  const handleResolve = async (id: number) => {
    try { await resolveComplaint(id); } catch {}
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this complaint?')) return;
    try { await deleteComplaint(id); } catch {}
    setComplaints(complaints.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="admin-page-header"><h1>🚨 Complaint Management</h1><p>View and manage public complaints.</p></div>

      <div className="admin-card">
        <h3 style={{ marginBottom: 16, fontWeight: 700 }}>All Complaints ({complaints.length})</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead><tr><th>Name</th><th>Phone</th><th>Location</th><th>Complaint</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
            <tbody>
              {complaints.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.location}</td>
                  <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.complaint_text}</td>
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
              {complaints.length === 0 && <tr><td colSpan={7} style={{ textAlign: 'center', padding: 40, color: '#999' }}>No complaints yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageComplaints;
