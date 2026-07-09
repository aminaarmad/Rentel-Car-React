import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="luxury-footer">
      <div className="footer-mini-container">
        

        <div className="footer-left-brand">
          <h2>Drive<span>Lux</span></h2>
          <p>Elevating your journey with the world's most exclusive premium fleet.</p>
        </div>

        <div className="footer-right-contact">
          <div className="contact-item-mini">
            <span className="mini-icon">📍</span>
            <p>Miami, Florida, USA 🇺🇸</p>
          </div>
          <div className="contact-item-mini">
            <span className="mini-icon">📞</span>
            <p>+1 (786) 555-0188</p>
          </div>
        </div>

      </div>
      <div className="footer-copyright-bar">
        <p>&copy; {new Date().getFullYear()} DRIVELUX. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;