import React from "react";
import PropTypes from "prop-types";

const Cardcluster = (props) => {
  //here you have to return expected html using the properties being passed to the component
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
      <div className="card col">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {props.title}
          </h5>
          <p className="card-text">
            <small className="text-muted">{props.seconddescription}</small>
          </p>
          <div className="card-footer row bg-transparent">
            <a
              href={props.buttonUrl}
              className="btn btn-primary d-flex justify-content-center"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="card col">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {props.title}
          </h5>
          <p className="card-text">
            <small className="text-muted">{props.seconddescription}</small>
          </p>
          <div className="card-footer row bg-transparent">
            <a
              href={props.buttonUrl}
              className="btn btn-primary d-flex justify-content-center"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="card col">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {props.title}
          </h5>
          <p className="card-text">
            <small className="text-muted">{props.seconddescription}</small>
          </p>
          <div className="card-footer row  bg-transparent">
            <a
              href={props.buttonUrl}
              className="btn btn-primary d-flex justify-content-center"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="card col">
        <img src={props.imageURL} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            {props.title}
          </h5>
          <p className="card-text">
            <small className="text-muted">{props.seconddescription}</small>
          </p>
          <div className="card-footer row  bg-transparent">
            <a
              href={props.buttonUrl}
              className="btn btn-primary d-flex justify-content-center"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Cardcluster.PropTypes = {
  //proptypes here
  title: PropTypes.string,
  description: PropTypes.string,
  seconddescription: PropTypes.string,
  imageURL: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
};

// ReactDOM.render(
// 	<Cardcluster
// 	  title="Cool Card"
//     description="I love this card"
//     seconddescription="this is the best card"
//     buttonURL="Find out More!"
// 	/>,

// 	document.querySelector("#myDiv")
//   );

export default Cardcluster;
