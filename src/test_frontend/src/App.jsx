import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper/index';
import Home from './components/Home';
import ProductManagement from './components/Product';
import PoliciesAndProcedures from './components/PoliciesAndProcedures';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import ResourceManagement from './components/Resource';
import TransportAndLogistics from './components/TransportAndLogistics';
import MaintenanceAndResources from './components/MaintenanceAndResources';
import TransportMonitoring from './components/TransportMonitoring';
import UserDashboard from './components/UserDashboard';

const App = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/policies" element={<PoliciesAndProcedures />} />
            <Route path="/resource-management" element={<ResourceManagement />} />
            <Route path="/transport-planning" element={<TransportAndLogistics />} />
            <Route path='/transport-monitoring' element={<TransportMonitoring />} />
            <Route path='/' element={<ResourceManagement />} />
            <Route path='/maintenance' element={<MaintenanceAndResources />} />
            <Route path='/dashboard' element={< UserDashboard />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
