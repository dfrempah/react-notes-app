import React from "react";
import { FaRegNewspaper, FaArchive, FaTrash } from "react-icons/fa";

export const SideBar = props => {
  return (
    <div className={props.class}>
      <ul className="sidebar-ul">
        <li className="sidebar-li">
          <span>
            <FaRegNewspaper className="icon" />
          </span>
          Notes
        </li>

        <li className="sidebar-li">
          <span>
            <FaArchive className="icon" />
          </span>
          Archived
        </li>

        <li className="sidebar-li">
          <span>
            <FaTrash className="icon" />
          </span>
          Trash
        </li>
      </ul>
    </div>
  );
};
