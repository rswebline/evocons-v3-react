import { useEffect, useState } from "react";
import { navigationLinks } from "../../data/navigation";
import Button from "../ui/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMenuOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" aria-label="Navigazione principale">
      <a className="navbar__brand" href="/" onClick={closeMenu}>
        Evocons
      </a>

      <button
        className="navbar__toggle"
        type="button"
        aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="primary-navigation"
        className={`navbar__panel ${isMenuOpen ? "is-open" : ""}`}
      >
        <ul className="navbar__menu">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__cta">
          <Button href="/contatti">Parla con un consulente</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;