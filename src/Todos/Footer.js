import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filter: "all" };
    this.clickOnButton = this.clickOnButton.bind(this);
    this.clickOnButtonClear = this.clickOnButtonClear.bind(this);
  }
  itemsLeft() {
    let itemsLeft = this.props.arry.filter((item) => item.completed === false);

    return itemsLeft;
  }
  clickOnButton(event) {
    const id = event.target.id;
    this.props.clickOnButton(id);
    console.log("event", event);

    this.setState({ filter: id });
  }
  clickOnButtonClear() {
    this.props.clickOnButtonClear();
  }
  render() {
    return (
      <footer className="Footer">
        <div>{this.itemsLeft().length} items left</div>
        <div>
          <button
            id="all"
            onClick={this.clickOnButton}
            className={this.state.filter === "all" ? "border" : ""}
          >
            all
          </button>
          <button
            id="active"
            onClick={this.clickOnButton}
            className={this.state.filter === "active" ? "border" : ""}
          >
            active
          </button>
          <button
            id="completed"
            onClick={this.clickOnButton}
            className={this.state.filter === "completed" ? "border" : ""}
          >
            completed
          </button>
        </div>
        <button onClick={this.clickOnButtonClear}>clear</button>
      </footer>
    );
  }
}

export default Footer;
