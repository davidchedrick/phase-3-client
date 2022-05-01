import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
);

