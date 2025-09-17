import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Portfolio/Intro';
import About from './Portfolio/About';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <div style={{marginTop: "200px"}}/>
    <About />
    <div style={{marginTop: "200px"}}/>
  </React.StrictMode>
);