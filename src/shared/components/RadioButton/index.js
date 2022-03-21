import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { FormLabel } from "@mui/material";
import { FormControlLabel } from "@material-ui/core";

const CustomRadioComponent = ({ handleChange, value, options, label }) => {
  const marginTop = { marginTop: 5 };
  return (
    <FormControl component="fieldset" style={marginTop}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="RadioButton"
        name="RadioButton"
        style={{ display: "initial" }}
        value={value || null}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default CustomRadioComponent;
