import React, { useState, useContext } from "react";
import uniqid from "uniqid";
import { Button } from "./Button";
import { NotesContext } from "../context/Index";

export const TextArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const { notes, addNote } = useContext(NotesContext);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const onCloseButtonClick = () => {
    if (content !== undefined || title !== undefined) {
      saveNow();
    }
    setIsFocused(false);
    setContent(undefined);
    setTitle(undefined);
    setIsFocused(false);
  };

  const saveNow = () => {
    const newNote = {
      title,
      content,
      archived: true,
      trashed: false,
      key: uniqid()
    };
    addNote([...notes, newNote]);
  };

  return (
    <div className="input-area">
      {isFocused ? (
        <div className="double">
          <div className="text-title">
            <textarea
              onFocus={handleFocus}
              className="double-title"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="Title(50 characters max)"
            />
          </div>

          <div className="text-content">
            <textarea
              onFocus={handleFocus}
              value={content}
              onChange={event => setContent(event.target.value)}
              placeholder="Enter note here..."
            />
          </div>

          <Button name="close" onClick={onCloseButtonClick} />
        </div>
      ) : (
        <div className="singleton">
          <textarea
            onFocus={handleFocus}
            className={isFocused ? "textarea-focused" : "textarea"}
            value={content}
            onChange={event => setContent(event.target.value)}
            placeholder="Add New Note"
          />
        </div>
      )}
    </div>
  );
};
