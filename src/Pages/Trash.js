import React, { useContext } from "react";
import { NotesContext } from "../context/Index";
import { GoTrashcan } from "react-icons/go";
import { Note } from "../components/Note";

export const Trash = () => {
  const { trashed, onTrashButtonClick, onArchiveButtonClick } = useContext(
    NotesContext
  );

  return (
    <div className="pages-page">
      <div className="pages-heading">
        <h3>Trash</h3>
      </div>
      <div className="pages-content">
        {trashed.length > 0 ? (
          <div>
            {trashed.map(note => (
              <Note
                title={note.title}
                content={note.content}
                key={note.key}
                index={note.key}
                onArchive={onArchiveButtonClick}
                onTrash={onTrashButtonClick}
              />
            ))}
          </div>
        ) : (
          <div>
            <GoTrashcan size="70px" className="pages-center-icon" />
            <p style={{ textAlign: "center" }}>
              Trash Empty, delete notes to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
