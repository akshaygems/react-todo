import React, { Component } from "react"
import { Container, ListGroupItem, ListGroup, Row, Col } from 'reactstrap';
class TodoList extends Component {
  render() {
    const todoItemNameClass = {
      fontSize: "20px",
      textDecoration: "none"
    }

    const completedTaskClass = {
      fontSize: "20px",
      textDecoration: "line-through"
    }

    const crossBtn = {
      cursor: "pointer"
    }

    let todoListArray = this.props.todoList;
    let removeTodoItemFromList = this.props.removeTodoItemFromList;
    let updateTodoStatus = this.props.updateTodoStatus;
    let setHoverListId = this.props.setHoverListId;
    let resetHoverListId = this.props.resetHoverListId;

    return(
      <Container className="mt-3">
        <ListGroup>
          {
            todoListArray.map(
              todoItem => (
                <ListGroupItem key={todoItem.id}>
                  <Row onMouseLeave={()=>resetHoverListId()} onMouseEnter={()=>setHoverListId(todoItem.id)}>
                    <Col md="1">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`todo-items-check-box-${todoItem.id}`}
                          checked={ todoItem.status === "completed" ? true : false }
                          onChange={ (event) => updateTodoStatus(event, todoItem.id) }
                        />
                        <label
                          htmlFor={`todo-items-check-box-${todoItem.id}`}
                          className="custom-control-label"
                        />
                      </div>
                    </Col>
                    <Col md="6" className="text-left">
                      <span style={ todoItem.status === "completed" ? completedTaskClass : todoItemNameClass } >
                        { todoItem.name }
                      </span>
                    </Col>

                    {
                      this.props.listHoverId === todoItem.id &&
                      <Col md="1">
                        <span className="text-danger" style={ crossBtn } onClick={() => removeTodoItemFromList(todoItem.id)}>
                          X
                        </span>
                      </Col>
                    }
                  </Row>
                </ListGroupItem>
              )
            )
          }
        </ListGroup>
      </Container>
    )
  }
}
export default TodoList;