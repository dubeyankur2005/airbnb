import "./HomeCard.css";
function HomeCard({ item }) {

  return (

    <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

      <img

        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"

        className="card-img-top"

        alt="house"

      />

      <div className="card-body">

        <h4 className="fw-bold">

          {item.houseName}

        </h4>

        <p className="text-secondary">

          📍 {item.location}

        </p>

        <p className="fw-bold text-danger">

          ₹{item.rent}

          <span className="text-secondary fw-normal">

            {" "} / month

          </span>

        </p>

        <p>

          ⭐ {item.rating}

        </p>

        <p className="text-secondary">

          👤 {item.ownerName}

        </p>

      </div>

    </div>

  );

}

export default HomeCard;