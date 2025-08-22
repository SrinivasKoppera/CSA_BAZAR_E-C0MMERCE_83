import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">CSA BAZAR</h3>
          <p className="footer-description">
            Your one-stop shop for quality products at affordable prices. We're
            committed to delivering excellence to our customers.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="footer-address">
            <p>123 Shopping Avenue</p>
            <p>Retail District, NY 10001</p>
            <p>Email: info@csabazar.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} CSA BAZAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
