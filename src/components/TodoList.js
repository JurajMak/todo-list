import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import TodoItem from "./TodoItem";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      data: [],
      showChecked: false,
      showUnChecked: false,
      isEditable: "",
      editInput: "",
    };
  }
  // adding input values to  list on pressed enter

  handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        data: [
          ...this.state.data,
          {
            id: Date.now(),
            text: this.state.textInput,
            isDone: false,
          },
        ],
        textInput: "",
      });
    }
  };
  //  adding input text and other values in list

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {
          id: Date.now(),
          text: this.state.textInput,
          isDone: false,
        },
      ],
      textInput: "",
    });
  };

  // handle input text

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ textInput: e.target.value });
  };

  handleEditInput = (e) => {
    this.setState({ editInput: e.target.value });
  };

  //  deleting selected item from list

  handleDelete = (e, id) => {
    this.setState({
      data: [
        ...this.state.data?.filter((item) => {
          if (item.id !== id) {
            return item;
          }
        }),
      ],
    });
  };

  // editing selected items from list

  handleEdit = (e, id) => {
    console.log(id);
    this.setState({
      isEditable: id,
    });
  };
  handleEditExit = () => {
    this.setState({
      isEditable: "",
    });
  };
  handleEditSave = (e, id) => {
    console.log(id);
    this.setState({
      data: [
        ...this.state.data?.filter((item) => {
          if (item.id === id) {
            return (item.text = this.state.editInput);
          }
          return item;
        }),
      ],
      isEditable: "",
    });
  };
  onKeyEditSave = (e, id) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        data: [
          ...this.state.data?.filter((item) => {
            if (item.id === id) {
              return (item.text = this.state.editInput);
            }
            return item;
          }),
        ],
        isEditable: "",
      });
    }
  };
  // deleting all items from list

  // deleting ALL checked/done items from list

  handleDeleteDone = () => {
    this.setState({
      data: [
        ...this.state.data?.filter((item) => {
          return item.isDone === this.state.showChecked;
        }),
      ],
    });
  };

  handleDeleteAll = () => {
    this.setState({
      data: [],
    });
  };

  handleCheckbox = (e, id) => {
    console.log(id);
    this.setState({
      data: this.state.data?.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      }),
    });
  };

  handleAll = () => {
    console.log("handleall");
    this.setState({
      showChecked: false,
      showUnChecked: false,
    });
  };

  handleDone = () => {
    console.log("handledone");
    this.setState({ showChecked: true, showUnChecked: false });
  };

  handleTodo = () => {
    console.log("handletodo");
    this.setState({ showChecked: false, showUnChecked: true });
  };

  render() {
    return (
      <div className="todoWrapper">
        <h1>TodoInput</h1>
        <div className="inputWrapper">
          <form>
            <Input
              className="input"
              onKeyDown={this.handleKeyPressed}
              value={this.state.textInput}
              type="text"
              placeholder="New Todo"
              onChange={this.handleChange}
              maxLength="40"
            />
          </form>
          <Button
            className="addBtn"
            text="Add new task"
            onClick={this.handleAdd}
          />
        </div>
        <h1>TodoItem</h1>
        <div className="TodoItemBtnWrapper">
          <Button className="listBtn" text="All" onClick={this.handleAll} />
          <Button className="listBtn" text="Done" onClick={this.handleDone} />
          <Button className="listBtn" text="Todo" onClick={this.handleTodo} />
        </div>

        {this.state.data
          ?.filter((item) => {
            if (this.state.showChecked && item.isDone) {
              return true;
            }
            if (this.state.showUnChecked && !item.isDone) {
              return true;
            }
            if (!this.state.showChecked && !this.state.showUnChecked) {
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
                onEditExit={this.handleEditExit}
                onDelete={(e) => this.handleDelete(e, item.id)}
                onChange={(e) => this.handleCheckbox(e, item.id)}
                onEdit={(e) => this.handleEdit(e, item.id)}
                editable={this.state.isEditable}
                textEdit={item.text}
                maxLength="40"
                onEditChange={(e) => this.handleEditInput(e)}
                value={this.state.textInput}
                onEditSave={(e) => this.handleEditSave(e, item.id)}
                editValue={this.state.editInput}
                onKeyEditSave={(e) => this.onKeyEditSave(e, item.id)}
              />
            );
          })}

        <div className="deleteBtnWrapper">
          <Button
            className="deleteBtn"
            text="Delete done tasks"
            onClick={this.handleDeleteDone}
          />
          <Button
            className="deleteBtn"
            text="Delete all tasks"
            onClick={this.handleDeleteAll}
          />
        </div>
      </div>
    );
  }
}
