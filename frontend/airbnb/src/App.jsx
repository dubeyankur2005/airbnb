import { useState } from "react";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./component/Home";
import AddHome from "./component/AddHome";
import Favorites from "./component/Favourites"
import Booking from "./component/Booking"
import HostHome from "./component/HostHome"
import Navbar from "./component/Navbar";

import { Routes, Route } from "react-router-dom";

function App () {

  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="/add-home" element={<AddHome />}/>

      <Route path="/favorites" element={<Favorites/>}/>

      <Route path="/booking" element={<Booking />} />

      <Route path="/host-house" element = {<HostHome />} />


    </Routes>
    
    
    </>
  );
}

export default App;