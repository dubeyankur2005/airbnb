import { useState } from "react";
import "./AddHome.css"

function AddHome() {

  // the submittedData state is not required to send data to the backend . we added it only because if we need to  display the submitted data on the screen after clicking submit

  // const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault();
 
    // setSubmittedData(homeData);

    try{

      const response = await fetch("http://localhost:3000/add-home",
        { 
          method:"POST",

          headers :{
            "Content-Type" :"application/json"
          },

          body: JSON.stringify(homeData),

        }
      );

      const data = await response.json();
      console.log(data);
    
    }
    catch(error){
      console.log(error);

    }
  };

  

  



  const [homeData, setHomeData] = useState({
    houseName: "",
    rent: "",
    location: "",
    rating: "",
    ownerName: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setHomeData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  return (

<div className="container my-5">

  <div className="row bg-white shadow rounded-4 p-4">

    {/* Left Side */}

    <div className="col-md-4 text-center">

      <img

        src="https://cdn-icons-png.flaticon.com/512/619/619153.png"

        alt="house"

        className="home-image"

      />

      <h2 className="mt-4 fw-bold">

        List your space

      </h2>

      <p className="text-secondary">

        Share your place with thousands of guests.

      </p>

    </div>


    {/* Right Side */}

    <div className="col-md-8">

      <h2 className="mb-4 fw-bold">

        🏠 Add New Property

      </h2>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-md-6 mb-4">

            <label>House Name</label>

            <input

              type="text"

              className="form-control form-control-lg"

              placeholder="Enter house name"

              name="houseName"

              value={homeData.houseName}

              onChange={handleChange}

            />

          </div>


          <div className="col-md-6 mb-4">

            <label>Rent (₹)</label>

            <input

              type="number"

              className="form-control form-control-lg"

              placeholder="Enter rent"

              name="rent"

              value={homeData.rent}

              onChange={handleChange}

            />

          </div>


          <div className="col-md-6 mb-4">

            <label>Location</label>

            <input

              type="text"

              className="form-control form-control-lg"

              placeholder="Enter location"

              name="location"

              value={homeData.location}

              onChange={handleChange}

            />

          </div>


          <div className="col-md-6 mb-4">

            <label>Rating</label>

            <input

              type="number"

              className="form-control form-control-lg"

              placeholder="Enter rating"

              name="rating"

              value={homeData.rating}

              onChange={handleChange}

            />

          </div>


          <div className="col-md-12 mb-4">

            <label>Owner Name</label>

            <input

              type="text"

              className="form-control form-control-lg"

              placeholder="Enter owner name"

              name="ownerName"

              value={homeData.ownerName}

              onChange={handleChange}

            />

          </div>

        </div>


        <div className="d-grid">

          <button

            type="submit"

            className="btn btn-danger btn-lg rounded-4"

          >

            🏠 Add Property

          </button>

        </div>

      </form>

    </div>

  </div>

</div>

);


}

export default AddHome;
