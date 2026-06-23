function Header( { setState }) {
  return (
    <>
      <div className="container">
        {" "}
        <header className="d-flex justify-content-center py-3">
          {" "}
          <ul className="nav nav-pills">
            {" "}
            <li className="nav-item">
              <a href="/" className="nav-link"
              onClick={(e) =>{
                e.preventDefault();
                setState("Home")
              }}
              >
                Go to Home
      
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="/" className="nav-link"
              onClick={(e) =>{
                e.preventDefault();
                setState('add-home')
              }}
              >
               Add Home 
              </a>
            </li>
          </ul>{" "}
        </header>{" "}
      </div>
    </>
  );
}

export default Header;
