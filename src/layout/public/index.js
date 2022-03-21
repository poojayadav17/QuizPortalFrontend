import React from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "../../navigation/routes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
}));

const PublicLayout = ({ }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        {publicRoutes &&
          publicRoutes.map((item, index) => (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
      </Switch>
    </div>
  );
};

export default PublicLayout;
