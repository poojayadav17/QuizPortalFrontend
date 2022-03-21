import React, { Component } from "react";
import PrivateLayout from "../layout/private";
import PublicLayout from "../layout/public";
import history from "../utils/history";

class Navigation extends Component {

  componentDidMount = () => {
    if (localStorage.getItem("sessionToken")) {
      history.push("/home");
    } else {
      history.push("/signin");
    }
  }

  render() {
    if (localStorage.getItem("sessionToken")) {
      return <PrivateLayout />
    }
    return <PublicLayout />
  }
}

export default Navigation;
