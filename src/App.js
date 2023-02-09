import "./App.css";

import React, { Component } from "react";
import Todo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}
