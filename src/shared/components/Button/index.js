import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    '&-hover': {
      backgroundColor: "#e8e8ea",
    },
  }
});

const CustomButton = ({ name, handleClick, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.btn}>
      <Button sx={{ backgroundColor: "#35334a" }}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleClick}
        id={id}
      >
        {name}
      </Button>
    </div>
  );
};
export default CustomButton;
