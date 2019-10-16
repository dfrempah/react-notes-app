import React from "react";
import { FaTrash, FaArchive } from "react-icons/fa";

export const Note = props => {
  return (
    <div className="note-card">
      <p>{props.title}</p>
      <p>{props.content}</p>
      <div className="card-buttons">
        <button onClick={() => props.onArchive(props.index)}>
          <span>
            <FaArchive />
          </span>
        </button>
        <button onClick={() => props.onTrash(props.index)}>
          <span>
            <FaTrash />
          </span>
        </button>
      </div>
    </div>
  );
};
