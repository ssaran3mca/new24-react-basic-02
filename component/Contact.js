import ContactUserFun from "./ContactUserFun";
import ContactUserClas from "./ContactUserClas";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <div className="container-fluid p-5 bg-primary text-white text-center">
          <h1>Contact Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <div className="container mt-5 pt-5 ">
          <div className="row justify-content-center ">
            <div className="col-sm-3">
              <ContactUserFun name="Saravanan" location="erode" />
            </div>
            <div className="col-sm-3">
              <ContactUserClas name="First" location="Perundurai" />
              {/* <ContactUserClas name="Second" location="Chittode" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
