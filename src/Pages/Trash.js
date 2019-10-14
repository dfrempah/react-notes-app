import React from "react";
import { GoTrashcan } from "react-icons/go";

export const Trash = () => (
  <div className="pages-page">
    <div className="pages-heading">
      <h3>Trash</h3>
    </div>
    <div className="pages-content">
      <GoTrashcan size="70px" className="pages-center-icon" />
      <p style={{ textAlign: "center" }}>
        Trash Empty, delete notes to get started!
      </p>
    </div>
  </div>
);
