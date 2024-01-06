import React from "react";
import WorkerRegister from "./worker/Register";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to LabourChowk!!</h1>
      <Link to="/worker/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Home;
