import { TextField } from "@mui/material";

const CustomTextField = ({
  type,
  handleChange,
  value,
  label,
  placeholder,
  helperText,
  error,
  disabled,
}) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      label={label}
      type={type}
      value={value || ""}
      disabled={disabled || false}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default CustomTextField;
