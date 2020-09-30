import React, { Component } from 'react'

class EventHandler extends Component {
  constructor() {
    super()
    this.state = {
      message: "Hii"
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler = () => {
    this.setState({
      message: "Good bye"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventHandler;