import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render B");
    return (
      <div>
        {this.props.data.id === this.props.editable ? (
          (console.log("focused"),
          (
            <div className="listWrapper">
              <Input
                className="edit"
                type={this.props.edit}
                maxLength={this.props.maxLength}
                placeholder={this.props.textEdit}
                onChange={this.props.onEditChange}
                autoFocus={true}
                onKeyDown={(e) => {
                  this.props.onKeyEditSave(e);
                  this.props.onKeyEditExit(e);
                }}
              />
              <Button className="editSaveBtn" onClick={this.props.onEditSave} />
              <Button className="editExitBtn" onClick={this.props.onEditExit} />
            </div>
          ))
        ) : (
          <div className="listWrapper">
            <p className={this.props.classIsDone}>{this.props.data.text}</p>
            <div className="checkboxWrapper">
              <Input
                className="checkbox"
                onChange={this.props.onChange}
                checked={this.props.data.isDone}
                type="checkbox"
              />
              <Button className="penBtn" onClick={this.props.onEdit} />
              <Button className="trashcanBtn" onClick={this.props.onDelete} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
