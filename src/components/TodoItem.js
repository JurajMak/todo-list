import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.data.id === this.props.editable ? (
          <div className="testWrapper">
            <Input
              className="edit"
              type={this.props.edit}
              maxLength={this.props.maxLength}
              placeholder={this.props.textEdit}
              onChange={this.props.onEditChange}
            />
            <Button text="Save" onClick={this.props.onEditSave} />
            <Button text="X" onClick={this.props.onEditExit} />
          </div>
        ) : (
          <div className="testWrapper">
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
