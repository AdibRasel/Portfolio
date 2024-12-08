import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./Assets/Css/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Global npm start cmd: npm start -- --host 192.168.1.10
// project see link: http://192.168.1.10:3000