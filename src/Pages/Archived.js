import React, { useContext } from "react";
import { GoFile } from "react-icons/go";
import { Note } from "../components/Note";
import { NotesContext } from "../context/Index";

export const Archived = () => {
  const { archived, onTrashButtonClick, onArchiveButtonClick } = useContext(
    NotesContext
  );

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
                whereFrom="archived"
                archivedButton={true}
                deleteButton={true}
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
            <GoFile size="75px" className="pages-center-icon" />
            <p style={{ textAlign: "center" }}>
              Archives Empty, archive notes to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
