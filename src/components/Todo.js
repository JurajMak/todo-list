import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoList";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      data: [],
    };
  }
  // random number generator for item ID's
  randomIdGenerator = () => {
    let randomChars = "qwertzuiopasdfghjyxcvbnm123456789";
    let randomId = " ";

    for (let i = 1; i <= 10; i++) {
      randomId += randomChars.charAt(Math.random() * randomChars.length);
    }
    return randomId;
  };
  handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.setState({
        data: [
          ...this.state.data,
          {
            id: this.randomIdGenerator(),
            text: this.state.textInput,
            isDone: false,
            showChecked: false,
            showUnChecked: false,
          },
        ],
        textInput: "",
      });
    }
  };

  // function to handle input text
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ textInput: e.target.value });
  };

  // function for adding input text and other values in list
  handleAdd = () => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.randomIdGenerator(),
          text: this.state.textInput,
          isDone: false,
          showChecked: false,
          showUnChecked: false,
        },
      ],
      textInput: "",
    });
  };

  // function for deleting item from list
  handleDelete = (e, id) => {
    this.setState({
      data: [
        ...this.state.data?.filter((item) => {
          if (item.id !== id) {
            return item.id;
          }
        }),
      ],
    });
  };
  deleteAll = () => {
    this.setState({
      data: [],
    });
  };

  handleCheckbox = (e, id) => {
    console.log(id);
    this.setState({
      ...this.state.data?.map((item) => {
        if (item.id !== id) {
          // checkbox logic?
        }
      }),
    });
  };
  toggleChange = () => {
    this.setState({
      isDone: !this.state.isDone,
    });
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="todoWrapper">
        <h1>TodoInput</h1>
        <div className="inputWrapper">
          <Input
            className="input"
            onKeyDown={this.handleKeyPressed}
            value={this.state.textInput}
            type="text"
            placeholder="New Todo"
            onChange={this.handleChange}
          />
          <Button
            className="addBtn"
            text="Add new task"
            onClick={this.handleAdd}
          />
        </div>
        <h1>TodoList</h1>
        <div className="todoListBtnWrapper">
          <Button className="listBtn" text="All" />
          <Button className="listBtn" text="Done" />
          <Button className="listBtn" text="Todo" />
        </div>

        {this.state.data?.map((item, index) => {
          return (
            <TodoList
              key={index}
              data={item.text}
              onClick={(e) => this.handleDelete(e, item.id)}
              onChange={(e) => this.toggleChange(e, item.id)}
            />
          );
        })}

        <div className="deleteBtnWrapper">
          <Button className="deleteBtn" text="Delete done tasks" />
          <Button
            className="deleteBtn"
            text="Delete all tasks"
            onClick={this.deleteAll}
          />
        </div>
      </div>
    );
  }
}
