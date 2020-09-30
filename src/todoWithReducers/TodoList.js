import React, { useReducer } from 'react'
import { Container, ListGroupItem, ListGroup, Row, Col } from 'reactstrap';

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

const initialState = {
  id: 0
};

const updateTodoStatus = (todoList, targetId, updateTodoStatusDispatcher) => {
  const updatedTodoList = todoList.map((item)=> {
    if(item.id === targetId) {
      item.status = item.status === "completed" ? "active" : "completed"
    }
    return item;
  });

  const result = {
    list: updatedTodoList
  }
  updateTodoStatusDispatcher({ type: "UPDATE_TODO_LIST", payload: result })
}

const filterTodoList = (todoList, currentListStatus) => {
  if (currentListStatus === "all") {
    return todoList;
  }
  return todoList.filter((item) => item.status === currentListStatus);
}

const removeTodoItemFromList = (targetId, todoList, updateTodoListDispatcher) => {
  const updatedTodoList = todoList.filter((item) => item.id !== targetId);

  const result = {
    list: updatedTodoList,
  }
  updateTodoListDispatcher({ type: "UPDATE_TODO_LIST", payload: result });
}

const setHoverItemIdReducer = (state, action) => {
  switch(action.type) {
    case "SET_HOVER_ID":
      return {
        id: action.payload
      }
  }
}

function TodoList({ todoList, currentListStatus, dispatcher }) {
  const [hoverItem, dispatch] = useReducer(setHoverItemIdReducer, initialState)
  return (
    <Container className="mt-3">
      <ListGroup>
        {
          filterTodoList(todoList, currentListStatus).map((item) => (
            <ListGroupItem key={item.id}>
              <Row
                onMouseLeave={ () => dispatch({ type: "SET_HOVER_ID", payload: initialState }) }
                onMouseEnter={ () => dispatch({ type: "SET_HOVER_ID", payload: item.id }) }
              >
                <Col md="1">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`todo-items-check-box-${item.id}`}
                      checked={ item.status === "completed" ? true : false }
                      onChange={ () => updateTodoStatus(todoList, item.id, dispatcher) }
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
                  hoverItem.id === item.id &&
                  <Col md="1">
                    <span className="text-danger" style={ crossBtn } onClick={() => removeTodoItemFromList(item.id, todoList, dispatcher)}>
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

export default TodoList
