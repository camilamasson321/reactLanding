import React from "react";
import Navbarra from "/workspace/reactLanding/src/js/component/barra.jsx";
import Jumbotron from "/workspace/reactLanding/src/js/component/jumbo.jsx";
import Cardcluster from "/workspace/reactLanding/src/js/component/cardgroups.jsx";
import Footer from "/workspace/reactLanding/src/js/component/footer.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbarra />
      <div className="container">
        <Jumbotron
          title="A Warm Welcome!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		  "
          buttonLabel="Call to Action!"
          buttonURL="https://reactjs.org/"
        />
        <div className="row- mt-3 mb-3">
          <Cardcluster
            title="Card Title"
            // description="I love this card"
            seconddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Find out More!"
			imageURL= "http://51ranchoutfitters.com/wp-content/uploads/2016/11/IMG_1255.jpg"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
