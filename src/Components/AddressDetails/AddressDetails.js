import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../BasciDetails/ProfileDetailsStyled.css";
const AddressDetails = () => {
  const [addressDetails, setAddressDetails] = useState({
    addresslane1: "",
    addresslane2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const onHandleAccountDetails = (e) => {
    const [name, value] = e.target;
    setAddressDetails({
      ...addressDetails,
      [name]: value,
    });
  };

  const onSubmitAddressDetails = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="account-details" onSubmit={onSubmitAddressDetails}>
        <h1>Account Details</h1>
        <label htmlFor="flatBuildNo">Address Lane 1</label>
        <input
          type="text"
          id="flatBuildNo"
          required
          placeholder="Flat/Buildno"
          name="addresslane1"
          onChange={onHandleAccountDetails}
        />
        <br />
        <label htmlFor="villageArea">Address Lane 2</label>
        <input
          type="text"
          id="villageArea"
          required
          placeholder="Village/Area"
          name="addresslane2"
          onChange={onHandleAccountDetails}
        />
        <br />
        <label htmlFor="CityTown">City/Town</label>
        <input
          type="text"
          id="CityTown"
          required
          placeholder="City/Town"
          name="city"
          onChange={onHandleAccountDetails}
        />
        <br />
        <label htmlFor="State">State</label>
        <input
          type="text"
          id="State"
          required
          placeholder="State"
          name="state"
          onChange={onHandleAccountDetails}
        />
        <br />
        <label htmlFor="PostalCode">Postal Code</label>
        <input
          type="text"
          id="PostalCode"
          required
          placeholder="Postal Code"
          name="postalCode"
          onChange={onHandleAccountDetails}
        />
        <br />
        <div>
          <Link to="/personal">
            <button type="button">Back</button>
          </Link>
          <Link to="/finished">
            <button type="submit">Finish</button>
            <h1>hellotest</h1>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
