function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__brand" aria-labelledby="footer-brand-title">
          <h2 id="footer-brand-title" className="site-footer__logo">
            <a href="/" aria-label="Vai alla home di Evocons">
              Evocons
            </a>
          </h2>

          <p className="site-footer__tagline">
            Consulenza, innovazione e competenze per accompagnare il cambiamento.
          </p>
        </section>

        <nav className="site-footer__nav" aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="site-footer__heading">
            Link utili
          </h2>

          <ul className="site-footer__links">
            <li>
              <a href="/chi-siamo">Chi siamo</a>
            </li>
            <li>
              <a href="/servizi">Servizi</a>
            </li>
            <li>
              <a href="/contatti">Contatti</a>
            </li>
            <li>
              <a href="/insight">Insight</a>
            </li>
          </ul>
        </nav>

        <section
          className="site-footer__contacts"
          aria-labelledby="footer-contacts-title"
        >
          <h2 id="footer-contacts-title" className="site-footer__heading">
            Contatti
          </h2>

          <p className="site-footer__contact-note">
            Scrivici per una prima conversazione.
          </p>

          <address className="site-footer__address">
            <a className="site-footer__contact-link" href="mailto:info@evocons.it">
              info@evocons.it
            </a>
          </address>

          <ul className="site-footer__social" aria-label="Social">
            <li>
              <a
                href="https://www.linkedin.com/company/evocons/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profilo LinkedIn di Evocons, si apre in una nuova scheda"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} Evocons. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;
