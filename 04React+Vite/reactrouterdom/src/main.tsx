import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/Home";
import { Posts } from "./components/Posts";
import './styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Posts/:id" element={<Posts />} />
        <Route path="/Posts" element={<Posts />} />


      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
);
