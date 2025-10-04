import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Portfolio/Intro';
import About from './Portfolio/About';
import Skills from './Portfolio/Skills';
import Games from './Portfolio/GameProjects';
import Projects from './Portfolio/OtherProjects';
import Outro from './Portfolio/Outro';
import Links from './Portfolio/Links';
import Divider from './Portfolio/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Divider />
    <About />
    <Divider />
    <Skills />
    <Divider />
    <Games />
    <Divider />
    <Projects />
    <Divider />


    <Outro />
    <Links />
  </React.StrictMode>
);