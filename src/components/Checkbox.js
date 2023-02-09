import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="checkbox"
        onChange={this.props.onChange}
        // checked={true}
      ></input>
    );
  }
}
