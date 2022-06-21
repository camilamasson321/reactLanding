import React from "react";
import Navbarra from "/workspace/reactLanding/src/js/component/barra.jsx";
import Jumbotron from "/workspace/reactLanding/src/js/component/jumbo.jsx";
import Cardcluster from "/workspace/reactLanding/src/js/component/cardgroups.jsx";
import Footer from "/workspace/reactLanding/src/js/component/footer.jsx";
import "/workspace/reactLanding/src/styles/index.css";

//create your first component
const Home = () => {
  return (
    <div className="parent">
      <Navbarra />
      <Jumbotron
        title="A Warm Welcome!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		  "
        buttonLabel="Call to Action!"
        buttonURL="https://reactjs.org/"
      />
      <Cardcluster />
      <Footer />
    </div>
  );
};

export default Home;
