import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <>
<div className="container-fluid nav bg">
        <div className="row">
            <div className="col-10 mx-auto">

            <nav id="nav" className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Infinity</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        </div>

</div>
        </>
    );
};

export default Navbar;