// Shared nav, header section components
const { useState } = React;

const SECTIONS = [
  { id: 'home',     label: 'Home' },
  { id: 'writing',  label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  { id: 'company',  label: 'For Acme' },
];

function Nav({ active, onNav }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => onNav('home')}>JD</div>
      <div className="nav-items">
        {SECTIONS.map(s => (
          <div key={s.id}
               className={'nav-item ' + (active === s.id ? 'active' : '')}
               onClick={() => onNav(s.id)}>
            {s.label}
          </div>
        ))}
      </div>
      <div className="nav-right">juandiego.work</div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 JD Peñaherrera</div>
      <div className="footer-right">
        <a>Email</a>
        <a>LinkedIn</a>
        <a>X</a>
        <a>RSS</a>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.SECTIONS = SECTIONS;
