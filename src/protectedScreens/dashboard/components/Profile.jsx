import React, { useEffect, useState } from "react";
import { getDetails } from "../../../api";
const Profile = () => {
  const [userDetails, setUserDetails] = useState([]);

  const LoadDetails = () => {
    getDetails().then((userDetails) => setUserDetails(userDetails.data));
  };

  useEffect(() => {
    LoadDetails();
  }, []);
  return (
    <div>
      {userDetails.map((data) => {
        const { id, name, lastName, email, password, male, female, country } =
          data;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{lastName}</h2>
            <h3>{email}</h3>
            <h4>{password}</h4>
            <h5>{male}</h5>
            <h6>{female}</h6>
            <h6>{country}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
