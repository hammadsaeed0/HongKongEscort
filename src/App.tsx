import React from "react";
import { Routes, Route, } from "react-router-dom";
import { Home } from "./components/screens/home/Home";
import Profile from "./components/screens/profile/Profile";
import Contact from "./components/screens/contact/Contact";
import Login from "./components/screens/login/Login";
import Forgot from "./components/screens/forget/Forget";
import Register from "./components/screens/register/Register";
import EscortRegister from "./components/screens/escort_register/Escort_Register";
import RegisterAgency from "./components/screens/register_agency/Register_Agency";
import RegisterUser from "./components/screens/register_user/Register_User";
import ProfilePageUser from "./components/screens/normalUser/profilePageUser/ProfilePageUser";
import EditProfile from "./components/screens/normalUser/editProfile/EditProfile";
import EscortProfile from "./components/screens/escort/escortProfile/EscortProfile";
import EscortEditProfile from "./components/screens/escort/escortEditProfile/EscortEditProfile";
import EscortVerifyStatus from "./components/screens/escort/escortVerfiyStatus/EscortVerifyStatus";
import EscortPremium from "./components/screens/escort/escortPremium/EscortPremium";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<Forgot />} />
      <Route path="/register" element={<Register />} />
      <Route path="/escortRegister" element={<EscortRegister />} />
      <Route path="/agencyRegister" element={<RegisterAgency />} />
      <Route path="/userRegister" element={<RegisterUser />} />
      <Route path="/userProfile" element={<ProfilePageUser />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/escortProfile" element={<EscortProfile />} />
      <Route path="/escortEditProfile" element={<EscortEditProfile />} />
      <Route path="/escortVerifyProfile" element={<EscortVerifyStatus />} />
      <Route path="/escortPremium" element={<EscortPremium />} />
    </Routes>
  );
};

export default App;
