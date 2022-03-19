import { makeStyles } from "@material-ui/styles";
import { AppBar, Stack, Toolbar } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "./Logo.png";

const useStyles = makeStyles({
  logoStyling: {
    width: 50,
    height: 50,
    borderRadius: "10px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  badges: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "500px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        style={{
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
        }}
      >
        <Toolbar className={classes.toolBar}>
          <img src={Logo} alt="Logo" className={classes.logoStyling} />
          <div className={classes.badges}>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={4} color="secondary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartIcon color="error" />
              </Badge>
            </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
