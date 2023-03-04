import React from "react";
import Button from "./Button";
import Input from "./Input";

const TodoItem = (props) => {
  return (
    <div>
      {props.data.id === props.editable ? (
        <div className="listWrapper">
          <Input
            className="edit"
            type={props.edit}
            maxLength={props.maxLength}
            placeholder={props.textEdit}
            onChange={props.onEditChange}
            autoFocus={true}
            onKeyDown={(e) => {
              props.onKeyEditSave(e);
              props.onKeyEditExit(e);
            }}
          />
          <Button className="editSaveBtn" onClick={props.onEditSave} />
          <Button className="editExitBtn" onClick={props.onEditExit} />
        </div>
      ) : (
        <div className="listWrapper">
          <p className={props.classIsDone}>{props.data.text}</p>
          <div className="checkboxWrapper">
            <Input
              className="checkbox"
              onChange={props.onChange}
              checked={props.data.isDone}
              type="checkbox"
            />
            <Button className="penBtn" onClick={props.onEdit} />
            <Button className="trashcanBtn" onClick={props.onDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
