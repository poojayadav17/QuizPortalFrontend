import * as React from "react";
import TextField from "@mui/material/TextField";
import moment from 'moment';
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

const CustomDatePicker = ({ handleChange, value, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TextField
        fullWidth
        id="date"
        label={label}
        type="date"
        sx={{ width: "100%" }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ max: moment(new Date()).format('YYYY-MM-DD') }}
        value={(value && moment(value).format('YYYY-MM-DD')) || ""}
        onChange={(e) => handleChange(e.target.value)}
      />
    </LocalizationProvider>
  );
};
export default CustomDatePicker;
