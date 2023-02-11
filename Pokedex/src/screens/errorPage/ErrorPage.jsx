import React from "react";
import { Link } from "react-router-dom";

import "./error.css";

const ErrorPage = () => {
  return (
    <>
      <div className="Error-main-container">
        <div className="Error-image-container">  
            <img src="src/Assets/404.svg" alt="404" className="Error404-img" />
            <img
              src="src/Assets/TeamRocket.svg"
              alt="team-rocket"
              className="teamRocket-img"
            />
          </div>
          <div className="Error-text-container">
            <p className="wonText-heading">The rocket team <span>has won this time.</span> </p>
            <Link to="/">
            <button className="return-btn">Return</button>
            </Link>
          </div>
        </div>
    </>
  );
};

export default ErrorPage;
