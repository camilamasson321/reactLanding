import React from "react";

const Cardcluster = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
<div className="card-group">
  <div className="card">
    <img src={props.imageURL} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text"><small className="text-muted">{props.seconddescription}</small></p>
      <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
    </div>
  </div>
  <div className="card">
    <img src={props.imageURL} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text"><small className="text-muted">{props.seconddescription}</small></p>
      <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
    </div>
  </div>
  <div className="card">
    <img src={props.imageURL} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text"><small className="text-muted">{props.seconddescription}</small></p>
      <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
    </div>
  </div>
</div>
)};

Cardcluster.propTypes = {
	//proptypes here
	title: PropTypes.string,
  description: Proptypes.string,
  seconddescription: Proptypes.string,
  imageURL:Proptypes.string,
  buttonURL: Proptypes.string,
};

ReactDOM.render(
	<Cardcluster
	  title="Cool Card"
    description="I love this card"
    seconddescription="this is the best card"
    buttonURL="Find out More!"
	/>,
  
	document.querySelector("#myDiv")
  );


export default Cardcluster;
