import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { LoggedInProp } from './interfaces/loggedInProp';
import Home from './pages/Home';
import History from './pages/History';
import Login from './pages/Login';
import Signup from './pages/Signup';

const AppRouter: React.FC<LoggedInProp> = ( {loggedIn} ) => {
  return(
    <Routes>
      {loggedIn ? (        
        <>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Navigate to="/home" />} />
          <Route path="/signup" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route index path="/" element={<Login />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Navigate to="/login" />} />
          <Route path="/history" element={<Navigate to="/login" />} />
        </>   
      )   
      }

    </Routes>
  )
};

export default AppRouter;