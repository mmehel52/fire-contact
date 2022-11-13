import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/contact")}>firecontact</button>
      <button onClick={() => navigate("/tasks")}>tasktracker</button>
    </div>
  );
};

export default Home;
