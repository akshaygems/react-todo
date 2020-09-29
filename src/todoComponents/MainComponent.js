import React, { Component } from 'react'
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import { Container, Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        todo_name: "",
      },
      lastTodoId: 0,
      todo_list: [],
      currentListStatus: "all",
      allChecked: false,
      hoverId: 0
    }
    this.removeTodoItemFromList = this.removeTodoItemFromList.bind(this);
    this.updateTodoStatus = this.updateTodoStatus.bind(this);
  }

  setHoverListId = (listHoverId) => {
    this.setState({
      hoverId: listHoverId
    })
  }

  resetHoverListId = () => {
    this.setState({
      hoverId: 0
    })
  }

  addTodoNameInList = (event) => {
    if (event.keyCode !== 13) {
      return false;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      alert("Todo name can't be blank")
      return false;
    }
    const todoId = this.state.lastTodoId + 1;
    const hash = {
      id: todoId,
      name: targetValue,
      status: "active",
    }
    this.setState({
      todo_list: this.state.todo_list.concat(hash),
      lastTodoId: todoId,
      input: {
        todo_name: "",
      },
    })
  }

  updateShowTodoListStatus = (updatingStatus) => {
    this.setState({
      currentListStatus: updatingStatus
    })
  }

  updateTodoStatus = (event, todoItemId) => {
    const target = event.target;
    let status = "active"

    if (target.checked) {
      status = "completed"
    }
    const updatedTodoList = this.state.todo_list.map((item)=>{
      if (item.id === todoItemId) {
        item.status = status
      }
      return item;
    });

    this.setState({
      todo_list: updatedTodoList
    })
  }

  removeTodoItemFromList (todoItemId) {
    let oldTodoList = this.state.todo_list
    const filteredTodoList = oldTodoList.filter((item)=>{
      return (item.id !== todoItemId)
    });
    this.setState({ todo_list: filteredTodoList });
  }

  updateTodoNameOnChange = (event) => {
    this.setState({
      input: {
        todo_name: event.target.value
      }
    })
  }

  getTodoList() {
    const currentListStatus = this.state.currentListStatus;
    let todoList = this.state.todo_list
    if (currentListStatus !== "all") {
      todoList = this.state.todo_list.filter((item) => {
        return (item.status === currentListStatus);
      })
    }
    return todoList;
  }

  updateAllTodoStatus = (event) => {
    const target = event.target;
    let status = "active"

    if (target.checked) {
      status = "completed"
    }
    const updatedTodoList = this.state.todo_list.map((item)=>{
      item.status = status
      return item;
    });

    this.setState({
      todo_list: updatedTodoList,
      allChecked: target.checked
    })
  }

  clearCompletedAllTodoFromList = () => {
    let todoList = this.state.todo_list
    const newTodoList = todoList.filter((item) => {
      return (item.status !== "completed");
    })

    this.setState({
      todo_list: newTodoList,
      allChecked: false
    })
  }

  getAllCheckCheckBoxValue = () => {
    const todoList = this.state.todo_list;
    const hasActiveTodo = todoList.filter((item) => {
      return (item.status === "active");
    });
    return !(hasActiveTodo.length > 0)
  }

  render() {
    const input = this.state.input;
    return(
      <div>
        <Container className="p-5">
          <Row>
            <Col>
              <Card>
                <CardHeader className="bg-info text-white">
                  <Header />
                </CardHeader>

                <CardBody>
                  <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-all-todo-items-check-box"
                            checked={ this.state.allChecked ? this.getAllCheckCheckBoxValue() : false }
                            onChange={(event) => this.updateAllTodoStatus(event)} />
                          <label
                            htmlFor="check-all-todo-items-check-box"
                            className="custom-control-label"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      text="text"
                      value={ input.todo_name }
                      className="form-control"
                      placeholder="What needs to done?"
                      onKeyUp={ this.addTodoNameInList }
                      onChange={ this.updateTodoNameOnChange }
                    />
                  </div>

                  {
                    this.state.todo_list.length > 0 &&
                    <TodoList
                      todoList={ this.getTodoList() }
                      removeTodoItemFromList={ this.removeTodoItemFromList }
                      updateTodoStatus={ this.updateTodoStatus }
                      allChecked={this.state.allChecked}
                      listHoverId={this.state.hoverId}
                      setHoverListId={this.setHoverListId}
                      resetHoverListId={this.resetHoverListId}
                    />
                  }
                  
                  <Footer
                    todoList={ this.state.todo_list }
                    updateShowTodoListStatus={ this.updateShowTodoListStatus }
                    clearCompletedAllTodoFromList={ this.clearCompletedAllTodoFromList }
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default MainComponent;
