import React, { useContext } from "react";
import uniqid from "uniqid";
import { NotesContext } from "../context/Index";
import { Note } from "../components/Note";
import { TextArea } from "../components/TextArea";

export const Notes = () => {
  const { notes } = useContext(NotesContext);

  const onArchiveButtonClick = index => {
    console.log(index + " archived");
    // console.log(+"archived");
  };

  const onTrashButtonClick = index => {
    console.log(index + " Trashed");
  };
  return (
    <div>
      <div className="text-holder">
        <TextArea />
      </div>

      <div className="note-holder">
        {notes.map(note => (
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
