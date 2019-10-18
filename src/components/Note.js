import React from "react";
import { FaTrash, FaArchive, FaRedo } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Note = props => {
  return (
    <div className="note-card">
      <p>{props.title ? props.title : <br />}</p>
      <p>{props.content ? props.content : <br />}</p>
      <div className="card-buttons">
        {props.archiveButton ? (
          <button onClick={() => props.onArchive(props.index, props.whereFrom)}>
            {props.whereFrom === "trash" ? (
              <span>
                <FaRedo size="18px" />
              </span>
            ) : (
              <span>
                <FaArchive size="18px" />
              </span>
            )}
          </button>
        ) : (
          ""
        )}
        {props.deleteButton ? (
          <button onClick={() => props.onTrash(props.index, props.whereFrom)}>
            {props.whereFrom === "notes" || props.whereFrom === "archived" ? (
              <span>
                <FaTrash size="18px" />
              </span>
            ) : (
              <span>
                <MdDeleteForever size="22px" />
              </span>
            )}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
