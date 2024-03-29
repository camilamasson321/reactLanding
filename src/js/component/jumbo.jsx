import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  //here you have to return expected html using the properties being passed to the component
  return (
    <div className="container">
      <div className="jumbotron-fluid bg-light m-4 p-4">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <a
          className="btn btn-primary btn-lg"
          href={props.buttonURL}
          role="button"
        >
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  //proptypes here
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default Jumbotron;
