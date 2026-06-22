import { navigationLinks } from '../../data/navigation';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigazione principale">
      <a href="/" className="navbar__brand">
        Evocons
      </a>

      <ul className="navbar__menu">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;