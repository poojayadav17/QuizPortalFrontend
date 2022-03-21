import React, { Component } from "react";
import { HomeComponent } from "../components";
import base_url from "../../../utils/config";
import axios from "axios";
import { javaImg } from "../../../assets/image";

class HomeContainer extends Component {
  state = {
    quizzes: [],
    errorPopUp: false,
    errorMessage: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("sessionToken");
    const options = {
      headers: { Authorization: `${token}` },
    };
    axios.get(`${base_url}/quiz/`, options).then(
      (res) => {
        const quizzes = res.data.data;
        quizzes.forEach((item, index) => {
          item.image = javaImg;
        });
        this.setState({ quizzes: quizzes });
      },
      (error) => { 
        this.setState({ errorPopUp: true });
        this.setState({ errorMessage: "No quiz found." });
      }
    );
  }
  errorHandleChange = () => {
    this.setState({ errorPopUp: false });
  }

  handleClick = (id) => {
    localStorage.setItem("quizId", id);
    this.props.history.push("/quizpage");
  };

  render() {
    return (
      <HomeComponent 
      data={this.state.quizzes} 
      handleClick={this.handleClick} 
      errorPopUp={this.state.errorPopUp}
      errorMessage={this.state.errorMessage}
      errorHandleChange={this.errorHandleChange}
      />
    );
  }
}

export default HomeContainer;
