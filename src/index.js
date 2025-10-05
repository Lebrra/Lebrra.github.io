import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Portfolio/Home";
import GameJams from "./Portfolio/GameJams";
import { useLayoutEffect } from 'react';

// https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/GameJams" element={<GameJams />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);