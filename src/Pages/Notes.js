import React, { useContext } from "react";
import { NotesContext } from "../context/Index";
import { Note } from "../components/Note";
import { TextArea } from "../components/TextArea";

export const Notes = () => {
  const {
    notes,
    onArchiveButtonClick,
    onTrashButtonClick,
    pureNotes
  } = useContext(NotesContext);

  // pureNotes.length = 0;
  notes.map(note => {
    if (!note.archived && !note.trashed) {
      pureNotes.push(note);
    }

    return 0;
  });

  return (
    <div>
      <div className="text-holder">
        <TextArea />
      </div>

      <div className="note-holder">
        {pureNotes.map(note => (
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
    </div>
  );
};
