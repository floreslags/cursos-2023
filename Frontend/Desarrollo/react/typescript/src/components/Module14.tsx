import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Contact } from "../pages/Contact";
import { Provider } from "react-redux";
import { store } from "../utils/store";

export const Module14 = () => {
  return (
    <div>
      <h2>Module 14 - Redux Toolkit</h2>
      <Provider store={store}>
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
