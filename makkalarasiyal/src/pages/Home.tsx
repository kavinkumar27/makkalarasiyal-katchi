import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnnouncementTicker from '../components/AnnouncementTicker';
import JoinModal from '../components/JoinModal';
import { getLatestNews } from '../api';
// leader images
import leaderImage1 from '../../public/PartyImages/Leader Photos/leader-1.png';
import leaderImage2 from '../../public/PartyImages/Leader Photos/lead1.jpeg';
import leaderImage3 from '../../public/PartyImages/Leader Photos/lead3.jpeg';
import leaderImage4 from '../../public/PartyImages/Leader Photos/lead4.jpeg';

//Home Page Leader Carousel Images
const leaderImages = [leaderImage1, leaderImage2, leaderImage3, leaderImage4];
import aboutImage from '../../public/PartyImages/campaign-img/WhatsApp Image 2026-04-26 at 7.58.30 PM.jpeg'
import './Home.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image_path: string;
  news_date: string;
}

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [showJoin, setShowJoin] = useState(false);
  const [currentLeaderImage, setCurrentLeaderImage] = useState(0);
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeaderImage((prev) => (prev + 1) % leaderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentLeaderImage]);

  useEffect(() => {
    getLatestNews()
      .then((res) => setNews(res.data?.data?.slice(0, 3) || []))
      .catch(() => {
        setNews([
          { id: 1, title: 'Party launches new youth wing initiative', description: 'Empowering the next generation of leaders across Tamil Nadu districts.', image_path: '', news_date: '2026-04-20' },
          { id: 2, title: 'Clean Tamil Nadu campaign kicks off', description: 'Thousands of volunteers join the movement for a cleaner state.', image_path: '', news_date: '2026-04-18' },
          { id: 3, title: 'Free medical camp organized in Chennai', description: 'Over 2000 people benefited from our community health initiative.', image_path: '', news_date: '2026-04-15' },
        ]);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [news]);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero" id="hero-section">
        <div className="hero-bg"><div className="hero-overlay" /></div>
        <div className="hero-content">
          <div className="hero-badge">🏛️ People's Political Movement</div>
          <h1 className="hero-title-ta">மக்கள் குரல் • மக்கள் ஆட்சி</h1>
          <h2 className="hero-title-en">Voice of the People • Power of Democracy</h2>
          <p className="hero-subtitle">Building a stronger, equitable Tamil Nadu through the power of people's unity.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => setShowJoin(true)} id="hero-join-btn"><span>✊</span> Join the Movement</button>
            <Link to="/contact" className="btn btn-outline btn-lg" id="hero-contact-btn">Contact Us</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">50K+</span><span className="stat-label">Members</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-number">38</span><span className="stat-label">Districts</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-number">100+</span><span className="stat-label">Events</span></div>
          </div>
        </div>
      </section>

      <AnnouncementTicker />

      {/* About Preview */}
      <section className="section-padding about-preview" id="about-preview">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>About Our Party</h2><p className="tamil-subtitle">எங்கள் கட்சியைப் பற்றி</p></div>
          <div className="about-grid">
            <div className="about-text reveal" ref={addRef}>
              <p><strong>Makkalarasial Katchi</strong> (மக்கள் அரசியல் கட்சி) is a grassroots political movement born from the aspirations of ordinary Tamil people. We believe in transparent governance, social justice, and economic empowerment.</p>
              <p>சமூக நீதி காப்பது ஜனநாயகம் காப்பது சம உரிமைக்காக பாடுபடுவது பெண்ணுரிமைக்காக பாடுபடுவது சம தர்மம் காப்பது சாதி மதசார்பின்மை காக்க பாடப்படுவது எல்லோருக்கும் எல்லாம் கிடைக்க பாடுப்படுவது அதுவே எனது நோக்கம் மக்கள் அரசியல் கட்சி நிறுவனர் மற்றும் மாநிலத் தலைவர் வினோத்குமார்</p>
              <p>Founded with the vision of creating a truly democratic society, our party stands for the rights of farmers, workers, women, and youth.</p>
              <Link to="/about" className="btn btn-red btn-sm" id="about-readmore-btn">Read More →</Link>
            </div>
            <div className="about-image reveal-right" ref={addRef}>
              <img src={aboutImage} alt="Party rally" />
              <div className="about-image-badge"><span>Since</span><strong>2024</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding vision-section" id="vision-section">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>Vision & Mission</h2><p className="tamil-subtitle">நோக்கம் & குறிக்கோள்</p></div>
          <div className="vision-cards">
            <div className="vision-card reveal" ref={addRef}><div className="vision-icon vision-icon-red">🎯</div><h3>Our Vision</h3><p className="vision-ta">நோக்கம்</p><p>A prosperous Tamil Nadu where every citizen lives with dignity and equal opportunity.</p></div>
            <div className="vision-card reveal" ref={addRef}><div className="vision-icon vision-icon-blue">🚀</div><h3>Our Mission</h3><p className="vision-ta">குறிக்கோள்</p><p>To empower people through participatory democracy and transparent governance.</p></div>
            <div className="vision-card reveal" ref={addRef}><div className="vision-icon vision-icon-green">💡</div><h3>Our Promise</h3><p className="vision-ta">உறுதிமொழி</p><p>To serve selflessly, fight corruption, and create opportunities for all.</p></div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="section-padding values-section" id="values-section">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>Our Core Values</h2><p className="tamil-subtitle">அடிப்படை மதிப்புகள்</p></div>
          <div className="values-grid">
            <div className="value-card reveal" ref={addRef}><div className="value-number">01</div><h3>People First</h3><p className="value-ta">மக்களே முதலிடம்</p><p>Every policy starts and ends with the welfare of our people.</p></div>
            <div className="value-card reveal" ref={addRef}><div className="value-number">02</div><h3>Equality</h3><p className="value-ta">சமத்துவம்</p><p>Social justice and equal opportunity for all citizens.</p></div>
            <div className="value-card reveal" ref={addRef}><div className="value-number">03</div><h3>Development</h3><p className="value-ta">வளர்ச்சி</p><p>Sustainable, inclusive growth that builds human potential.</p></div>
          </div>
        </div>
      </section>

      {/* Leader Highlight */}
      <section className="section-padding leader-section" id="leader-section">
        <div className="container">
          <div className="leader-grid">
            <div className="leader-image reveal-left" ref={addRef}>
              <div className="carousel-container">
                {leaderImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Party Leader ${index + 1}`}
                    className={`carousel-image ${index === currentLeaderImage ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div className="leader-badge">Founder & State President</div>
              <div className="carousel-indicators">
                {leaderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentLeaderImage ? 'active' : ''}`}
                    onClick={() => setCurrentLeaderImage(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="leader-content reveal-right" ref={addRef}>
              <span className="badge badge-red">Leadership</span>
              <h2>Leading with Vision & Integrity</h2>
              <p className="leader-ta">நேர்மையான தலைமை</p>
              <p>Our leader has dedicated their life to public service, fighting for the rights of farmers, workers, and the underprivileged.</p>
              <p>"Every citizen deserves a government that listens, a leader who acts, and a future that inspires."</p>
              <div className="leader-quote-attr">— வினோத்குமார் (Founder & State President)</div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Latest News */}
      <section className="section-padding news-section" id="news-section">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>Latest News</h2><p className="tamil-subtitle">சமீபத்திய செய்திகள்</p></div>
          <div className="news-grid">
            {news.map((item, i) => (
              <div key={item.id} className="news-card reveal" ref={addRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="news-card-image">
                  {item.image_path ? <img src={item.image_path} alt={item.title} /> : <div className="news-placeholder">📰</div>}
                  <div className="news-date">{new Date(item.news_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                </div>
                <div className="news-card-body"><h3>{item.title}</h3><p>{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="section-padding volunteer-section" id="volunteer-section">
        <div className="volunteer-bg">
          <div className="container">
            <div className="volunteer-content reveal" ref={addRef}>
              <h2>Be the Change You Want to See</h2>
              <p className="volunteer-ta">மாற்றமாக நீயே இரு</p>
              <p>Join thousands of passionate volunteers working towards a better Tamil Nadu.</p>
              <button className="btn btn-primary btn-lg" onClick={() => setShowJoin(true)} id="volunteer-join-btn">Become a Volunteer — தொண்டராக இணையுங்கள்</button>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-float" id="whatsapp-btn" aria-label="Chat on WhatsApp">💬</a>
      {showJoin && <JoinModal onClose={() => setShowJoin(false)} />}
    </div>
  );
};

export default Home;
