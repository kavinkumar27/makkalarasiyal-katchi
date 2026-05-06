import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import JoinModal from './JoinModal';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', tamilLabel: 'முகப்பு' },
    { path: '/about', label: 'About', tamilLabel: 'எங்களைப் பற்றி' },
    { path: '/gallery', label: 'Gallery', tamilLabel: 'கேலரி' },
    { path: '/contact', label: 'Contact', tamilLabel: 'தொடர்பு' },
    { path: '/complaint', label: 'Complaint', tamilLabel: 'புகார்' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="main-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" id="navbar-brand">
            <div className="brand-icon">
              {/* <span className="brand-letter"><img src="/images/logo.png" alt="Logo" /></span> */}
            </div>
            <div className="brand-text">
              <span className="brand-name-en"> MAKKALARASIAL KATCHI</span>
              <span className="brand-name-ta">மக்கள் அரசியல் கட்சி</span>
            </div>
          </Link>

          <div className={`navbar-links ${isMobileOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn btn-primary btn-sm nav-join-btn" onClick={() => setShowJoin(true)} id="nav-join-btn">
              Join Us
            </button>
          </div>

          <button
            className={`hamburger ${isMobileOpen ? 'active' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isMobileOpen && <div className="mobile-overlay" onClick={() => setIsMobileOpen(false)} />}
      {showJoin && <JoinModal onClose={() => setShowJoin(false)} />}
    </>
  );
};

export default Navbar;
