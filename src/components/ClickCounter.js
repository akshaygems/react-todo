import React, { Component } from "react"
import UpdateComponent from "./WithCounter"

class ClickCounter extends Component {
  render() {
    let {count, name, increaseCount} = this.props;

    return(
      <div>
        <button onClick={increaseCount}>{name} Clicked {count} no times</button>
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter)
