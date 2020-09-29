import React, {useState} from "react"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"

function TodoList(props) {
  const { todoList, updateTodo, currentFilterStatus } = props;
  const [hoverItemId, setHoverItemId] = useState(0);

  const updateTodoStatus = (event, targetId, allTodoList, updateHookFunction) => {
    let status = "active"
    if (event.target.checked) {
      status = "completed"
    }
    const updatedTodoList = allTodoList.map((item) => {
      if (item.id === targetId) {
        item.status = status
      }
      return item;
    })
    updateHookFunction(updatedTodoList)
  }

  const removeTodoItemFromList = (targetId, allTodoList, updateHookFunction) => {
    const updatedTodoList = allTodoList.filter((item) => {
      return (item.id !== targetId);
    })
    updateHookFunction(updatedTodoList);
  }

  const activeToDo = {
    fontSize: "20px",
    textDecoration: "none"
  }

  const crossBtn = {
    cursor: "pointer"
  }

  const completedToDo = {
    fontSize: "20px",
    textDecoration: "line-through"
  }

  const resetHoverListId = (setHostListIdFunction) => {
    setHostListIdFunction(0);
  }

  const setHoverListId = (id, setHostListIdFunction) => {
    setHostListIdFunction(id);
  }

  const filterTodoList = (todoList, currentFilterStatus) => {
    let result = todoList;
    if (currentFilterStatus !== "all") {
      result = todoList.filter((item) => {
        return (item.status === currentFilterStatus);
      })
    }
    return result;
  }

  return(
    <Container className="mt-3">
      <ListGroup>
        {
          filterTodoList(todoList, currentFilterStatus).map((item) => (
            <ListGroupItem key={item.id}>
              <Row onMouseLeave={ () => resetHoverListId(setHoverItemId) } onMouseEnter={ () => setHoverListId(item.id, setHoverItemId) }>
                <Col md="1">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`todo-items-check-box-${item.id}`}
                      onChange={(event) => updateTodoStatus(event, item.id, todoList, updateTodo)}
                    />
                    <label
                      htmlFor={`todo-items-check-box-${item.id}`}
                      className="custom-control-label"
                    />
                  </div>
                </Col>

                <Col md="6" className="text-left">
                  <span style={ item.status === "completed" ? completedToDo : activeToDo }>
                    { item.name }
                  </span>
                </Col>

                {
                  hoverItemId === item.id &&
                  <Col md="1">
                    <span className="text-danger" style={ crossBtn } onClick={() => removeTodoItemFromList(item.id, todoList, updateTodo)}>
                      X
                    </span>
                  </Col>
                }
              </Row>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Container>
  )
}

export default TodoList;
