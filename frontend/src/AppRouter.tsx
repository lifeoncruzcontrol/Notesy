import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

const AppRouter: React.FC = () => {
  return(
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
};

export default AppRouter;