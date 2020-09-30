import React, { useState, useReducer } from "react"
import TodoInput from "./TodoInput";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

const initialState = {
  lastTodoId: 0,
  todoList: [],
  currentListStatus: "all",
  allChecked: false
};

const reducer = (state, action) => {
  switch(action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        lastTodoId: state.lastTodoId + 1,
        todoList: [...state.todoList, action.payload]
      }
    case "UPDATE_TODO_LIST":
      return {
        ...state,
        todoList: action.payload.list
      }
    case "UPDATE_FILTER_STATUS":
      return {
        ...state,
        currentListStatus: action.payload
      }
    case "UPDATE_ALL_CHECKED":
      return {
        ...state,
        allChecked: action.payload
      }
  }
}

function MainComponent() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container className="p-5">
      <Row>
        <Col>
          <Card>
            <CardHeader className="bg-info text-white">
              <Header />
            </CardHeader>

            <CardBody>
              <TodoInput
                dispatcher={ (event) => dispatch(event) }
                todoList={ state.todoList }
                lastTodoId={ state.lastTodoId }
                allChecked={ state.allChecked }
              />

              {
                state.todoList.length > 0 &&
                <TodoList
                  todoList={ state.todoList }
                  currentListStatus={ state.currentListStatus }
                  dispatcher={ (event) => dispatch(event) }
                />
              }

              <Footer
                todoList={ state.todoList }
                dispatcher={ (event) => dispatch(event) }
                allChecked={ state.allChecked }
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MainComponent;
