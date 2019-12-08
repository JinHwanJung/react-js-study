import React from 'react';
import {HashRouter as Router} from "react-router-dom";
import Routes from "./AppRoute";
import "styles/app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Hello, World</header>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
