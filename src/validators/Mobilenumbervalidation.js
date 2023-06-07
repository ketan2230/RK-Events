import React from "react";
import tw from "twin.macro";

const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-primary-500`;
class Mobilenumbervalidation extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      input["Mobilenumber"] = "";
      this.setState({ input: input });
    }
    this.setState({
      input,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      input["Mobilenumber"] = "";
      this.setState({ input: input });
      alert("Mobile Numver submited Successfully");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["Mobilenumber"]) {
      isValid = false;
      errors["Mobilenumber"] = "Please enter your Mobile Number.";
    }

    if (typeof input["Mobilenumber"] !== "undefined") {
      console.log("if");
      var pattern = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
      );
      if (!pattern.test(input["Mobilenumber"])) {
        isValid = false;
        errors["Mobilenumber"] = "Please Enter Number Only";
      } else if (input["Mobilenumber"].length !== 10) {
        isValid = false;
        errors["Mobilenumber"] = "Please enter valid  Mobile Number.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
          <><Input
            type="text"
            name="Mobilenumber"
            placeholder="Contact Number"
            value={this.state.input.Mobilenumber}
            onChange={this.handleChange} /><div className="text-danger mrgnbtn">
                {this.state.errors.Mobilenumber}
            </div></>
    );
  }
}

export default Mobilenumbervalidation;
