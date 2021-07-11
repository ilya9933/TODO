import React from "react";
// import TodoList from "./TodoList";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  task();
  // onChang = (value) => {
  //   this.state.currenttodo = value;
  // };
  render() {
    return (
    <ul>
      {/* <TodoList />; */}
    </ul>)

    // (
    //   <div>
    //     onSubmi={}t<input onChange={() => method(e.value)}></input>
    //     {this.state.todos.map((item) => (
    //       <li id={item.id}>{item.title}</li>
    //     ))}
    //   </div>
    // );
  }
}

export default Section;
