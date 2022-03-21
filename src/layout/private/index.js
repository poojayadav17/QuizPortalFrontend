import React from "react";
import { CustomHeader, CustomFooter } from "../../shared";
import { Route, Switch } from "react-router-dom";
import { privateRoutes } from "../../navigation/routes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  header: {
    height: "10vh",
  },
  content: {
    height: "80vh",
    overflowY: "auto",
  },
  footer: {
    height: "10vh",
  },
}));

const PrivateLayout = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <CustomHeader />
      </div>
      <div className={classes.content}>
        <Switch>
          {privateRoutes &&
            privateRoutes.map((item, index) => (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
        </Switch>
      </div>
      <div className={classes.footer}>
        <CustomFooter />
      </div>
    </div>
  )
}

export default PrivateLayout;
