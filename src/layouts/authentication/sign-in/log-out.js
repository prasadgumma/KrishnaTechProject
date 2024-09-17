// src/components/Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("jwtToken");
    navigate("/authentication/sign-in");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
