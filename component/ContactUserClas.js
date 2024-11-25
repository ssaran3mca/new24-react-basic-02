import { Component } from "react";
class ContactUserClas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoData: {
        siteTitle: "empty",
        timeZone: "sss",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");
    const data = await fetch(
      "https://base-template.squarespace.com/blog/?format=json-pretty"
    );
    const json = await data.json();
    this.setState({
      infoData: json.website,
    });
    this.timer = setInterval(() => {
      console.log("Saravanan style");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    // console.log(this.props.name + "Child render");
    const { siteTitle, timeZone } = this.state.infoData || {};

    return (
      <div>
        <h4>Class name </h4>

        <p>Site Title : {siteTitle}</p>
        <p>TimeZone : {timeZone}</p>
        <button
          className="btn btn-primary mb-4"
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          onClick
        </button>
      </div>
    );
  }
}
export default ContactUserClas;
