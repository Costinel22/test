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
        <p>Agritek Solution Save Warehouse is dedicated to providing top-notch warehouse management solutions that ensure the quality and safety of your products. Our mission is to enhance efficiency, comply with local regulations, and deliver superior service to our clients. To revolutionize agricultural logistics by providing a decentralized, secure, and transparent platform for managing warehouse operations. Whether you’re a farmer, distributor, or investor, we’ve got you covered.</p>
      </section>

      <section className="home-features">
        <h2>Features</h2>
        <ul>
          <li><FontAwesomeIcon icon={faWarehouse} /> Real-time Inventory Tracking</li>
          <p>Say goodbye to manual stock counts. Our platform keeps tabs on every grain, fruit, and vegetable in your warehouse, ensuring accurate data at your fingertips.</p>
          <li><FontAwesomeIcon icon={faChartLine} /> Damage Reporting</li>
          <p>Report any mishaps promptly. Our system tracks damaged goods, helping you maintain quality and minimize losses.</p>
          <li><FontAwesomeIcon icon={faTruck} /> Transport Management</li>
          <p>Seamlessly schedule, monitor, and optimize transportation routes. Efficiency is our middle name!</p>
        </ul>
      </section>

      <section className="home-benefits">
        <h2>Benefits</h2>
        <p>Using Agritek Solution Save Warehouse offers numerous benefits:</p>
        <ul>
          <li>Increased Efficiency: Streamline your warehouse operations with our advanced management tools.  Streamline processes, reduce paperwork, and save time. Focus on what matters—getting goods to market.</li>
          <li>Compliance with Local Regulations: Ensure your warehouse meets all Central African legal requirements.  We adhere to local regulations, ensuring your operations are above board.</li>
          <li>Enhanced Product Quality: Maintain the highest standards of quality control for your products. ransparent data means better decision-making. No more surprises when inspecting your stock.</li>
        </ul>
      </section>

      <section className="home-call-to-action">
        <h2>Get Started</h2>
        <p>Ready to revolutionize your warehouse management? Sign up now, explore our services, and reach out to our friendly team!</p>
        <button className="cta-button"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</button>
        <button className="cta-button"><FontAwesomeIcon icon={faSignInAlt} /> Learn More</button>
      </section>

      <section className="home-links">
        <h2>Partner Platforms</h2>
        <p>We collaborate with leading management and transport platforms to ensure seamless operations:</p>
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer">Transport and Infrastructure <FontAwesomeIcon icon={faTruck} /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Economic Commission for Africa <FontAwesomeIcon icon={faChartLine} /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"> Transboundary Management <FontAwesomeIcon icon={faWarehouse} /></a></li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
