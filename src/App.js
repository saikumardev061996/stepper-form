import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./Components/BasciDetails/ProfileDetails"
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails"
import AddressDetails  from "./Components/AddressDetails/AddressDetails"
import Finished from "./Components/Finshed/Finished"
const App = () => {
  return (
    <div className="step-form-main-container">
      <div className="form-container">
       <Router>
        <Routes>
          <Route path = "/" element = {<ProfileDetails/> } />
          <Route path = "/personal" element = {<PersonalDetails/>} />
          <Route path = "/address" element = {<AddressDetails/>} />
          <Route path = "/finished" element = {<Finished />} />
        </Routes>
       </Router>
      </div>
    </div>
  );
};

export default App;
