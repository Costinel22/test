// ResourceManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './style.css';

const ResourceManagement = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', allocation: '' });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get('/api/resources');
      setResources(response.data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const addResource = async () => {
    try {
      const response = await axios.post('/api/resources', newResource);
      setResources([...resources, response.data]);
      setNewResource({ name: '', allocation: '' });
    } catch (error) {
      console.error('Error adding resource:', error);
    }
  };

  return (
    <div className="resource-management">
      <h1>Resource Management</h1>
      <section>
        <h2>Available Resources</h2>
        <input
          type="text"
          placeholder="Resource Name"
          value={newResource.name}
          onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Allocation"
          value={newResource.allocation}
          onChange={(e) => setNewResource({ ...newResource, allocation: e.target.value })}
        />
        <button onClick={addResource}>Add Resource</button>
      </section>
      <section>
        <h2>Resource Allocation</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Allocation</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.name}</td>
                <td>{resource.allocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ResourceManagement;
