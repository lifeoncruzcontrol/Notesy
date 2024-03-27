import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import AppRouter from './AppRouter';
import './styles/app/styles.css';

const App: React.FC = () => {
  return (
    <div>
      <h1 id="appname">Notesy</h1>
      <br />
      <BrowserRouter>
        <Navigation />
        <br />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
};

export default App;