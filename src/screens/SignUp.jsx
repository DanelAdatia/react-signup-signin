import { TextField, Grid, Container, CardContent, Button } from "@mui/material";
import React, { useState, useMemo, useContext, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { makeStyles } from "@mui/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SignUpImage from "../assets/images/SignUpImage.jpg";
import { sendDetails } from "../api";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  TextFieldStyle: {
    padding: "3%",
  },
  FemaleCheckBoxStyle: {
    paddingLeft: "5.8%",
    maxWidth: "5px",
    direction: "row",
    flexDirection: "row",
    display: "flex",
  },
  CountryStyle: {
    width: "68%",
  },
  CardContentStyle: {
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    height: "80%",
  },
  CountryStyleOutSide: {
    display: "flex",
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  MaleCheckBoxStyle: {
    width: "5px",
    direction: "row",
    flexDirection: "row",
    display: "flex",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    sendDetails({
      name,
      lastName,
      email,
      password,
      checkedMale,
      checkedFemale,
      country,
    });

    navigate("/profile");
  };

  return (
    <div>
      <img
        src={SignUpImage}
        style={{
          width: "60%",
          height: "100%",
          position: "absolute",
          left: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        alt="SignUp"
      ></img>

      <CardContent className={classes.CardContentStyle}>
        <Container>
          <Link to="/signin" style={{ cursor: "pointer" }}>
            Already have an account? Click here to Sign In
          </Link>
          <Grid className={classes.TextFieldStyle}>
            <TextField
              required
              variant="outlined"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid className={classes.TextFieldStyle}>
            <TextField
              required
              variant="outlined"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid className={classes.TextFieldStyle}>
            <TextField
              required
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid className={classes.TextFieldStyle}>
            <TextField
              required
              variant="outlined"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid>
            <label style={{ paddingRight: "10px" }}>Gender</label>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedMale}
                  onChange={(e) => setCheckedMale(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Male"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedFemale}
                  onChange={(e) => setCheckedFemale(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Female"
            />
          </Grid>
          <Grid className={classes.CountryStyleOutSide}>
            <Select
              placeholder="Country"
              className={classes.CountryStyle}
              options={options}
              value={country}
              onChange={changeHandler}
            />
          </Grid>
          <Button onClick={handleSubmit} variant="contained" color="secondary">
            Sign Up
          </Button>
        </Container>
      </CardContent>
    </div>
  );
};

export default SignUp;
