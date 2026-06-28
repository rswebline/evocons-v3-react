import { Link } from "react-router-dom";

function SectionNavigation({
  parentLabel,
  parentPath,
  currentLabel,
  items = [],
}) {
  return (
    <nav className="section-navigation" aria-label="Navigazione di sezione">
      <div className="container section-navigation__inner">
        <div className="section-navigation__breadcrumb">
          <Link to="/">Home</Link>

          {parentLabel && parentPath && (
            <>
              <span>/</span>
              <Link to={parentPath}>{parentLabel}</Link>
            </>
          )}

          {currentLabel && (
            <>
              <span>/</span>
              <span>{currentLabel}</span>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="section-navigation__links">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={item.active ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default SectionNavigation;