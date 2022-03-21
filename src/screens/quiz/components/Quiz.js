import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import {
  CustomButton,
  CustomQuestionCard,
  CustomErrorPopup,
} from "../../../shared";

import { AnswerDialog } from "./";

const useStyles = makeStyles({
  btn: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});

const QuizComponent = ({
  data,
  onChangeValue,
  answers,
  submitQuiz,
  submitResponse,
  handleClose,
  handleOpen,
  errorPopUp,
  errorMessage,
  errorHandleChange
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Grid container style={{ justifyContent: "center" }}>
          <h1>Questions</h1>
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item paddingTop={1}>
            {{ data }.data.length ? (
              { data }.data.map((item, index) => (
                <CustomQuestionCard
                  index={index}
                  data={item}
                  description={item.description}
                  onChangeValue={onChangeValue}
                  answers={answers}
                />
              ))

            ) : (
              <Grid container>
                <h3> No questions in quiz </h3>
              </Grid>
            )}

            {{ data }.data.length ?
              <Grid container justifyContent="center">
                <Grid className={classes.btn}>
                  <CustomButton name=" Submit Quiz" handleClick={submitQuiz} />
                </Grid>
              </Grid> : null
            }

          </Grid>
        </Grid>
        <AnswerDialog
          resultOpen={handleOpen}
          submitResponse={submitResponse}
          handleClose={handleClose}
        />
      </Grid>
      <CustomErrorPopup open={errorPopUp} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </>
  );
};
export default QuizComponent;
