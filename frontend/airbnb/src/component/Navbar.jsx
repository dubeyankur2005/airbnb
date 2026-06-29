import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import "../App.css"

import {  NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">

      <div className="container-fluid">

        {/* Logo */}

        <div className="d-flex align-items-center">

          <FaAirbnb
            size={40}
            color="#FF385C"
          />

          <h2
            className="ms-2 fw-bold mb-0"
          >
            Airbnb Clone
          </h2>

        </div>

        {/* Menu */}

        <ul className="nav">
          <li className="nav-item">
            <NavLink 
              to="/"
              className="nav-link fw-semibold"
            >

              Home

            </NavLink>

          </li>
          <li className="nav-item">
            <NavLink to="/add-home"
              
              className="nav-link fw-semibold"
            >
              Add Home
            </NavLink>
          </li>

          
          <li className="nav-item">
            <NavLink to="/favorites"
              href="#"
              className="nav-link fw-semibold"
            >
              Favorites
            </NavLink>
          </li>



         
          <li className="nav-item">
            <NavLink to="/booking"
              href="#"
              className="nav-link fw-semibold"
            >
              Booking
            </NavLink>
          </li>




          
          <li className="nav-item">
            <NavLink to="/host-house"
              href="#"
              className="nav-link fw-semibold"
            >
              Host House
            </NavLink>
          </li>
        </ul>

        {/* Profile */}

        <FaUserCircle

          size={38}

          color="#555"

        />

      </div>

    </nav>
  );
}

export default Navbar;