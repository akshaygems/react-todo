import React, { Component } from "react"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      comment: "",
      language: "react"
    }
  }

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  changeCommentHandler = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  changeLanguageHandler = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  formSubmitHandler = (event) => {
    alert(`${this.state.userName}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.changeUserNameHandler}
            />

            <label>Comment</label>
            <textarea
              value={this.state.comment}
              onChange={this.changeCommentHandler}
            />

            <label>Comment</label>
            <select
              value={this.state.language}
              onChange={this.changeLanguageHandler}
            >
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="javascript">Javascript</option>
            </select>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;