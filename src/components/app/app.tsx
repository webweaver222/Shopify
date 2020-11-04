import React from "react";
import { withRouter } from "react-router-dom";

import "./app.sass";

import AppView from "../AppView";

const App = () => {
  const content = <AppView />;

  return <div className="app">{content}</div>;
};

export default App;
