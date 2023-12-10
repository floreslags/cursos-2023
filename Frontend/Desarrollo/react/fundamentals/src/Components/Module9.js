import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "../pages/Start";
import { Profile } from "../pages/Profile";
import { Contact } from "../pages/Contact";
import { Navbar } from "./Navbar";
import { Menu } from "../pages/Menu";

export const ModNineContext = createContext();

export const Module9 = () => {
  const [userName, setUserName] = useState("Sergio");

  return (
    <div>
      <h2>Modulo 9 - Gestion de Estados (useContext Hook)</h2>
      <ModNineContext.Provider value={{userName,setUserName}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Start userName={userName} />} />
            <Route path='/menu' element={<Menu />} />
            <Route
              path='/profile'
              element={
                <Profile userName={userName} setUserName={setUserName} />
              }
            />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ModNineContext.Provider>
    </div>
  );
};
