import React from "react";
import { Note } from "../components/Note";

export const Notes = () => {
  return (
    <div className="notes-page">
      <div className="note-holder">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
};
