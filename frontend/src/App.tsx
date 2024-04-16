import React, { useState, useEffect } from 'react';
import { firebaseAuth } from './config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './Navigation';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    })
  }, []);
  return (
    <div>
      <Header />
      <br />
      <BrowserRouter>
      {loggedIn && <Navigation />}
      <br />
      <AppRouter loggedIn={loggedIn}/>
      </BrowserRouter>
    </div>
  )
};

export default App;