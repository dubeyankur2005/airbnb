import "./Hero.css";

function Hero() {

  return (

    <div className="hero-section">

      <div className="hero-overlay">

        <h1>Find your next stay</h1>

        <p>Explore amazing places around you</p>

        <div className="search-box">

          <input
            type="text"
            placeholder="📍 Search location"
          />

          <input
            type="text"
            placeholder="📅 Check In"
          />

          <input
            type="text"
            placeholder="📅 Check Out"
          />

          <button>

            🔍 Search

          </button>

        </div>

      </div>

    </div>

  );

}

export default Hero;