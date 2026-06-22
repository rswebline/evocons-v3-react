function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigazione principale">
      <a href="/" className="navbar__brand">
        Evocons
      </a>

      <ul className="navbar__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi siamo</a></li>
        <li><a href="/servizi">Servizi</a></li>
        <li><a href="/ai-data-analytics">AI & Data Analytics</a></li>
        <li><a href="/cybersecurity">Cybersecurity</a></li>
        <li><a href="/formazione">Formazione</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;