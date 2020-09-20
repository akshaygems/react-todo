import React, { Component } from "react"

class TodoList extends Component {
  render() {
    const toDoContainer = {
      display: "flex",
      width: "41%",
      margin: "0 auto",
      justifyContent: "space-around"
    }

    const deleteTodoBtn = {
      color: "red",
      cursor: "pointer"
    }

    const todoItemNameClass = {
      padding: "10px",
      fontSize: "20px",
      textDecoration: "none"
    }

    const completedTaskClass = {
      padding: "10px",
      fontSize: "20px",
      textDecoration: "line-through"
    }

    let todoListArray = this.props.todoList;
    let removeTodoItemFromList = this.props.removeTodoItemFromList;
    let updateTodoStatus = this.props.updateTodoStatus;
    const checkBoxValue = this.props.allChecked
    const todoList = todoListArray.map(
      todoItem => (
        <div key={todoItem.id} style={toDoContainer}>
          <div>
            <input
              type="checkbox"
              checked={ todoItem.status === "completed" ? true : false }
              onChange={ (event) => updateTodoStatus(event, todoItem.id) }
            />
            <span style={ todoItem.status === "completed" ? completedTaskClass : todoItemNameClass }>
              { todoItem.name }
            </span>
          </div>

          <span style={deleteTodoBtn} onClick={() => removeTodoItemFromList(todoItem.id)}>X</span>
        </div>
      )
    )
    return(
      <div>{ todoList }</div>
    )
  }
}
export default TodoList;