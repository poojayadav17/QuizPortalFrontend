import React, { Component } from "react";
import { ProfileComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/config";
import { isEmpty } from "loadsh";
import { mobileRegex } from "../../../utils/helper";

const token = localStorage.getItem("sessionToken");
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
      errorPopUp: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    const options = {
      headers: { Authorization: `${token}` },
    };
    let id = localStorage.getItem("userId");
    axios.get(`${base_url}/user/${id}/profile`, options).then(
      (res) => {
        const profileData = res.data.data;
        this.setState({ data: profileData });
      })
      .catch((error) => {
        this.setState({ errorPopUp: true });
        this.setState({ errorMessage: error.response.data.message });
      });
  }

  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };

  errorHandleChange = () => {
    this.setState({ errorPopUp: false });
  }

  updateProfile = () => {
    if (isEmpty(this.validation())) {
      const options = {
        headers: { Authorization: `${token}` },
      };

      let id = localStorage.getItem("userId");

      axios
        .post(`${base_url}/user/${id}/`, this.state.data, options)
        .then((response) => {
          this.props.history.push("/home");
        })
        .catch((error) => {
          this.setState({ errorPopUp: true });
          this.setState({ errorMessage: error.response.data.message });
        });
    }
  }

  validation = () => {
    let error = {};
    if (!this.state.data.name)
      error.name = "Name is required.";
    if (!this.state.data.mobile)
      error.mobile = "Mobile number is required.";

    if (this.state.data.mobile && !mobileRegex.test(this.state.data.mobile))
      error.email = "Invalid mobile number.";

    this.setState({ error: error });
  };

  render() {
    return (
      <ProfileComponent
        data={this.state.data}
        handleChange={this.handleChange}
        updateProfile={this.updateProfile}
        errorPopUp={this.state.errorPopUp}
        errorMessage={this.state.errorMessage}
        errorHandleChange={this.errorHandleChange}
      />
    );
  }
}
export default ProfileContainer;
