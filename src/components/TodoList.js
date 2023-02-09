import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.data}
        <Checkbox />
        <Button
          className="trashcan"
          text="trashcan"
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}
