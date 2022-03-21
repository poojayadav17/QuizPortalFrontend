import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Typography } from "@mui/material";
import { CustomButton } from "../../../shared";

const AnswerDialog = ({ resultOpen, handleClose, submitResponse }) => {
  return (
    <Dialog
      fullWidth
      open={resultOpen}
      onClose={(_, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle style={{ textAlign: "center", textDecoration: "underline" }}>{"Score"}</DialogTitle>
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ fontSize: "20px" }}>
            <Typography style={{textAlign:"center"}}>Correct Answers : {submitResponse.score}</Typography>
          </Grid>
          <Grid item xs={12} justify="center" style={{ fontSize: "20px" }}>
            <Typography style={{textAlign:"center"}}>Incorrect Answers : {submitResponse.wrong}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center">
          <CustomButton name="Attempt new quiz" handleClick={handleClose} />
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
export default AnswerDialog;
