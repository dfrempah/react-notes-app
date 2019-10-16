import React, { useContext } from "react";
import uniqid from "uniqid";
import { GoFile } from "react-icons/go";
import { Note } from "../components/Note";
import { NotesContext } from "../context/Index";

export const Archived = () => {
  const { notes } = useContext(NotesContext);
  const archived = [];
  console.log(notes);

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
        {JSON.stringify(notes)}
        <GoFile size="70px" className="pages-center-icon" />
        <p style={{ textAlign: "center" }}>
          Archives Empty, add notes to archives to get started!
        </p>
      </div>
      {JSON.stringify(archived)}
    </div>
  );
};
