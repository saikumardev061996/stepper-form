import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileDetailsStyled.css";

const ProfileDetails = () => {
  const [accountDetails, setAccountDetails] = useState({
    email: "",
    userName: "",
    password: "",
    phoneNumber: "",
  });
  const onHandleAccountdetails = (e) => {
    const [name, value] = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  const onSubmitAccountDetails = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="account-details" onSubmit={onSubmitAccountDetails}>
        <h1>Account Details</h1>
        <label htmlFor="emailId">Email</label>
        <input
          type="email"
          id="emailId"
          required
          placeholder="Please Enter Email Here"
          name="email"
          onChange={onHandleAccountdetails}
        />
        <br />
        <label htmlFor="userNameId">User Name</label>
        <input
          type="email"
          id="userNameId"
          required
          placeholder="Please Enter User Name Here"
          name="userName"
        />
        <br />
        <label htmlFor="passwordId">Password</label>
        <input
          type="email"
          id="passwordId"
          required
          placeholder="Please Enter Password Here"
          name="password"
        />
        <br />
        <label htmlFor="phoneNumberId">Phone Number</label>
        <input
          type="email"
          id="phoneNumberId"
          required
          placeholder="Please Enter Phone Number Here"
          name="phoneNumber"
        />
        <br />
        <Link to="/personal">
          <button type="submit">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default ProfileDetails;
