import React from "react";
import { Link } from "react-router-dom";
import "./ScrambleMainPage.css";
import scramblePagePic from "../images/scramblePagePic.png";

const ScrambleMainPage = () => {
  return (
    <div className="ScrambleMainPage">
      <div className="text-content">
        <h1>Words for Change</h1>
        <p>
          Words for Change is a drag and drop scramble game where the objective
          is to unscramble a set of letters to create a word or phrase that
          relates to social justice. With varying difficulties, challenge
          yourself on your knowledge of social justice and its impact on
          today’s society.
        </p>
        <div className="level-buttons">
          <Link to="/scramble/easy">
            <button>Easy</button>
          </Link>
          <Link to="/scramble/medium">
            <button>Medium</button>
          </Link>
          <Link to="/scramble/hard">
            <button>Hard</button>
          </Link>
        </div>
        <div>
        <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
      <img
        src={scramblePagePic}
        alt="Scramble Game Image"
        className="scramble-image"
      />
    </div>
  );
};

export default ScrambleMainPage;
