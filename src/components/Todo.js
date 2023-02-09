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

  // function to handle input text
  handleChange = (e) => {
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
    console.log(id);
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
  deleteAll = () => {
    this.setState({
      data: [],
    });
  };

  handleCheckbox = () => {
    this.setState({
      isDone: !this.state.data.isDone,
    });
  };

  render() {
    // console.log(this.state.data);
    return (
      <div className="todoWrapper">
        <h1>TodoInput</h1>
        <div className="inputWrapper">
          <Input
            type="text"
            placeholder="New Todo"
            onChange={this.handleChange}
          />
          <Button text="Add new task" onClick={this.handleAdd} />
        </div>
        <h1>TodoList</h1>
        <Button text="All" />
        <Button text="Done" />
        <Button text="Todo" />
        {this.state.data?.map((item, index) => {
          return (
            <TodoList
              key={index}
              data={item.text}
              onClick={(e) => this.handleDelete(e, item.id)}
              onChange={() => this.handleCheckbox()}
            />
          );
        })}
        <div>
          <Button text="Delete done tasks" />
          <Button text="Delete all tasks" onClick={this.deleteAll} />
        </div>
      </div>
    );
  }
}
