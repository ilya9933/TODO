import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.clickOnButtonCompleted = this.clickOnButtonCompleted.bind(this);
    this.state = { text: "" };
  }

  handleChange(event) {
    if (event.keyCode === 13) {
      this.props.onClickAdd(this.state.text);
      this.setState({ text: "" });
      event.preventDefault();
    }
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  clickOnButtonCompleted() {
    this.props.clickOnButtonCompleted();
  }

  render() {
    return (
      <header className="header">
        <h1 className="h1">Todos</h1>
        <div className="header__input">
          <button className="togel-all" onClick={this.clickOnButtonCompleted}>
            &radic;
          </button>
          <form className="form">
            <input
              className="new-todo"
              placeholder="New Todo"
              autoFocus
              onChange={this.handleTextChange}
              onKeyDown={this.handleChange}
              value={this.state.text}
            />
          </form>
        </div>
      </header>
    );
  }
}
export default Header;
