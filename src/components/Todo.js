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
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      }),
    });
  };

  // one function to change all
  // handleCheckbox = (e, id) => {
  //   this.setState({
  //     data: this.state.data.map((item) => {
  //       if (item.id === id) {
  //         item.isDone = !item.isDone;
  //         item.showChecked = item.isDone;
  //         item.showUnChecked = !item.isDone;
  //       }
  //       return item;
  //     }),
  //   });
  // };

  handleAll = () => {
    console.log("stiso");
    this.setState({
      showChecked: false,
      showUnChecked: false,
    });
  };

  handleDone = () => {
    console.log("stiso");
    this.setState({ showChecked: true, showUnChecked: false });
  };

  handleTodo = () => {
    console.log("stiso");
    this.setState({ showChecked: false, showUnChecked: true });
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
          <Button className="listBtn" text="All" onClick={this.handleAll} />
          <Button className="listBtn" text="Done" onClick={this.handleDone} />
          <Button className="listBtn" text="Todo" onClick={this.handleTodo} />
        </div>

        {this.state.data
          ?.filter((item) => {
            if (item.showChecked && item.isDone) {
              console.log("done");
              return true;
            } else if (item.showUnChecked && !item.isDone) {
              console.log("not");
              return true;
            } else if (!item.showChecked && !item.showUnChecked) {
              console.log("all");
              return true;
            }
            return true;
          })
          .map((item, index) => {
            return (
              <TodoList
                key={index}
                data={item.text}
                onClick={(e) => this.handleDelete(e, item.id)}
                onChange={(e) => this.handleCheckbox(e, item.id)}
                checked={item.isDone}
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
