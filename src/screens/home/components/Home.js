import * as React from "react";
import { CustomCard, CustomErrorPopup } from "../../../shared";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
    padding: "20px",
  },
}));

const HomeComponent = ({ data, handleClick, errorPopUp, errorMessage, errorHandleChange }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Box>
        <Grid container justifyContent="center">
          {data.length
            ? data.map((item) => (
              <CustomCard
                image={item.image}
                description={item.description}
                handleClick={() => handleClick(item.id)}
              />
            ))
            : <h3>No Quiz</h3>}
        </Grid>
      </Box>
      <CustomErrorPopup open={errorPopUp} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
};

export default HomeComponent;
