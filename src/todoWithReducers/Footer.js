import React from 'react'
import { Container, Row, Col, Button } from "reactstrap"

const leftItemsCount = (todoList) => {
  const activeTodoList = todoList.filter((item) => {
    return (item.status === "active")
  })
  return activeTodoList.length;
}

const hasAnyCompletedItem = (todoList) => {
  let result = false;
  todoList.map((item) => {
    if (item.status === "completed") {
      result = true
      return false;
    }
  });
  return result;
}

const clearCompletedAllTodoFromList= (todoList, dispatcher, allChecked) => {
  const updatedTodoList = todoList.filter((item) => {
    return item.status !== "completed";
  })

  const result = {
    list: updatedTodoList
  }
  dispatcher({ type: "UPDATE_TODO_LIST", payload: result });

  if (allChecked && updatedTodoList.length === 0) {
    dispatcher({ type: "UPDATE_ALL_CHECKED", payload: false })
  }
}

function Footer({ todoList, dispatcher, allChecked }) {
  return(
    <Container className="mt-3">
      <Row>
        <Col md="2">
          { leftItemsCount(todoList) } items left
        </Col>
        <Col md="2">
          <Button color="primary" size="sm" onClick={ () => dispatcher({ type: "UPDATE_FILTER_STATUS", payload: "all" }) } >
            All
          </Button>
        </Col>
        <Col md="2">
          <Button color="warning" size="sm" onClick={ () => dispatcher({ type: "UPDATE_FILTER_STATUS", payload: "active" }) } >
            Active
          </Button>
        </Col>
        <Col md="2">
          <Button color="success" size="sm" onClick={ () => dispatcher({ type: "UPDATE_FILTER_STATUS", payload: "completed" })} >
            Completed
          </Button>
        </Col>
        {
          hasAnyCompletedItem(todoList) &&
          <Col md="2">
            <Button color="danger" size="sm" onClick={ () => clearCompletedAllTodoFromList(todoList, dispatcher, allChecked)} >
              Clear completed
            </Button>
          </Col>
        }
      </Row>
    </Container>
  )
}

export default Footer
