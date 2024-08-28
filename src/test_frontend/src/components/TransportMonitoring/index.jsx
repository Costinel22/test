// TransportMonitoring.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const TransportMonitoring = () => {
  const [transports, setTransports] = useState([]);
  const [realTimeData, setRealTimeData] = useState([]);

  useEffect(() => {
    fetchTransportHistory();
    fetchRealTimeData();
  }, []);

  const fetchTransportHistory = async () => {
    try {
      const response = await axios.get('/api/transport-history');
      setTransports(response.data);
    } catch (error) {
      console.error('Error fetching transport history:', error);
    }
  };

  const fetchRealTimeData = async () => {
    try {
      const response = await axios.get('/api/real-time-data');
      setRealTimeData(response.data);
    } catch (error) {
      console.error('Error fetching real-time data:', error);
    }
  };

  return (
    <div className="transport-monitoring">
      <h1>Transport Monitoring</h1>
      <section>
        <h2>Transport Status</h2>
        <table>
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>Location</th>
              <th>Estimated Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            {realTimeData.map((data) => (
              <tr key={data.vehicleId}>
                <td>{data.vehicleId}</td>
                <td>{data.location}</td>
                <td>{data.estimatedArrivalTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Transport History</h2>
        <table>
          <thead>
            <tr>
              <th>Transport ID</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Issues</th>
            </tr>
          </thead>
          <tbody>
            {transports.map((transport) => (
              <tr key={transport.id}>
                <td>{transport.id}</td>
                <td>{transport.startTime}</td>
                <td>{transport.endTime}</td>
                <td>{transport.issues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TransportMonitoring;
