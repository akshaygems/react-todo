import React from "react"

const UpdateComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        count: 0
      }
    }
  
    increaseCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }

    render() {
      return <OriginalComponent name="akshay" count={this.state.count} increaseCount={this.increaseCount} />
    }
  }
  return NewComponent
}

export default UpdateComponent
