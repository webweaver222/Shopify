import React from "react";
import { withRouter } from "react-router-dom";

import "./app.sass";

import Login from "../Login";

const App = () => {
  const content = <Login />;

  return <div className="app">{content}</div>;
};

export default App;
