import React from "react";
import notes from "../assets/notes.png";
import { FaBars } from "react-icons/fa";

export const Header = props => {
  const handleClick = () => {
    console.log("i have to bring the side bar");
  };
  return (
    <div className="header">
      <button className="nav-expander-button" onClick={handleClick}>
        <span className="nav-expander">
          <FaBars />
        </span>
      </button>
      <img
        src={notes}
        alt="logo"
        width="50"
        height="50"
        className="logo-image"
      />
      <p className="header-text">
        Notes App With Local Storage and Router
        <span role="img" aria-label="fire and rocket emojis">
          🔥🔥🔥🔥🚀🚀🚀
        </span>
      </p>
    </div>
  );
};
