import React, { Component } from "react"
import Child from "./Child"

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      parentMessage: "parent"
    }
    this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent(childName) {
    alert(`hello ${this.state.parentMessage} from ${childName}`);
  }
  render() {
    return (
      <div>
        <Child clickHandler={this.clickEvent} />
      </div>
    )
  }
}

export default Parent