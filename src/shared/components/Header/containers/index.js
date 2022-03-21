import React, { Component } from 'react'
import HeaderComponent from '../components';
import axios from "axios";
import base_url from "../../../../utils/config";
import { withRouter } from "react-router-dom";

const token = localStorage.getItem("sessionToken");
class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (id) => {
    if (id == 1) {
      if (token != null) this.props.history.push("/profile");
    }
    if (id == 2) {
      if (token != null) this.props.history.push("/home");
    }
    if (id == 3) {
      if (token == null) this.props.history.push("/signin");
      const options = {
        headers: { Authorization: `${token}` },
      };

      axios
        .post(`${base_url}/user/logout`, `${token}`, options)
        .then((response) => {
          localStorage.clear();
          window.location.href = "/signin";
        })
        .catch((error) => {
          console.log(error);
          window.location.href = "/signin";
        });
    }
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <HeaderComponent
        token={token}
        anchorEl={this.state.anchorEl}
        handleClose={this.handleClose}
        handleMenu={this.handleMenu}
      />
    )
  }
}

export default withRouter(HeaderContainer);