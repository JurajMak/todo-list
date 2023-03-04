import React from "react";

const Input = (props) => {
  return (
    <input
      onKeyDown={props.onKeyDown}
      className={props.className}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      checked={props.checked}
      maxLength={props.maxLength}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;
