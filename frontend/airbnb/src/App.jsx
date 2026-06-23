import { useState } from "react";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./component/Home";
import AddHome from "./component/AddHome";

import Navbar from "./component/Navbar";

function App () {

  const[state, setState] = useState("Home");


  return (
    <>
    <Navbar setState={setState} />
    { state === "Home" && <Home />  }
    { state === "add-home" && <AddHome />}
    
    </>
  );
}

export default App;