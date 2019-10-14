import React from "react";
import { GoFile } from "react-icons/go";

export const Archived = () => (
  <div className="pages-page">
    <div className="pages-heading">
      <h3>Archives</h3>
    </div>
    <div className="pages-content">
      <GoFile size="70px" className="pages-center-icon" />
      <p style={{ textAlign: "center" }}>
        Archives Empty, add notes to archives to get started!
      </p>
    </div>
  </div>
);
