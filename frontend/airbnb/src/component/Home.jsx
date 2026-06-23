import { useState, useEffect } from "react";
import Hero from "./Hero";
import HomeCard from "./HomeCard";

function Home (){

  const[home, setHome] = useState([])

  useEffect(() =>{

    fetch("http://localhost:3000/home")
    .then((res) => res.json())
    .then((data) =>{
      setHome(data);
    })

    .catch((error) =>{
      console.log(error);
    });
  }, []);

  return (
  <>

  <Hero></Hero>

  <div className="container mt-5">

  <div className="d-flex justify-content-between align-items-center mb-4">

    <h2>

      🏠 Featured Homes

    </h2>

  </div>


  <div className="row g-4">

    {home.map((item, index) => (

      <div
        className="col-md-3"

        key={index}
      >

        <HomeCard item={item} />

      </div>

    ))}

  </div>

</div>
 
  
  </>
  )
}

export default Home;