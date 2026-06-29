import { useState, useEffect } from "react";
import Hero from "./Hero";
import HomeCard from "./HomeCard";

function Home (){

  const[home, setHome] = useState([]);

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


  // Favorite
  const[favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) =>{
    if(favorites.includes(id)){
      setFavorites(favorites.filter((item) =>item !==id));
    } 
    else{
      setFavorites([...favorites, id]);
    }
  }

 /* Let's understand this code

Suppose:
favorites = ["101", "105"];
Now you click the heart on house "101".
This condition:
favorites.includes(id)
returns:
true
So we remove it:
favorites.filter((item) => item !== id)
Result:
["105"]
If you click house "110":
favorites.includes("110")
returns
false
So we add it:
setFavorites([...favorites, id]);
Result:
["101", "105", "110"] */

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

        <HomeCard 
        item={item}
        favorites={favorites}
        toggleFavorite={toggleFavorite} />

      </div>

    ))}

  </div>

</div>
 
  
  </>
  )
}

export default Home;