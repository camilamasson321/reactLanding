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
        <Jumbotron />
        <div className="row mt-3 mb-3">
          <Cardcluster />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
