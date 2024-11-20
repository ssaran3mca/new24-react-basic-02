import React from "react";
import ReactDom from "react-dom/client";

const MenuComponont = () => (
  <div>
    <div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>My First React Page</h1>
      <p>{menu_details}</p>
    </div>
    <BodyComponot />
  </div>
);
const menu_details = "Resize this responsive page to see the effect!";
const SubDetailsCom = () => {
  return (
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
      </p>
    </div>
  );
};

const BodyComponot = () => (
  <div className="container mt-5">
    <div className="row">
      <SubDetailsCom />
      {SubDetailsCom()}
      <SubDetailsCom> </SubDetailsCom>
    </div>
  </div>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MenuComponont />);
