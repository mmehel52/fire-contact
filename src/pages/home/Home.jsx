import React from "react";
import { useNavigate } from "react-router-dom";
import HomeStyled, { Btn } from "./HomeStyled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeStyled>
      <Btn onClick={() => navigate("/contact")}>Fire Contact</Btn>
      <Btn onClick={() => navigate("/tasks")}>Task Tracker</Btn>
    </HomeStyled>
  );
};

export default Home;
