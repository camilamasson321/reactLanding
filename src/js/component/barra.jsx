import React from "react";
import PropTypes from "prop-types";

//create your first component
const Navbarra = (props) => {
  //here you have to return expected html using the properties being passed to the component
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-2" href={props.navbarname}>
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse  justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbarra.propTypes = {
  //proptypes here
  navbarname: PropTypes.string,
};


export default Navbarra;
