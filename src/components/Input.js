import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}
