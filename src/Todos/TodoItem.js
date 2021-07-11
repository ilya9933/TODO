import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleChange = this.toggleChange.bind(this);
    this.classText = this.classText.bind(this);
    this.remuveButton = this.remuveButton.bind(this);
  }
  toggleChange() {
    let index = this.props.index;
    this.props.toggleChange(index);
  }
  remuveButton() {
    let index = this.props.index;
    this.props.remuveButton(index);
  }
  classText() {
    if (this.props.completed === true) {
      return "text-completed";
    } else {
      return "text";
    }
  }
  render() {
    return (
      <li className="li">
        <span className={this.classText()}>
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={this.toggleChange}
          />
          {this.props.title}
        </span>
        <button onClick={this.remuveButton}>&times;</button>
      </li>
    );
  }
}

export default TodoItem;
