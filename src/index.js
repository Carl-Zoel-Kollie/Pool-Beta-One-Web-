import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './Feed';
import {BrowserRouter as Router} from"react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);


