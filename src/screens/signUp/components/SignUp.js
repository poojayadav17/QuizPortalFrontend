import React from "react";
import { CustomButton, CustomInput, CustomErrorPopup } from "../../../shared";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppRegistrationTwoToneIcon from "@mui/icons-material/AppRegistrationTwoTone";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { RegisterImg } from "../../../assets/image";

const useStyles = makeStyles(() => ({
  root: {
    padding: "70px",
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
    marginTop: "30px",
    padding: "50px",
  },
  imgStyle: {
    height: "90%",
    width: "90%",
  },
  linkStyle: {
    marginTop: "20px",
    alignItems: "center",
  },
  btn: {
    marginTop: "20px",
  },
  avatar: {
    backgroundColor: "white",
  },
  heading: {
    fontWeight: "bold",
    color: "black",
  },
}));

function SignUpComponent({ data, handleChange, signUp, error, errorPopUp, errorMessage, errorHandleChange, redirectToSignUp }) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={0} sm={0} md={6}>
        <img src={RegisterImg} alt="registerImg" className={classes.imgStyle} />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <AppRegistrationTwoToneIcon />
          </div>
          <Typography component="h1" className={classes.heading} variant="h5">
            Register to Quizish
          </Typography>
          <CustomInput
            name="name"
            type="text"
            label="Name"
            placeholder={"Enter your name"}
            value={data.name}
            error={error.name}
            helperText={error.name}
            handleChange={(value) => handleChange(value, "name")}
          />
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
            name="mobile"
            type="text"
            label="Mobile"
            placeholder={"Enter your mobile"}
            value={data.mobile}
            error={error.mobile}
            helperText={error.mobile}
            handleChange={(value) => handleChange(value, "mobile")}
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
          <CustomInput
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder={"Confirm your password"}
            value={data.confirmPassword}
            error={error.confirmPassword}
            helperText={error.confirmPassword}
            handleChange={(value) => handleChange(value, "confirmPassword")}
          />
          <Grid className={classes.btn}>
            <CustomButton name="Sign Up" handleClick={signUp} />
            <div className={classes.linkStyle}>
              <Grid item>
                <div style={{ cursor: "pointer", color: "blue", textDecoration:"underline" }} onClick={(value) => redirectToSignUp()}>Already have an account? Sign In</div>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
      <CustomErrorPopup open={errorPopUp} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
}

export default SignUpComponent;
