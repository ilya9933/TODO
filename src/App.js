import React from "react";
import Header from "./Todos/Header";
import TodoList from "./Todos/TodoList";
import Footer from "./Todos/Footer";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAddChange = this.handleClickAddChange.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.remuveButton = this.remuveButton.bind(this);
    this.clickOnButtonCompleted = this.clickOnButtonCompleted.bind(this);
    this.clickOnButton = this.clickOnButton.bind(this);
    this.clickOnButtonClear = this.clickOnButtonClear.bind(this);
    this.state = {
      arr: [
        { completed: false, title: "купить хлеб" },
        { completed: false, title: "купить молоко" },
        { completed: false, title: "купить масло" },
      ],
      filter: "all",
    };
  }

  toggleChange(index) {
    let arr = this.state.arr;
    arr[index].completed = !arr[index].completed;

    this.setState({ arr: arr, filter: this.state.filter });
  }

  clickOnButton(id) {
    this.setState({ arr: this.state.arr, filter: id });
  }

  clickOnButtonClear() {
    let arr = this.state.arr.filter((item) => !item.completed);
    this.setState({ arr: arr, filter: this.state.filter });
  }

  clickOnButtonCompleted() {
    let arrCompleted = this.state.arr.filter((item) => item.completed);

    if (this.state.arr.length === arrCompleted.length) {
      this.state.arr.map((todo) => {
        todo.completed = false;
      });
    } else {
      this.state.arr.map((todo) => {
        todo.completed = true;
      });
    }

    this.setState({ arr: this.state.arr, filter: this.state.filter });
    console.log("hyi", this.state.arr);
  }

  remuveButton(index) {
    this.state.arr.splice(index, 1);

    this.setState({ arr: this.state.arr, filter: this.state.filter });
  }

  handleClickAddChange(title) {
    this.state.arr.push({ completed: false, title: title });
    this.setState({ arr: this.state.arr, filter: this.state.filter });
  }

  render() {
    return (
      <>
        <Header
          onClickAdd={this.handleClickAddChange}
          clickOnButtonCompleted={this.clickOnButtonCompleted}
        />
        <TodoList
          arry={this.state.arr}
          filter={this.state.filter}
          toggleChange={this.toggleChange}
          remuveButton={this.remuveButton}
        />
        <Footer
          arry={this.state.arr}
          clickOnButton={this.clickOnButton}
          clickOnButtonClear={this.clickOnButtonClear}
        />
      </>
    );
  }
}

export default App;
