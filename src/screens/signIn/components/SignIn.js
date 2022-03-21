import React from "react";
import { CustomButton, CustomInput, CustomLink, CustomErrorPopup } from "../../../shared";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Login } from "../../../assets/image";

const useStyles = makeStyles(() => ({
  root: {
    padding: "100px",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px",
    padding: "20px",
  },
  submit: {
    color: "green",
  },
  imgStyle: {
    height: "100%",
    width: "100%",
  },
  linkStyle: {
    marginTop: "10px",
    alignItems: "center",
  },
  btn: {
    marginTop: "20px",
  },
  avatar: {
    color: "#89CFF0",
  },
  heading: {
    fontWeight: "bolder",
  },
  link: {
    marginTop: "20px",
  },
}));

const SignInComponent = ({ data, handleChange, redirectToSignUp, signIn, error, errorPopUp, errorMessage, errorHandleChange }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={0} md={6}>
        <img src={Login} alt="loginImg" className={classes.imgStyle} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <LoginIcon />
          </div>
          <div className={classes.heading}>
            <Typography component="h1" variant="h5">
              Sign in to Quizish
            </Typography>
          </div>
          <CustomInput
            name="email"
            type="text"
            label="Email"
            placeholder={"Enter your email"}
            value={data.email}
            error={error.email}
            helperText={error.email}
            handleChange={(value) => handleChange(value, "email")}
          />
          <CustomInput
            name="password"
            type="password"
            label="Password"
            placeholder={"Enter your password"}
            value={data.password}
            error={error.password}
            helperText={error.password}
            handleChange={(value) => handleChange(value, "password")}
          />
          <Grid className={classes.btn}>
            <CustomButton name="Sign In" handleClick={signIn} />
            <div className={classes.link}>
              <Grid item className={classes.linkStyle}>
                <div style={{ cursor: "pointer", color: "blue", textDecoration:"underline" }} onClick={(value) => redirectToSignUp()}>Don't have an account? Sign Up</div>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
      <CustomErrorPopup open={errorPopUp} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
};

export default SignInComponent;
