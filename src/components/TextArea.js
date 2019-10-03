import React, { useState } from "react";
import { Button } from "./Button";

export const TextArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  // const notes = useRef(null)

  const handleFocus = () => {
    console.log(isFocused);
    setIsFocused(true);
    console.log(isFocused);
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
    <div className="input-area">
      {isFocused ? (
        <div className="double">
          <div className="text-title">
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="double-title"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="Title(50 characters max)"
            />
          </div>

          <div className="text-content">
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
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
            onBlur={handleBlur}
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
