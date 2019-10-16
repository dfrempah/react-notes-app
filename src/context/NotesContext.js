import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = props => {
  const [notes, addNote] = useState([]);

  const notesContext = {
    notes,
    addNote
  };

  return (
    <Context.Provider value={notesContext}>{props.children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;
