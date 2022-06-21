import React from "react";

const Cardcluster = () => {
  //here you have to return expected html using the properties being passed to the component
  const cardsArray = [
    { title: "Card 1",
  photoURL: "https://picsum.photos/300/300",
content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" },
    { title: "Card 2", photoURL: "https://picsum.photos/300/300", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex", },
    { title: "Card 3", photoURL:"https://picsum.photos/300/300", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex", },
    { title: "Card 4",photoURL:"https://picsum.photos/300/300", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",},
  ];
  const cards = cardsArray.map((card, i) => {
    return (
      <div className="card" key={i} style={{width: "30rem"}}>
      <img src={card.photoURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.content}</p>
        <a href="#" className="btn btn-primary">Find out More!</a>
      </div>
    </div>
    );
  
  });
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      {cards}
    </div>
  );
};


export default Cardcluster;
// style={{width: "27rem"}}
