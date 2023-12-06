import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Name from './Contexts/NameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Name>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Name>
  </React.StrictMode>
);

