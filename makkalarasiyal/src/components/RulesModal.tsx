import './DocumentModal.css';

interface Props {
  onClose: () => void;
}

const RulesModal = ({ onClose }: Props) => {
  return (
    <div className="document-modal-overlay" onClick={onClose}>
      <div className="document-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="document-modal-header">
          <h2>Party Rules & Regulations</h2>
          <button className="document-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="document-modal-body">
          <h3>1. Membership and Conduct</h3>
          <p>All members must adhere to the core principles of Makkalarasial Katchi. Any behavior that contradicts our values of social justice and transparency may result in suspension or expulsion from the party.</p>
          
          <h3>2. Democratic Participation</h3>
          <p>Decisions at the district level must involve open forums where local volunteers have a voice. No single member holds absolute authority over district committees.</p>
          
          <h3>3. Anti-Corruption Policy</h3>
          <ul>
            <li>Members must not engage in bribery or nepotism.</li>
            <li>All political donations must be transparent and documented.</li>
            <li>Public resources must be protected and used efficiently.</li>
          </ul>

          <h3>4. Respect and Equality</h3>
          <p>The party strictly prohibits discrimination based on caste, religion, gender, or economic status. We stand for true equality among all citizens of Tamil Nadu.</p>

          <h3>5. Dedication to the Cause</h3>
          <p>We are a movement of action. Volunteers and members are expected to actively participate in community service and local outreach programs, continually representing the party with integrity.</p>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
