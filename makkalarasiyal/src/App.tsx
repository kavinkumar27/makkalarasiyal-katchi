import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Complaint from './pages/Complaint';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageGallery from './pages/admin/ManageGallery';
import ManageNews from './pages/admin/ManageNews';
import ManageEnquiries from './pages/admin/ManageEnquiries';
import ManageComplaints from './pages/admin/ManageComplaints';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main className={isAdmin ? '' : 'main-content'}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/complaint" element={<Complaint />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="gallery" element={<ManageGallery />} />
            <Route path="news" element={<ManageNews />} />
            <Route path="enquiries" element={<ManageEnquiries />} />
            <Route path="complaints" element={<ManageComplaints />} />
          </Route>
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;