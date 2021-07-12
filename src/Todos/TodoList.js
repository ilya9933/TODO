import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleChange = this.toggleChange.bind(this);
    this.remuveButton = this.remuveButton.bind(this);
  }
  toggleChange(index) {
    this.props.toggleChange(index);
  }
  remuveButton(index) {
    this.props.remuveButton(index);
  }
  todoItem(todo, id) {
    return (
      <TodoItem
        key={id}
        index={id}
        title={todo.title}
        completed={todo.completed}
        toggleChange={this.toggleChange}
        remuveButton={this.remuveButton}
      />
    );
  }
  render() {
    return (
      <section className="section">
        <ul className="ul">
          {this.props.arry.map((todo, id) => {
            if (this.props.filter === "all") {
              return this.todoItem(todo, id);
            } else if (this.props.filter === "active" && !todo.completed) {
              return this.todoItem(todo, id);
            } else if (this.props.filter === "completed" && todo.completed) {
              return this.todoItem(todo, id);
            }
          })}
        </ul>
      </section>
    );
  }
}

export default TodoList;
