import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomButton, CustomRadioButton } from "../../../shared";
import { choice } from "../../../shared/constants";

const useStyles = makeStyles({
  media: {
    minHeight: "240px",
    width: "240px",
    marginLeft: "50px",
    borderRadius: "10px",
    marginBottom: "50px",
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  questionCard: {
    marginTop: "20px",
    maxWidth: "100%",
    '&:hover': {
      backgroundColor: "#e8e8ea",
    },
  },
  description: {
    height: "50px",
  },
});

export const CustomCard = ({ image, description, handleClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.media}>
      <CardMedia
        component="img"
        height="120px"
        image={image}
        alt="Java img"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.description}
          style={{textAlign:"center", fontWeight:"bold"}}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <CustomButton name="Attempt" handleClick={handleClick} ></CustomButton>
      </CardActions>
    </Card>
  );
};

export const CustomQuestionCard = ({
  description,
  data,
  onChangeValue,
  answers,
  index,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.questionCard} sx={{ borderRadius: '10px', bgcolor: '#bbbbc2', width: '1000px', paddingLeft: "10px" }}>
      <CardActionArea>
        <Grid container>
          <Grid item sx={{ width: "100%" }}>
            <Typography>
              {index + 1}.{" "}{description}
            </Typography>
          </Grid>

          <CustomRadioButton
            options={choice}
            value={answers && answers[data.id]}
            handleChange={(value) => onChangeValue(data.id, value)}
          />
        </Grid>
      </CardActionArea>
    </Card>
  );
};
