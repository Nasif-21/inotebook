import React from "react";

export const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
        <i className="fa-regular fa-face-smile mx-2"></i>
      </div>
    </div>
  );
};
