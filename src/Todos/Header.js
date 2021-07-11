import React from "react";

class Header extends React.Component {
  text = "";
  constructor(props) {
    super(props);
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleChange() {
    this.props.onClickAdd(this.text);
  }

  handleTextChange(e) {
    this.text = e.target.value;
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <form>
          <input placeholder="New Todo" onChange={this.handleTextChange} />
          <button type="button" onClick={this.handleChange}>
            Push Todo
          </button>
        </form>
      </header>
    );
  }
}
export default Header;
