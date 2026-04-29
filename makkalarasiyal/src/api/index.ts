import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token to admin requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for 401 handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
      if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

// ---- Public APIs ----
export const getLatestNews = () => api.get('/news');
export const getNewsById = (id: number) => api.get(`/news/${id}`);
export const getGalleryImages = (category?: string) =>
  api.get('/gallery', { params: category ? { category } : {} });
export const submitEnquiry = (data: FormData | object) => api.post('/contact', data);
export const submitComplaint = (data: FormData) =>
  api.post('/complaint', data, { headers: { 'Content-Type': 'multipart/form-data' } });

// ---- Admin Auth ----
export const adminLogin = (username: string, password: string) =>
  api.post('/auth/login', { username, password });
export const adminLogout = () => api.post('/auth/logout');

// ---- Admin Dashboard ----
export const getDashboardStats = () => api.get('/dashboard');

// ---- Admin Gallery ----
export const adminUploadGallery = (data: FormData) =>
  api.post('/gallery/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } });
export const adminDeleteGallery = (id: number) => api.delete(`/gallery/${id}`);

// ---- Admin News ----
export const adminAddNews = (data: FormData) =>
  api.post('/news/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
export const adminUpdateNews = (id: number, data: FormData) =>
  api.post(`/news/update/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
export const adminDeleteNews = (id: number) => api.delete(`/news/${id}`);

// ---- Admin Enquiries ----
export const getEnquiries = () => api.get('/contact');
export const resolveEnquiry = (id: number) => api.put(`/contact/resolve/${id}`);
export const deleteEnquiry = (id: number) => api.delete(`/contact/${id}`);

// ---- Admin Complaints ----
export const getComplaints = () => api.get('/complaint');
export const resolveComplaint = (id: number) => api.put(`/complaint/resolve/${id}`);
export const deleteComplaint = (id: number) => api.delete(`/complaint/${id}`);

export default api;
