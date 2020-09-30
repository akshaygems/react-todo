import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1
    // },
    // () => {
    //   console.log("callback value", this.state.count)
    // })
    this.setState((previousState) => ({
      count: previousState.count+1
      })
    )
  }
  incrementCountByFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <p>Count - { this.state.count }</p>
        <button onClick={ () => this.incrementCountByFive() }>Increase count</button>
      </div>
    )
  }
}

export default Counter;
