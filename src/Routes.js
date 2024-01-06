import React from 'react';
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import WorkerRegister from './pages/worker/Register';
import WorkerDetails from './components/worker/WorkerDetails';

const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path='/worker/register' element={<WorkerRegister />} />
      <Route path='/worker/:workerId' element={<WorkerDetails />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

const Routes = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default Routes;