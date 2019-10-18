import React, { useContext } from "react";
import { NotesContext } from "../context/Index";
import { Note } from "../components/Note";
import { TextArea } from "../components/TextArea";

export const Notes = () => {
  const { notes, onArchiveButtonClick, onTrashButtonClick } = useContext(
    NotesContext
  );

  return (
    <div>
      <div className="text-holder">
        <TextArea />
      </div>

      <div className="note-holder">
        {notes.map(note => (
          <Note
            whereFrom="notes"
            archiveButton={true}
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
    </div>
  );
};
