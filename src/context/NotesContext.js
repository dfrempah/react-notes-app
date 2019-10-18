import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = props => {
  const [notes, updateNotes] = useState([]);
  const [trashed, updateTrash] = useState([]);
  const [archived, updateArchived] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const onTrashButtonClick = (index, whereFrom) => {
    if (whereFrom === "notes") {
      const trashedItemIndex = notes.findIndex(note => note.key === index);
      const trashedItem = notes[trashedItemIndex];
      updateTrash([...trashed, trashedItem]);
      notes.splice(trashedItemIndex, 1);
      updateNotes([...notes]);
    } else if (whereFrom === "archived") {
      const trashedItemIndex = archived.findIndex(note => note.key === index);
      const trashedItem = archived[trashedItemIndex];
      updateTrash([...trashed, trashedItem]);
      archived.splice(trashedItemIndex, 1);
      updateArchived([...archived]);
    } else if (whereFrom === "trash") {
      setShowModal(true);
      const trashedItemIndex = trashed.findIndex(note => note.key === index);
      trashed.splice(trashedItemIndex, 1);
      updateTrash([...trashed]);
    }
  };

  const onArchiveButtonClick = (index, whereFrom) => {
    if (whereFrom === "notes") {
      const archivedItemIndex = notes.findIndex(note => note.key === index);
      const archivedItem = notes[archivedItemIndex];
      updateArchived([...trashed, archivedItem]);
      notes.splice(archivedItemIndex, 1);
      updateNotes([...notes]);
    } else if (whereFrom === "trash") {
      //archive commands received from trash acts as a restore button and is rendered as a restore icon too....
      const restoredItemIndex = trashed.findIndex(note => note.key === index);
      const restored = trashed[restoredItemIndex];
      updateNotes([restored, ...notes]);
      trashed.splice(restoredItemIndex, 1);
    }
  };

  const notesContext = {
    notes,
    updateNotes,
    trashed,
    onTrashButtonClick,
    archived,
    updateTrash,
    updateArchived,
    onArchiveButtonClick,
    showModal,
    setShowModal
  };

  return (
    <Context.Provider value={notesContext}>{props.children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;
