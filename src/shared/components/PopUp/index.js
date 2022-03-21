import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Grid } from "@mui/material";
import { CustomButton } from "../..";

const CustomErrorPopup = ({ open, errorHandleChange, errorMessage }) => {
  return (
    <Dialog
      open={open}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent justifyContent="center" >
        <DialogContentText id="alert-dialog-slide-description" justifyContent="center" >
          <Grid container justifyContent="center" minWidth={250} minHeight={40}>
            <Grid fontSize={22} color="red" >{errorMessage}</Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center">
          <Grid >
            <CustomButton name="OK" handleClick={errorHandleChange} />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>

  );
};
export default CustomErrorPopup;


