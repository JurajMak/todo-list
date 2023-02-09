import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input
          onKeyDown={this.props.onKeyDown}
          className={this.props.className}
          value={this.props.value}
          type={this.props.type}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}></input>
      </form>
    );
  }
}
