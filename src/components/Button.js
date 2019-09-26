import React from "react";

export const Button = props => {
  return (
    <div className="button-holder">
      <button className="clean-button" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};
