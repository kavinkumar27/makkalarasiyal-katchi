import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const refs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.1 });
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const addRef = (el: HTMLElement | null) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  const timeline = [
    { year: '2024', title: 'Party Founded', desc: 'Makkalarasial Katchi was officially established with a vision for people-first governance.' },
    { year: '2024', title: 'First District Office', desc: 'Opened our first district office in Chennai, marking the beginning of our grassroots expansion.' },
    { year: '2025', title: 'Youth Wing Launch', desc: 'Launched the youth wing to empower young leaders across Tamil Nadu.' },
    { year: '2025', title: 'Membership Milestone', desc: 'Crossed 50,000 registered members across 38 districts.' },
    { year: '2026', title: 'Community Programs', desc: 'Launched free education, healthcare, and skill development programs statewide.' },
  ];

  const leaders = [
    { name: 'Party President', role: 'Founder & President', desc: 'Visionary leader dedicated to people\'s welfare and transparent governance.', img: '/PartyImages/Leader Photos/leader-1.png' },
    { name: 'General Secretary', role: 'General Secretary', desc: 'Strategic thinker driving organizational growth across all districts.', img: '/images/leader.png' },
    { name: 'Youth Wing Leader', role: 'Youth Wing President', desc: 'Empowering the next generation with education and opportunity.', img: '/images/leader.png' },
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>About Us</h1>
          <p className="page-header-ta">எங்களைப் பற்றி</p>
          <p>Learn about our journey, mission, and the people behind the movement.</p>
        </div>
      </section>

      {/* Party Description */}
      <section className="section-padding">
        <div className="container">
          <div className="about-full-grid">
            <div className="about-full-text reveal" ref={addRef}>
              <h2>Who We Are</h2>
              <p className="about-ta">நாங்கள் யார்</p>
              <p>Makkalarasial Katchi (மக்கள் அரசியல் கட்சி) is a people's political movement that emerged from the collective aspirations of Tamil Nadu's citizens. We are not just a political party — we are a movement that represents the voice of every farmer, worker, student, and homemaker.</p>
              <p>Our ideology is rooted in social justice, economic equality, and the fundamental belief that governance must serve the people, not the powerful. We champion transparent administration, inclusive development, and the empowerment of marginalized communities.</p>
              <p>With a growing network of dedicated volunteers across all 38 districts of Tamil Nadu, we are building a political force that is accountable, accessible, and action-oriented.</p>
            </div>
            <div className="about-emblem reveal-right" ref={addRef}>
              <img src="/images/emblem.png" alt="Party Emblem" />
              <p className="emblem-caption">Our Party Emblem — Symbol of Unity & Strength</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Ideology */}
      <section className="section-padding ideology-section">
        <div className="container">
          <div className="ideology-grid">
            <div className="ideology-card ideology-red reveal" ref={addRef}>
              <div className="ideology-icon">🎯</div>
              <h3>Mission</h3>
              <p className="ideology-ta">குறிக்கோள்</p>
              <p>To establish a governance model that prioritizes people's welfare, eliminates corruption, and ensures equal opportunity for every citizen of Tamil Nadu through democratic participation.</p>
            </div>
            <div className="ideology-card ideology-blue reveal" ref={addRef}>
              <div className="ideology-icon">👁️</div>
              <h3>Vision</h3>
              <p className="ideology-ta">நோக்கம்</p>
              <p>A Tamil Nadu that leads India in education, healthcare, employment, and social harmony — where every citizen lives with dignity, freedom, and prosperity.</p>
            </div>
            <div className="ideology-card ideology-green reveal" ref={addRef}>
              <div className="ideology-icon">⚖️</div>
              <h3>Core Ideology</h3>
              <p className="ideology-ta">அடிப்படை கொள்கை</p>
              <p>Social democracy rooted in Tamil culture and values. We believe in the power of the people, the importance of community, and the necessity of sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding timeline-section">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>Our Journey</h2><p className="tamil-subtitle">எங்கள் பயணம்</p></div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`} ref={addRef}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding leaders-section">
        <div className="container">
          <div className="section-title reveal" ref={addRef}><h2>Our Leadership</h2><p className="tamil-subtitle">எங்கள் தலைமை</p></div>
          <div className="leaders-grid">
            {leaders.map((leader, i) => (
              <div key={i} className="leader-card reveal" ref={addRef}>
                <div className="leader-card-img"><img src={leader.img} alt={leader.name} /></div>
                <div className="leader-card-info">
                  <h3>{leader.name}</h3>
                  <span className="leader-role">{leader.role}</span>
                  <p>{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
