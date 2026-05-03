import './DocumentModal.css';

interface Props {
  onClose: () => void;
}

const BiographyModal = ({ onClose }: Props) => {
  return (
    <div className="document-modal-overlay" onClick={onClose}>
      <div className="document-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="document-modal-header">
          <h2>Leader Biography</h2>
          <button className="document-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="document-modal-body">
          <h3>Early Life and Education</h3>
          <p>Born into a humble family in rural Tamil Nadu, our leader experienced firsthand the struggles of the working class. They pursued higher education with a focus on political science and public administration, always intending to give back to the community.</p>
          
          <h3>Public Service Journey</h3>
          <p>Before founding Makkalarasial Katchi, they spent over a decade working alongside grassroots NGOs, advocating for farmers' rights and better educational infrastructure in underdeveloped districts. Their commitment to social justice earned them widespread respect among the youth and marginalized communities.</p>
          
          <h3>Founding the Party</h3>
          <p>Driven by the lack of transparent and accountable governance, they established the party as a true "people's movement" (Makkal Arasiyal). The goal was to break the cycle of traditional politics and empower ordinary citizens to take charge of their future.</p>
          
          <h3>Vision for the Future</h3>
          <p>Their life's mission is to see a Tamil Nadu where no citizen is left behind, where the government fears the people (not the other way around), and where every child has access to world-class education and healthcare. They lead by example, maintaining an open-door policy and strict adherence to anti-corruption principles.</p>
        </div>
      </div>
    </div>
  );
};

export default BiographyModal;
