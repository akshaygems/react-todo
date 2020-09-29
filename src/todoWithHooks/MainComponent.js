import React, { useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import Header from "./Header"
import TodoList from "./TodoList"
import Footer from "./Footer"

function MainComponent() {
  const [todoInput, setTodoInputValue] = useState("");
  const [lastTodoId, setLastTodoId] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");

  const createNewTodo = (event) => {
    if (event.keyCode !== 13) {
      return false
    }

    const targetValue = event.target.value;
    if (targetValue === "") {
      alert("Todo name can't be blank")
      return false;
    }
    const newTodoId = lastTodoId + 1;
    const hash = {
      id: newTodoId,
      name: targetValue,
      status: "active",
    }
    setTodoList([...todoList, hash])
    setLastTodoId(prevId => prevId + 1)
    setTodoInputValue("");
  }

  return (
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
                        />
                      <label
                        htmlFor="check-all-todo-items-check-box"
                        className="custom-control-label"
                      />
                    </div>
                  </div>
                </div>
                <input
                  text="text"
                  className="form-control"
                  placeholder="What needs to done?"
                  value={todoInput}
                  onKeyUp={(event) => createNewTodo(event) }
                  onChange={(event)=> setTodoInputValue(event.target.value)}
                />
              </div>

              {
                todoList.length > 0 &&
                <TodoList
                  todoList={ todoList }
                  updateTodo= { setTodoList }
                  currentFilterStatus={ currentFilterStatus }
                />
              }

              <Footer
                todoList={ todoList }
                setCurrentFilterStatus={ setCurrentFilterStatus }
                setTodoList={ setTodoList }
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MainComponent;
