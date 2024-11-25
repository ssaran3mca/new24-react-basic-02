import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";
const ContactUserFun = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    const timmer = setInterval(() => {
      console.log("timer in fuction");
    }, 1000);

    return () => {
      clearInterval(timmer);
      console.log("return fuction return");
    };
  }, []);

  const userDetails = useContext(UserContext);

  return (
    <div className="mb-5">
      <h4>Function name </h4>
      <p>Count : {count}</p>
      <p>Count 1 : {count1}</p>
      <button
        className="btn btn-primary mb-4"
        type="button"
        onClick={() => {
          setCount(count + 1);
          setCount1(count1 + 1);
        }}
      >
        onClick
      </button>
      <div>Name : {name}</div>
      <div>Loaction : {location}</div>
      <div>{userDetails.logInUser}</div>
    </div>
  );
};
export default ContactUserFun;
