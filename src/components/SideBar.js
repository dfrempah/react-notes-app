import React, { useContext } from "react";
import { FaRegNewspaper, FaArchive, FaTrash } from "react-icons/fa";
import { SettingsContext } from "../context/Index";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const settings = useContext(SettingsContext);

  const handleActiveSwitch = number => {
    settings.updateActiveNavStatus(number);
    settings.ToggleSidebarStatus("sidebar-main");
    settings.setShowBars(!settings.showBars);
  };

  return (
    <div className={settings.sidebarStatus}>
      <ul className="sidebar-ul">
        <Link to="/">
          <li
            className={
              settings.activeNavStatus === 1
                ? "sidebar-li-selected"
                : "sidebar-li"
            }
            onClick={() => handleActiveSwitch(1)}
          >
            <span>
              <FaRegNewspaper className="icon" />
            </span>
            Notes
          </li>
        </Link>

        <Link to="/archived">
          <li
            className={
              settings.activeNavStatus === 2
                ? "sidebar-li-selected"
                : "sidebar-li"
            }
            onClick={() => handleActiveSwitch(2)}
          >
            <span>
              <FaArchive className="icon" />
            </span>
            Archived
          </li>
        </Link>

        <Link to="/trash">
          <li
            className={
              settings.activeNavStatus === 3
                ? "sidebar-li-selected"
                : "sidebar-li"
            }
            onClick={() => handleActiveSwitch(3)}
          >
            <span>
              <FaTrash className="icon" />
            </span>
            Trash
          </li>
        </Link>
      </ul>
    </div>
  );
};
