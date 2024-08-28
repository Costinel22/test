import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faWarehouse, faChartLine, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Make sure to create a CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Agritek Solution Save Warehouse</h1>
        <p>Your trusted partner in efficient and compliant warehouse management in Central Africa.</p>
      </header>

      <section className="home-overview">
        <h2>Overview</h2>
        <p>Agritek Solution Save Warehouse is dedicated to providing top-notch warehouse management solutions that ensure the quality and safety of your products. Our mission is to enhance efficiency, comply with local regulations, and deliver superior service to our clients.</p>
      </section>

      <section className="home-features">
        <h2>Features</h2>
        <ul>
          <li><FontAwesomeIcon icon={faWarehouse} /> Real-time Inventory Tracking</li>
          <li><FontAwesomeIcon icon={faChartLine} /> Damage Reporting</li>
          <li><FontAwesomeIcon icon={faTruck} /> Transport Management</li>
        </ul>
      </section>

      <section className="home-benefits">
        <h2>Benefits</h2>
        <p>Using Agritek Solution Save Warehouse offers numerous benefits:</p>
        <ul>
          <li>Increased Efficiency: Streamline your warehouse operations with our advanced management tools.</li>
          <li>Compliance with Local Regulations: Ensure your warehouse meets all Central African legal requirements.</li>
          <li>Enhanced Product Quality: Maintain the highest standards of quality control for your products.</li>
        </ul>
      </section>

      <section className="home-call-to-action">
        <h2>Get Started</h2>
        <button className="cta-button"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</button>
        <button className="cta-button"><FontAwesomeIcon icon={faSignInAlt} /> Learn More</button>
      </section>

      <section className="home-links">
        <h2>Partner Platforms</h2>
        <p>We collaborate with leading management and transport platforms to ensure seamless operations:</p>
        <ul>
          <li><a href="https://afri-res.uneca.org/central-african-republic/transport-and-infrastructure" target="_blank" rel="noopener noreferrer">AFRI-RES Transport and Infrastructure <FontAwesomeIcon icon={faTruck} /></a></li>
          <li><a href="https://www.uneca.org/stories/trade-logistics-and-infrastructure-key-to-unlock-africa%E2%80%99s-trade-potential" target="_blank" rel="noopener noreferrer">UN Economic Commission for Africa <FontAwesomeIcon icon={faChartLine} /></a></li>
          <li><a href="https://www.unesco.org/en/articles/promoting-transboundary-management-natural-resources-central-africa" target="_blank" rel="noopener noreferrer">UNESCO Transboundary Management <FontAwesomeIcon icon={faWarehouse} /></a></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
