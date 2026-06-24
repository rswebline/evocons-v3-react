import { navigationLinks } from "../../data/navigation";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__brand" href="/">
        Evocons
      </a>

      <ul className="navbar__menu">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__cta">
        <Button href="/contatti">Parla con un consulente</Button>
      </div>
    </nav>
  );
}

export default Navbar;