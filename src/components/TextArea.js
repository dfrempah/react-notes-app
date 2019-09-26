import React, { useState } from "react";
import { Button } from "./Button";

export const TextArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  // const notes = useRef(null)

  const handleFocus = () => {
    setIsFocused(true);
    // console.log(notes.current.value)
    // notes.current.focus();
  };

  const handleBlur = () => {
    //nothing
  };

  const onCloseButtonClick = () => {
    console.log("I have been clicked");
    if (content !== undefined || title !== undefined) {
      console.log("create card");
    }
    setIsFocused(false);
  };

  return (
    <div className="double-textarea">
      {isFocused ? (
        <div>
          <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="double-title"
            maxLength="50"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Title(50 characters max)"
          />

          <textarea
            //    ref={notes}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="double-content"
            value={content}
            onChange={event => setContent(event.target.value)}
            placeholder="Enter note here..."
          />
          <Button name="close" onClick={onCloseButtonClick} />
        </div>
      ) : (
        <textarea
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={isFocused ? "textarea-focused" : "textarea"}
          rows="15"
          value={content}
          onChange={event => setContent(event.target.value)}
          placeholder="Add New Note"
          cols="50"
        />
      )}
    </div>
  );
};
