import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/Home";
import { Posts } from "./components/Posts";
import './styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { Redirect } from './components/Redirect';
import NotFound from './components/NotFound';
import Post from './components/Post';
import Abc from './components/Abc';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/abc" element={<Abc />} />


        <Route path="/Posts/" element={<Posts />} >
          <Route path=':id' element={<Post />} />
        </Route>

        <Route path="/Posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
);
