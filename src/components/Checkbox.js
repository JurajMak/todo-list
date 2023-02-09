import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    return (
      <input
        type="checkbox"
        onChange={this.props.onChange}
        // checked={true}
      ></input>
    );
  }
}
