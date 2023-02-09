import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="testWrapper">
        <p>{this.props.data}</p>
        <div>
          <Checkbox className="checkbox" onChange={this.props.onChange} />
          <Button className="pen" />
          <Button className="trashcanBtn" onClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}
