import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-open");
      // Restore scrolling when menu is closed
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="containerr">
        <Link to="/" className="logoContainer" onClick={handleLinkClick}>
          <h1 className="brand-name">CSA BAZAR</h1>
        </Link>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Desktop navigation */}
        <ul className="listContainer desktop-only">
          <li>
            <Link className="list-item" to="/" onClick={handleLinkClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="list-item"
              to="/products"
              onClick={handleLinkClick}
            >
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/contact" onClick={handleLinkClick}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation - Only renders when menuOpen is true */}
      {menuOpen && (
        <div className={`mobile-menu-container${menuOpen ? " active" : ""}`}>
          <button
            className="close-menu-btn"
            onClick={handleMenuToggle}
            aria-label="Close menu"
          >
            <span>✕</span>
          </button>
          <ul className={`listContainer${menuOpen ? " show" : ""}`}>
            <li className="menu-title">
              <h2>Menu</h2>
            </li>
            <li>
              <Link className="list-item" to="/" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="list-item"
                to="/products"
                onClick={handleLinkClick}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                className="list-item"
                to="/contact"
                onClick={handleLinkClick}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Backdrop only appears when menu is open */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={handleMenuToggle}></div>
      )}
    </>
  );
};

export default Header;
