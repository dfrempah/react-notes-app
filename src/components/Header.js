import React, { useContext } from "react";
import notes from "../assets/notes.png";
import { FaBars, FaArrowDown } from "react-icons/fa";
import { SettingsContext } from "../context/Index";

export const Header = props => {
  const settings = useContext(SettingsContext);

  const handleSidebarToggle = () => {
    settings.setShowBars(!settings.showBars);
    settings.sidebarStatus === "sidebar-main"
      ? settings.ToggleSidebarStatus("sidebar-mobile")
      : settings.ToggleSidebarStatus("sidebar-main");
  };

  return (
    <div className="header">
      <button className="nav-expander-button" onClick={handleSidebarToggle}>
        {settings.showBars ? (
          <span className="nav-expander">
            <FaBars />
          </span>
        ) : (
          <span className="nav-expander">
            <FaArrowDown />
          </span>
        )}
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
