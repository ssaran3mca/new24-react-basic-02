import UserContext from "../utils/UserContext";
import { useContext, useState } from "react";

const About = () => {
  const { logInUser, setUserName } = useContext(UserContext);
  return (
    <div>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First About Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="mt-5 text-center">
        <input
          className="form-control"
          value={logInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <p> {logInUser}</p>
      </div>
    </div>
  );
};
export default About;
