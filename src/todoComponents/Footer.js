import React, { Component } from "react"

class Footer extends Component {
  getLeftItemsCount = (props) => {
    let count = 0;
    props.todoList.map((item) => {
      if (item.status === "active") {
        count = count + 1;
      }
      return item
    });
    return count;
  }

  render() {
    const footerContainer = {
      margin: "30px",
      display: "flex",
      justifyContent: "center"
    }
    const footerButton = {
      marginLeft: "30px",
    }
    const {updateShowTodoListStatus} = this.props;
    let leftItemsCount = this.getLeftItemsCount(this.props);
    return(
      <div style={footerContainer}>
        {leftItemsCount} items left
        <button
          onClick={() => updateShowTodoListStatus("all")}
          style={footerButton}
        >
          All
        </button>
        <button
          onClick={ () => updateShowTodoListStatus("active") }
          style={footerButton}
        >
          Active
        </button>
        <button
          onClick={ () => updateShowTodoListStatus("completed")}
          style={footerButton}
        >
          Completed
        </button>
        <button
          onClick={ () => this.props.clearCompletedAllTodoFromList()}
          style={footerButton}
        >
          Clear completed
        </button>
      </div>
    )
  }
}

export default Footer;