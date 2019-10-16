import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = props => {
  const [notes, addNote] = useState([]);
  const trashed = [];
  const archived = [];
  const pureNotes = [];

  const onTrashButtonClick = index => {
    const trashedItem = notes.findIndex(note => note.key === index);
    notes[trashedItem].trashed = true;
    pureNotes.splice(trashedItem, 1);
  };

  const onArchiveButtonClick = index => {
    const archivedItem = notes.findIndex(note => note.key === index);
    notes[archivedItem].archived = true;
    pureNotes.splice(archivedItem, 1);
  };

  const notesContext = {
    notes,
    addNote,
    pureNotes,
    trashed,
    onTrashButtonClick,
    archived,
    onArchiveButtonClick
  };

  return (
    <Context.Provider value={notesContext}>{props.children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;
