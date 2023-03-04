import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);
  const [showChecked, setShowChecked] = useState(false);
  const [showUnChecked, setShowUncheked] = useState(false);
  const [isEditable, setEditable] = useState("");
  const [editInput, setEditInput] = useState("");

  // adding input values to  list on pressed enter

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setData([...data, { id: Date.now(), text: textInput, isDone: false }]);
      setTextInput("");
    }
  };
  //  adding input text and other values in list

  const handleAdd = (e) => {
    e.preventDefault();
    setData([...data, { id: Date.now(), text: textInput, isDone: false }]);
    setTextInput("");
  };

  // handle input text

  const handleChange = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };

  const handleEditInput = (e) => {
    setEditInput(e.target.value);
  };

  //  deleting selected item from list

  const handleDelete = (e, id) => {
    setData(
      data?.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };

  // editing selected items from list

  const handleEdit = (e, id) => {
    setEditable(id);
  };

  const handleEditExit = () => {
    setEditable("");
  };

  const handleEditSave = (e, id) => {
    setData([
      data?.filter((item) => {
        if (item.id === id) {
          return (item.text = editInput);
        }
        return item;
      }),
    ]);
    setEditable("");
  };

  const onKeyEditSave = (e, id) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setData(
        data?.filter((item) => {
          if (item.id === id) {
            return (item.text = editInput);
          }
          return item;
        })
      );
      setEditable("");
    }
  };

  const onKeyEditExit = (e) => {
    if (e.keyCode === 27) {
      setEditable("");
    }
  };

  // deleting ALL checked/done items from list

  const handleDeleteDone = () => {
    setData(
      data?.filter((item) => {
        return item.isDone === showChecked;
      })
    );
  };

  // deleting all items from list
  const handleDeleteAll = () => {
    setData([]);
  };

  // checkbox logic
  const handleCheckbox = (e, id) => {
    setData(
      data?.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }

        return item;
      })
    );
  };

  const handleAll = () => {
    setShowChecked(false);
    setShowUncheked(false);
  };

  const handleDone = () => {
    setShowChecked(true);
    setShowUncheked(false);
  };

  const handleTodo = () => {
    setShowChecked(false);
    setShowUncheked(true);
  };

  return (
    <div className="todoWrapper">
      <h1>TodoInput</h1>
      <div className="inputWrapper">
        <form>
          <Input
            className="input"
            onKeyDown={handleKeyPressed}
            value={textInput}
            type="text"
            placeholder="New Todo"
            onChange={handleChange}
            maxLength="40"
          />
        </form>
        <Button className="addBtn" text="Add new task" onClick={handleAdd} />
      </div>
      <h1>TodoList</h1>
      <div className="TodoItemBtnWrapper">
        <Button className="listBtn" text="All" onClick={handleAll} />
        <Button className="listBtn" text="Done" onClick={handleDone} />
        <Button className="listBtn" text="Todo" onClick={handleTodo} />
      </div>

      {data
        ?.filter((item) => {
          if (showChecked && item.isDone) {
            return true;
          }
          if (showUnChecked && !item.isDone) {
            return true;
          }
          if (!showChecked && !showUnChecked) {
            return true;
          }
          return false;
        })
        ?.map((item, index) => {
          return (
            <TodoItem
              classIsDone={item.isDone ? "inactive" : ""}
              key={index}
              data={item}
              onEditExit={handleEditExit}
              onDelete={(e) => handleDelete(e, item.id)}
              onChange={(e) => handleCheckbox(e, item.id)}
              onEdit={(e) => handleEdit(e, item.id)}
              editable={isEditable}
              textEdit={item.text}
              maxLength="40"
              onEditChange={(e) => handleEditInput(e)}
              value={textInput}
              onEditSave={(e) => handleEditSave(e, item.id)}
              editValue={editInput}
              onKeyEditSave={(e) => onKeyEditSave(e, item.id)}
              onKeyEditExit={(e) => onKeyEditExit(e)}
            />
          );
        })}

      <div className="deleteBtnWrapper">
        <Button
          className="deleteBtn"
          text="Delete done tasks"
          onClick={handleDeleteDone}
        />
        <Button
          className="deleteBtn"
          text="Delete all tasks"
          onClick={handleDeleteAll}
        />
      </div>
    </div>
  );
};
export default TodoList;
