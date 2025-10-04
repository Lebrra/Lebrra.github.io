import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Portfolio/Intro';
import About from './Portfolio/About';
import Skills from './Portfolio/Skills';
import Games from './Portfolio/GameProjects';
import Links from './Portfolio/Links';
import Divider from './Portfolio/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';

import cat from './Portfolio/Games/none.png';
import { Image } from 'react-bootstrap';

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

    <Image src={cat} style={{width: "300px", marginBottom: "100px", display: "flex", justifySelf: "center"}} />
    <Links />
  </React.StrictMode>
);