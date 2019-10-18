import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = props => {
  const [notes, updateNotes] = useState([]);
  const [trashed, updateTrash] = useState([]);
  const [archived, updateArchived] = useState([]);

  const onTrashButtonClick = index => {
    const trashedItemIndex = notes.findIndex(note => note.key === index);
    const trashedItem = notes[trashedItemIndex];
    updateTrash([...trashed, trashedItem]);
    notes.splice(trashedItemIndex, 1);
    updateNotes([...notes]);
  };

  const onArchiveButtonClick = index => {
    const archivedItemIndex = notes.findIndex(note => note.key === index);
    const archivedItem = notes[archivedItemIndex];
    updateArchived([...trashed, archivedItem]);
    notes.splice(archivedItemIndex, 1);
    updateNotes([...notes]);
  };

  const notesContext = {
    notes,
    updateNotes,
    trashed,
    onTrashButtonClick,
    archived,
    updateTrash,
    updateArchived,
    onArchiveButtonClick
  };

  return (
    <Context.Provider value={notesContext}>{props.children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;
