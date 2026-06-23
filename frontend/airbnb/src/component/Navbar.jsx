import { FaAirbnb, FaUserCircle } from "react-icons/fa";

function Navbar({ setState }) {
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

            <a

              href="#"

              className="nav-link fw-semibold"

              onClick={(e) => {

                e.preventDefault();

                setState("Home");

              }}

            >

              Home

            </a>

          </li>


          <li className="nav-item">

            <a

              href="#"

              className="nav-link fw-semibold"

              onClick={(e) => {

                e.preventDefault();

                setState("add-home");

              }}

            >

              Add Home

            </a>

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