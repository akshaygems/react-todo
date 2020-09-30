import React, { Component } from "react"

class Hero extends Component {
  render() {
    if(this.props.heroName == "Joker") {
      throw new Error("Not a hero")
    }
    return(
      <div>
        <h1>{this.props.heroName}</h1>
      </div>
    )
  }
}

export default Hero;
