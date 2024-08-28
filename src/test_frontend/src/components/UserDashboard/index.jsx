// UserDashboard.js
import React from 'react';
import './style.css'; // Asigurați-vă că aveți un fișier CSS pentru stilizare
import BarChartExample from '../BarChart';
import LineChartExample from '../LineChart';


// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <section>
        <h2>Profile Management</h2>
        {/* Aici puteți adăuga formularul pentru gestionarea profilului */}
       
      </section>
      <section>
        <h2>Product Management</h2>
        {/* Aici puteți afișa stocurile curente și istoricul produselor */}
        <BarChartExample />
      </section>
      <section>
        <h2>Reports and Statistics</h2>
        {/* Aici puteți afișa rapoartele zilnice și statisticile lunare */}
        <LineChartExample />
      </section>
    </div>
  );
};

export default UserDashboard;
