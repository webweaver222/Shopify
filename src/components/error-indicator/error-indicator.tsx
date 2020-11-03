import React from "react";

import img from "./sadFace.png";

import "./error-indicator.sass";

const ErrorIndicator = ({
  message,
  size = 50,
  type = "alert"
}: {
  message: string;
  size?: number;
  type?: "alert" | "notif";
}) => {
  return (
    <div className={`error-indicator ${type}`}>
      <img src={img} width={size} height={size} alt="sadFace.png" />
      <div className="right">
        <h2>Somthing went wrong</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorIndicator;
