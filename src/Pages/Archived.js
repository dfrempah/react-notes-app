import React, { useContext } from "react";
import { GoFile } from "react-icons/go";
import { Note } from "../components/Note";
import { NotesContext } from "../context/Index";

export const Archived = () => {
  const {
    notes,
    archived,
    onArchiveButtonClick,
    onTrashButtonClick
  } = useContext(NotesContext);

  // archived.length = 0;
  notes.map(note => {
    if (note.archived) {
      archived.push(note);
    }
  });

  return (
    <div className="pages-page">
      <div className="pages-heading">
        <h3>Archives</h3>
      </div>

      <div className="pages-content">
        {archived.length > 0 ? (
          <div>
            {archived.map(note => (
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
            <GoFile size="70px" className="pages-center-icon" />
            <p style={{ textAlign: "center" }}>
              Archives Empty, archive notes to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
