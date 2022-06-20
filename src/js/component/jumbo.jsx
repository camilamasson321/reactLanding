import React from "react";


const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
    return (
	<div className="jumbotron m-5">
		<h1 className="display-4">{props.title}</h1>
		<p className="lead">{props.description}</p>
		<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
	</div>
)};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="A Warm Welcome!"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		buttonLabel="Call to Action!"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
export default Jumbotron;