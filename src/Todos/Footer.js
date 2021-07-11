import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.clickOnButton = this.clickOnButton.bind(this);
    this.clickOnButtonClear = this.clickOnButtonClear.bind(this);
  }
  itemsLeft() {
    let itemsLeft = this.props.arry.filter((item) => item.completed === false);
    console.log("props", this.props);
    console.log("itemsLeft", itemsLeft);
    return itemsLeft;
  }
  clickOnButton(event) {
    const id = event.target.id;
    this.props.clickOnButton(id);
  }
  clickOnButtonClear() {
    this.props.clickOnButtonClear();
  }
  render() {
    return (
      <div className="Footer">
        <div>{this.itemsLeft().length} items left</div>
        <div>
          <button id="all" onClick={this.clickOnButton}>
            all
          </button>
          <button id="active" onClick={this.clickOnButton}>
            active
          </button>
          <button id="completed" onClick={this.clickOnButton}>
            completed
          </button>
        </div>
        <button onClick={this.clickOnButtonClear}>clear</button>
      </div>
    );
  }
}

export default Footer;
