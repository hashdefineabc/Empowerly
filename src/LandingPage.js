import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import LandingPageImage from "./images/LandingPagePic.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-content">
        <h1>Empowerly</h1>
        <p>Empowerly’s goal is to make learning about social justice engaging and approachable for all. Whether it is used in a classroom setting to provide education for youth or played in an everyday environment to provide more context to events currently happening in society and events that have happened in the past, Empowerly hopes to facilitate a discussion around social justice and social change.</p>
        <div className="game-buttons">
          <Link to="/scramble">
            <button>Words For Change</button>
          </Link>
          <Link to="/memory">
            <button>Conscious Connections</button>
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img src={LandingPageImage} alt="Landing Page" />
      </div>
    </div>
  );
};

export default LandingPage;
