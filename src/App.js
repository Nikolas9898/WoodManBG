import React from "react";
import Routes from "./client/dekstop/routes";
import AppStyle from "./App.css";
function App() {
  return (
    <React.Fragment className={AppStyle.background}>
      <Routes />
    </React.Fragment>
  );
}

export default App;
