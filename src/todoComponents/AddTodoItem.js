import React, { Component } from 'react'

class AddTodoItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     input: {
  //       todo_name: "",
  //     },
  //     todo_list: []
  //   }
  // }

  onInputTodoName = (event) => {
    const todoLength = this.state.todo_list.length
    const hash = {
      id: 0,
      name: "todo 1"
    }
  }

  updateTodoNameOnChange = (event) => {
    this.setState({
      input: {
        todo_name: event.target.value
      }
    })
  }

  render() {
    const input = this.props.input;
    return(
      <div>
        <input
          text="text"
          value={ input.todo_name }
          onBlur={ this.onInputTodoName }
          onChange={ this.updateTodoNameOnChange }
        />
      </div>
    )
  }
}

export default AddTodoItem;
