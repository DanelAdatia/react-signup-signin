import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
  containerMobile: {
    paddingTop: "2px",
    height: "100vh",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    maxWidth: "40px",
    float: "left",
  },
  containerTablet: {
    paddingTop: "2px",
    height: "100vh",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    maxWidth: "40px",
    float: "left",
  },

  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
  },
  itemMobile: {
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
    cursor: "pointer",
  },
  itemTablet: {
    background: "pink",
    cursor: "pointer",
  },
  textTablet: {
    visibility: "hidden",
  },
  textMobile: {
    visibility: "hidden",
  },
});

const SideBar = () => {
  const classes = useStyles();

  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return (
    <div>
      <Grid item sm={2}>
        <Container
          className={
            width >= 821
              ? classes.container
              : width >= 481 && width <= 820
              ? classes.containerTablet
              : classes.containerMobile
          }
        >
          <div
            style={{ paddingTop: "10px" }}
            className={
              width >= 768
                ? classes.item
                : width >= 481 && width <= 768
                ? classes.itemTablet
                : classes.itemMobile
            }
            onClick={() => navigate("/dashboard")}
          >
            <HomeIcon />
            <Typography
              className={
                width >= 821
                  ? classes.text
                  : width >= 481 && width <= 820
                  ? classes.textTablet
                  : classes.textMobile
              }
            >
              Homepage
            </Typography>
          </div>
          <div
            style={{ paddingTop: "10px" }}
            className={
              width >= 768
                ? classes.item
                : width >= 481 && width <= 768
                ? classes.itemTablet
                : classes.itemMobile
            }
            onClick={() => navigate("/purchase")}
          >
            <ShoppingCartIcon />
            <Typography
              className={
                width >= 821
                  ? classes.text
                  : width >= 481 && width <= 820
                  ? classes.textTablet
                  : classes.textMobile
              }
            >
              Purchase
            </Typography>
          </div>

          <div
            style={{ paddingTop: "10px" }}
            className={
              width >= 768
                ? classes.item
                : width >= 481 && width <= 768
                ? classes.itemTablet
                : classes.itemMobile
            }
            onClick={() => navigate("/profile")}
          >
            <PersonIcon />
            <Typography
              className={
                width >= 821
                  ? classes.text
                  : width >= 481 && width <= 820
                  ? classes.textTablet
                  : classes.textMobile
              }
            >
              Profile
            </Typography>
          </div>
          <div
            className={
              width >= 768
                ? classes.item
                : width >= 481 && width <= 768
                ? classes.itemTablet
                : classes.itemMobile
            }
            onClick={() => navigate("/signup")}
            style={{ paddingTop: "350px" }}
          >
            <LogoutIcon />
            <Typography
              className={
                width >= 821
                  ? classes.text
                  : width >= 481 && width <= 820
                  ? classes.textTablet
                  : classes.textMobile
              }
            >
              LogOut
            </Typography>
          </div>
        </Container>
      </Grid>
    </div>
  );
};

export default SideBar;
