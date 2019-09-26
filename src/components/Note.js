import React from "react";
import { FaTrash, FaArchive } from "react-icons/fa";

export const Note = () => {
  return (
    <div className="note-card">
      <p>New Note</p>
      <p>This is a sample content file bore adding state</p>
      <div className="card-buttons">
        <button>
          <span>
            <FaArchive />
          </span>
        </button>
        <button>
          <span>
            <FaTrash />
          </span>
        </button>
      </div>
    </div>
  );
};
