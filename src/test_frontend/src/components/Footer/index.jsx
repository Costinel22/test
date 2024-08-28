import React from 'react';
import './style.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../..//public/logo.jpeg" alt="Agritek Solution Save Warehouse" />
          <h4>Agritek Solution Saves Warehouse </h4>
          <h4>Transforming Agricultural Logistics</h4>
          <h4>Where Efficiency Meets Transparency</h4>
        </div>
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#help-center">Help Center</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@agritek.com">info@agritek.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Phone: <a href="tel:+0987654321">+0 987 654 321</a></p>
        </div>
        <div className="footer-map">
          <h4>Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846815!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Agritek Solution Saves Warehouse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
