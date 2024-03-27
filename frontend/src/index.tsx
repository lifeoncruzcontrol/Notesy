import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
root.render(
  <App />
)
