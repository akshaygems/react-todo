import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

function Footer(props) {
  const { todoList, setCurrentFilterStatus, setTodoList } = props;

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
        result = true;
        return false;
      }
      return 0;
    })
    return result;
  }

  const clearCompletedAllTodoFromList = (todoList, setTodoList) => {
    const resultList = todoList.filter((item) => {
      return (item.status !== "completed");
    });

    setTodoList(resultList);
  }

  return(
    <Container className="mt-3">
      <Row>
        <Col md="2">
          { leftItemsCount(todoList) } items left
        </Col>
        <Col md="2">
          <Button color="primary" size="sm" onClick={ () => setCurrentFilterStatus("all") } >
            All
          </Button>
        </Col>
        <Col md="2">
          <Button color="warning" size="sm" onClick={ () => setCurrentFilterStatus("active") } >
            Active
          </Button>
        </Col>
        <Col md="2">
          <Button color="success" size="sm" onClick={ () => setCurrentFilterStatus("completed")} >
            Completed
          </Button>
        </Col>
        {
          hasAnyCompletedItem(todoList) &&
          <Col md="2">
            <Button color="danger" size="sm" onClick={ () => clearCompletedAllTodoFromList(todoList, setTodoList)} >
              Clear completed
            </Button>
          </Col>
        }
      </Row>
    </Container>
  )
}

export default Footer;

