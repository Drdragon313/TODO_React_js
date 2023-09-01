// Profile.js
import React from "react";
import Navbar from "../components/Header/header";
import Heading from "../components/Heading/heading";
import Label from "../components/Labels/label";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div>
        {" "}
        <Navbar />
        <div className="signin_container">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="signin_container">
        <Heading text={`Welcome: ${user?.username}`}></Heading>
        <Label text={`Full Name : ${user?.firstName} ${user?.lastName}`}></Label>
        <Label text={`Email : ${user?.email}`}> </Label>
        <Label text={`Gender : ${user?.gender}`}> </Label>
        <img alt="user profile" src={user?.image}></img>
      </div>
    </div>
  );
}

export default Profile;
