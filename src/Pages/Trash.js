import React, { useContext } from "react";
import { NotesContext } from "../context/Index";
import { GoTrashcan } from "react-icons/go";
import { Note } from "../components/Note";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

export const Trash = () => {
  const {
    trashed,
    onTrashButtonClick,
    onArchiveButtonClick,
    setShowModal,
    showModal
  } = useContext(NotesContext);

  const closeModal = () => {
    setShowModal(false);
  };

  //

  return (
    <div className="pages-page">
      <div className="pages-heading">
        <h3>Trash</h3>
      </div>
      <div className="pages-content">
        {trashed.length > 0 ? (
          <div>
            <Modal
              isOpen={true}
              contentLabel="Modal is open"
              // onRequestClose={closeModal}
            >
              <button onClick={closeModal}>close modal</button>
            </Modal>
            {trashed.map(note => (
              <Note
                whereFrom="trash"
                archiveButton={true}
                deleteButton={true}
                title={note.title}
                content={note.content}
                key={note.key}
                index={note.key}
                onArchive={onArchiveButtonClick}
                onTrash={onTrashButtonClick}
              />
            ))}
          </div>
        ) : (
          <div>
            <GoTrashcan size="75px" className="pages-center-icon" />
            <p style={{ textAlign: "center" }}>
              Trash Empty, delete notes to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
