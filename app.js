import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "header" }, "heading my style 1"),
    React.createElement("h1", { id: "header" }, "heading my style 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "header" }, "heading my style 2"),
    React.createElement("h1", { id: "header" }, "heading my style 2"),
  ]),
]);
//React function component
const TitleCom = () => (
  <div>
    <h1 className="h1">JSX Text view </h1>
    <h1 className="h1">JSX Text view </h1>
  </div>
);

const HeaderComponet = () => (
  <div>
    <h1 className="h1">JSX Text view HeaderComponet </h1>
    <h1 className="h1">JSX Text view HeaderComponet</h1>
  </div>
);
//React Elelmet
const text = <p>Details Information</p>;

const headerjsx = (
  <div>
    <h1 className="h1"> jsx </h1>
    <h1 className="h1">JSX </h1>
    <br />
    {parent}
    <br />
    {HeaderComponet()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headerjsx);
