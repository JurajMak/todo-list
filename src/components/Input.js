import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return (
    //   <form>
    //     <input
    //       onKeyDown={this.props.onKeyDown}
    //       className={this.props.className}
    //       value={this.props.value}
    //       type={this.props.type}
    //       onChange={this.props.onChange}
    //       placeholder={this.props.placeholder}
    //       // checked={this.props.checked}
    //     ></input>
    //   </form>
    // );
    return (
      <input
        onKeyDown={this.props.onKeyDown}
        className={this.props.className}
        value={this.props.value}
        type={this.props.type}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        checked={this.props.checked}
        maxLength={this.props.maxLength}
      />
    );
  }
}
