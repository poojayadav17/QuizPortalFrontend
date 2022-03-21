import React, { Component } from "react";
import { SignUpComponent } from "../components";
import base_url from "../../../utils/config";
import axios from "axios";
import { isEmpty } from "loadsh";
import { emailRegex, mobileRegex } from "../../../utils/helper";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
      errorPopUp: false,
      errorMessage: "",
    };
  }

  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };

  redirectToSignUp = () => {
    this.props.history.push("/signin");
  }

  errorHandleChange = () => {
    this.setState({ errorPopUp: false });
    this.setState({ errorMessage: "" });
  }

  signUp = () => {
    if (this.validation()) {
      const options = {
        headers: { Headers: "value" },
      };
      axios
        .post(`${base_url}/user/`, this.state.data, options)
        .then((response) => {
          localStorage.setItem("sessionToken", response.data.data.token);
          localStorage.setItem("userId", response.data.data.user.id);
          window.location.href = "/home";
        })
        .catch((error) => {
          this.setState({
            errorPopUp: true,
            errorMessage: error.response.data.message
          });
        });
    }
  };

  validation = () => {
    let error = {};
    if (!this.state.data.email)
      error.email = "Email is required.";

    if (!this.state.data.name)
      error.name = "Name is required.";

    if (!this.state.data.mobile)
      error.mobile = "Mobile is required.";

    if (!this.state.data.password)
      error.password = "Password is required.";

    if (!this.state.data.confirmPassword)
      error.confirmPassword = "Confirm password is required.";

    if (this.state.data.email && !emailRegex.test(this.state.data.email)) {
      error.email = "Invalid email id.";
    }

    if (this.state.mobile && !mobileRegex.test(this.state.data.mobile)) {
      error.mobile = "Invalid mobile number.";
    }

    if (this.state.data.password && (this.state.data.password).length < 8) {
      error.password = "Invalid password.";
    }

    if (this.state.data.confirmPassword && (this.state.data.password !== this.state.data.confirmPassword)) {
      error.confirmPassword = "Your password and confirm password did not match.";
    }

    this.setState({ error: error });
    if (!isEmpty(error)) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <SignUpComponent
        data={this.state.data}
        handleChange={this.handleChange}
        signUp={this.signUp}
        error={this.state.error}
        errorPopUp={this.state.errorPopUp}
        errorMessage={this.state.errorMessage}
        errorHandleChange={this.errorHandleChange}
        redirectToSignUp={this.redirectToSignUp}
      />
    );
  }
}

export default SignUpContainer;
