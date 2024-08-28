// ProductManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', quantity: 0 });
  const [damageReports, setDamageReports] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchDamageReports();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchDamageReports = async () => {
    try {
      const response = await axios.get('/api/damage-reports');
      setDamageReports(response.data);
    } catch (error) {
      console.error('Error fetching damage reports:', error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('/api/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', quantity: 0 });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`/api/products/${id}`, updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const reportDamage = async (damageReport) => {
    try {
      const response = await axios.post('/api/damage-reports', damageReport);
      setDamageReports([...damageReports, response.data]);
    } catch (error) {
      console.error('Error reporting damage:', error);
    }
  };

  return (
    <div className="product-management">
      <h1>Product Management</h1>
      <div className="product-entries">
        <h2>Product Entries</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
        />
        <button onClick={addProduct}><FontAwesomeIcon icon={faPlus} /> Add Product</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => updateProduct(product.id, { ...product, quantity: product.quantity + 1 })}><FontAwesomeIcon icon={faEdit} /> Update</button>
                  <button onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="damage-section">
        <h2>Damage Section</h2>
        <button onClick={() => reportDamage({ productId: 1, quantity: 1, reason: 'Damaged during transport' })}><FontAwesomeIcon icon={faPlus} /> Report Damage</button>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {damageReports.map((report) => (
              <tr key={report.id}>
                <td>{report.productId}</td>
                <td>{report.quantity}</td>
                <td>{report.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
