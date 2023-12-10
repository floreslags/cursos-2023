import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../pages/Menu";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Start } from "../pages/Start";
import { Navbar } from "./Navbar";

export const Module8 = () => {
  return (
    <div>
      <h2>Module 8 - React Router DOM</h2>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
