import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Portfolio/Intro';
import About from './Portfolio/About';
import Skills from './Portfolio/Skills';
import Links from './Portfolio/Links';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <div className="text-block-spacer"/>
    <About />
    <div className="text-block-spacer"/>
    <Skills />
    <div className="text-block-spacer"/>

    <Links />
  </React.StrictMode>
);