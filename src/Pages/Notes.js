import React from "react";
import { Note } from "../components/Note";
import { TextArea } from "../components/TextArea";

export const Notes = () => {
  return (
    <div>
      <div className="text-holder">{<TextArea />}</div>
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
