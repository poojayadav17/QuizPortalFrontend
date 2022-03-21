import React, { Component } from "react";
import { QuizComponent } from "../components";
import base_url from "../../../utils/config";
import axios from "axios";

const token = localStorage.getItem("sessionToken");

class QuizContainer extends Component {
  state = {
    questions: [],
    answers: {},
    submitResponse: {},
    resultOpen: false,
    errorPopUp: false,
    errorMessage: "",
  };

  componentDidMount = () => {
    const options = {
      headers: { Authorization: `${token}` },
    };

    let id = localStorage.getItem("quizId");
    axios
      .get(`${base_url}/quiz/${id}/question`, options)
      .then((response) => {
        const questions = response.data.data;
        this.setState({ questions: questions });
      })
      .catch((error) => {
        this.setState({ errorPopUp: true });
        this.setState({ errorMessage: "No questions in the quiz." });
      });
  };

  onChangeValue = (id, value) => {
    let { answers } = this.state;
    answers[id] = value;
    this.setState({ answers: answers });
  };

  errorHandleChange = () => {
    this.setState({ errorPopUp: false });
  }

  submitQuiz = () => {
    let { answers } = this.state;
    let ans = Object.keys(answers).map((id) => {
      return {
        id: id,
        answer: answers[id],
      };
    });
    let submitAnswers = { submitAnswers: ans };

    const options = {
      headers: { Authorization: `${token}` },
    };
    let quizId = localStorage.getItem("quizId");

    axios
      .post(`${base_url}/quiz/${quizId}/submit`, submitAnswers, options)
      .then((response) => {
        let responseAnswers = response.data.data;
        this.setState({ submitResponse: responseAnswers });
      })
      .catch((error) => {
        this.setState({ errorPopUp: true });
        this.setState({ errorMessage: error.response.data.message });
      });

    if (Object.keys(answers).length < 10) {
      this.setState({ errorPopUp: true });
      this.setState({ errorMessage: "Please answer the remaining questions." });
    } else {
      this.handleOpen();
      this.setState({ answers: answers });
    }
  };

  handleClose = () => {
    this.setState({ resultOpen: false });
    this.props.history.push("/home");
  };

  handleOpen = () => {
    this.setState({ resultOpen: true });
  };

  render() {
    return (
      <QuizComponent
        data={this.state.questions}
        onChangeValue={this.onChangeValue}
        answers={this.state.answers}
        submitQuiz={this.submitQuiz}
        submitResponse={this.state.submitResponse}
        handleOpen={this.state.resultOpen}
        handleClose={this.handleClose}
        errorPopUp={this.state.errorPopUp}
        errorMessage={this.state.errorMessage}
        errorHandleChange={this.errorHandleChange}
      />
    );
  }
}

export default QuizContainer;
