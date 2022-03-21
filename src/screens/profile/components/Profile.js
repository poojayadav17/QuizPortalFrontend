import React from "react";
import { CustomButton, CustomInput, CustomDatePicker, CustomErrorPopup } from "../../../shared";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { CustomRadioButton } from "../../../shared";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { gender } from "../../../shared/constants";


const useStyles = makeStyles(() => ({
  paper: {
    margin: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    marginTop: "15px",
    marginLeft: "0px",
    width: "100%",
  },
  gender: {
    marginTop: "15px",
    width: "98%"
  },
  btn: {
    marginTop: "20px",
  },
}));

const ProfileComponent = ({ data, handleChange, updateProfile, errorPopUp, errorMessage, errorHandleChange }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item md={4}></Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square style={{ margin: "30px" }}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <CustomInput
            name="name"
            type="text"
            label="Name"
            value={data.name}
            placeholder={data.name}
            handleChange={(value) => handleChange(value, "name")}
          />
          <CustomInput
            name="mobile"
            type="text"
            label="Mobile"
            value={data.mobile}
            placeholder={data.mobile}
            handleChange={(value) => handleChange(value, "mobile")}
          />
          <CustomInput
            name="email"
            type="text"
            label="Email"
            value={data.email}
            placeholder={data.email}
            disabled={true}
          />

          <Grid className={classes.calendar}>
            <CustomDatePicker
              value={data.dob}
              handleChange={(value) => handleChange(value, "dob")}
              label="Date Of Birth"
            />
          </Grid>

          <Grid className={classes.gender}>
            <CustomRadioButton options={gender} label="Gender" value={data.gender}
              handleChange={(value) => handleChange(value, "gender")}
            />
          </Grid>

          <Grid className={classes.btn}>
            <CustomButton name="Update Profile" handleClick={updateProfile} />
          </Grid>
        </div>
      </Grid>
      <CustomErrorPopup open={errorPopUp} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
};

export default ProfileComponent;
