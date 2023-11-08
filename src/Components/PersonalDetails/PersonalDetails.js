import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../BasciDetails/ProfileDetailsStyled.css";
const PersonalDetails = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const onSubmitPersonalDetails = (e) => {
    e.preventDefault();
  };

  const onChangeDetails = (e) => {
    const [name, value] = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="account-details" onSubmit={onSubmitPersonalDetails}>
        <h1>Personal</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          required
          placeholder="firstname"
          name="firstName"
          onChange={onChangeDetails}
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          required
          placeholder="lastname"
          name="lastName"
          onChange={onChangeDetails}
        />
        <br />
        <label htmlFor="Gender">Gender</label>
        <div>
          <br />
          <input type="radio" id="male" value="male" name="gender" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="Female" value="female" name="gender" />
          <label htmlFor="Female">Female</label>
        </div>
        <label htmlFor="ageId">Age</label>
        <input
          type="number"
          id="ageId"
          required
          placeholder="Age"
          name="phoneNumber"
          onChange={onChangeDetails}
        />
        <br />
        <div>
          <Link to="/">
            <button type="button">Back</button>
          </Link>{" "}
          <Link to="/address">
            <button type="submit">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
