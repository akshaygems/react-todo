import React, { Component } from "react"
import UpdateComponent from "./WithCounter"

class HoverCounter extends Component {
  render() {
    let {count, name, increaseCount} = this.props;
    return(
      <div>
        <button onMouseOver={increaseCount}> {name} Hover {count} no times</button>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter)
