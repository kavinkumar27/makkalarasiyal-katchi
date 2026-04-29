import './AnnouncementTicker.css';

interface AnnouncementTickerProps {
  announcements?: string[];
}

const defaultAnnouncements = [
  '🔴 மக்கள் அரசியல் கட்சி — மக்கள் சேவையே நமது லட்சியம்!',
  '🔵 Join our rally on May 15th — அனைவரும் வருக!',
  '🟢 New district offices opening across Tamil Nadu',
  '🔴 Volunteer registration now open — இணையுங்கள்!',
  '🔵 Follow us on social media for latest updates',
];

const AnnouncementTicker = ({ announcements = defaultAnnouncements }: AnnouncementTickerProps) => {
  const tickerText = announcements.join('   •   ');

  return (
    <div className="ticker-wrapper" id="announcement-ticker">
      <div className="ticker-label">📢 Updates</div>
      <div className="ticker-track">
        <div className="ticker-content">
          <span>{tickerText}</span>
          <span>{tickerText}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
