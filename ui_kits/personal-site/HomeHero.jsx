function HomeHero({ onNav }) {
  return (
    <main className="main center">
      <div className="inner">
        <div className="hero-grid">
          <img className="hero-portrait" src="../../assets/JD_PFP.jpeg" alt="JD Peñaherrera" />
          <div>
            <div className="hero-eyebrow">JD Peñaherrera</div>
            <h1 className="hero-name">Operator.<br /><em>Builder.</em></h1>
            <p className="hero-tagline">
              Four years in the messy middle of early-stage companies.<br />
              Now writing it down.
            </p>
            <div className="hero-sections">
              <div className="hero-sec" onClick={() => onNav('writing')}>Writing</div>
              <div className="hero-sec" onClick={() => onNav('projects')}>Projects</div>
              <div className="hero-sec" onClick={() => onNav('company')}>For Acme</div>
              <div className="hero-sec">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
window.HomeHero = HomeHero;
