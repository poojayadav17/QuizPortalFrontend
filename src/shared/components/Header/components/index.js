import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Grid } from "@material-ui/core";
import { QuizIcon } from "../../../../assets/image";
import { makeStyles } from "@mui/styles";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';

const useStyles = makeStyles(() => ({
  account: {
    "&:hover": {
      backgroundColor: "#e8e8ea",
    },
    quizLogo: {
      flexGrow: "1",
    },
  },
}));

const CustomHeader = ({ token, handleClose, anchorEl, handleMenu }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <AppBar position="fixed" sx={{ bgcolor: "#1F1D36" }}>
        <Toolbar>
          <Box>
            <div className={classes.quizLogo}>
              <img src={QuizIcon} onClick={() => handleClose(2)} style={{ cursor: "pointer" }} />
            </div>
          </Box>
          <Typography variant="h5" component="h2" sx={{ flexGrow: 2 }}>
            Welcome to Quizish
          </Typography>

          <div className={classes.account}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              fontSize="large"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              marginTop={500}
              paddingTop={500}
              padding={500}
              margin={500}
            >
              {window.location.pathname != ('/profile') &&
                <>
                  <MenuItem onClick={() => handleClose(1)}>
                    <ListItemIcon>
                      <FaceRoundedIcon />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                </>
              }
              <MenuItem onClick={() => handleClose(3)}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
export default CustomHeader;
