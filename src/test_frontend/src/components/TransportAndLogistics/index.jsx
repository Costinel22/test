// TransportAndLogistics.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './style.css';

const TransportAndLogistics = () => {
  const [transports, setTransports] = useState([]);
  const [newTransport, setNewTransport] = useState({ name: '', status: '' });

  useEffect(() => {
    fetchTransports();
  }, []);

  const fetchTransports = async () => {
    try {
      const response = await axios.get('/api/transports');
      setTransports(response.data);
    } catch (error) {
      console.error('Error fetching transports:', error);
    }
  };

  const addTransport = async () => {
    try {
      const response = await axios.post('/api/transports', newTransport);
      setTransports([...transports, response.data]);
      setNewTransport({ name: '', status: '' });
    } catch (error) {
      console.error('Error adding transport:', error);
    }
  };

  return (
    <div className="transport-and-logistics">
      <h1>Transport and Logistics</h1>
      <section>
        <h2>Transport Planning</h2>
        <p>Details about transport planning...</p>
      </section>
      <section>
        <h2>Add Transport</h2>
        <input
          type="text"
          placeholder="Transport Name"
          value={newTransport.name}
          onChange={(e) => setNewTransport({ ...newTransport, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newTransport.status}
          onChange={(e) => setNewTransport({ ...newTransport, status: e.target.value })}
        />
        <button onClick={addTransport}>Add Transport</button>
      </section>
      <section>
        <h2>View Transports</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transports.map((transport) => (
              <tr key={transport.id}>
                <td>{transport.name}</td>
                <td>{transport.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TransportAndLogistics;
