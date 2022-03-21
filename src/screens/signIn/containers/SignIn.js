import React, { Component } from "react";
import { SignInComponent } from "../components";
import base_url from "../../../utils/config";
import axios from "axios";
import {isEmpty} from "loadsh";
import { ThumbUpSharp } from "@mui/icons-material";

class SignInContainer extends Component {
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

  redirectToSignUp=()=>{
    this.props.history.push("/signup");
  }

  errorHandleChange = () => {
    this.setState({ errorPopUp: false });
  }

  signIn = () => {
    if (isEmpty(this.validation())) {
      const options = {
        headers: { Headers: "value" },
      };
      axios
        .post(`${base_url}/user/login`, this.state.data, options)
        .then((response) => {
          localStorage.setItem("sessionToken", response.data.data.token);
          localStorage.setItem("userId", response.data.data.user.id);
          
          window.location.href = "/home";
        })
        .catch((error) => {
          this.setState({ errorPopUp: true });
          this.setState({ errorMessage: error.response.data.message });
        });
    }

  };

  validation = () => {
    let error = {};
    if (!this.state.data.email) {
      error.email = "Email is required.";
    }
    if (!this.state.data.password) {
      error.password = "Password is required.";
    }
    this.setState({ error: error });
    return error;
  };

  render() {
    return (
      <SignInComponent
        data={this.state.data}
        handleChange={this.handleChange}
        signIn={this.signIn}
        error={this.state.error}
        errorPopUp={this.state.errorPopUp}
        errorMessage={this.state.errorMessage}
        errorHandleChange={this.errorHandleChange}
        redirectToSignUp={this.redirectToSignUp}
      />
    );
  }
}

export default SignInContainer;