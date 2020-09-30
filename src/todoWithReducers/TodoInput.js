import React, { useReducer } from 'react'

const initialState = ""

const reducer = (state, action) => {
  switch(action.type) {
    case "ON_CHANGE": {
      return action.payload;
    }
    case "RESET_CHANGES":
      return initialState;
    default: {
      return state;
    }
  }
}

const createNewTodo = (event, lastTodoId, createNewTodoDispatcher, inputTodoNameDispatch) => {
  if (event.keyCode !== 13) {
    return false;
  }

  const targetValue = event.target.value;
  if (targetValue === "") {
    alert("Todo name can't be blank")
    return false;
  }

  const toDoHash = {
    id: lastTodoId + 1,
    name: targetValue,
    status: "active",
  }

  createNewTodoDispatcher({ type: "CREATE_TODO", payload: toDoHash });
  inputTodoNameDispatch({ type: "RESET_CHANGES" });
}

const updateAllTodoStatus = (event, todoList, dispatcher) => {
  const target = event.target;
  let status = "active"
  let allChecked = false;

  if (target.checked) {
    status = "completed";
    allChecked = true;
  }
  const updatedTodoList = todoList.map((item) => {
    item.status = status
    return item;
  });

  const result = {
    list: updatedTodoList
  }
  dispatcher({ type: "UPDATE_TODO_LIST", payload: result })
  dispatcher({ type: "UPDATE_ALL_CHECKED", payload: allChecked })
}

const hasAnyActiveTodo = (todoList) => {
  let result = false;
  todoList.map((item) => {
    if (item.status === "active") {
      result = true;
    }
    return false
  });
  return result;
}

function TodoInput({ lastTodoId, todoList, dispatcher, allChecked }) {
  const [state, inputTodoNameDispatch] = useReducer(reducer, initialState);

  return (
    <div className="input-group input-group-lg mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="check-all-todo-items-check-box"
              checked={ allChecked ? !hasAnyActiveTodo(todoList) : false }
              onChange={ (event) => updateAllTodoStatus(event, todoList, dispatcher)}
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
        value={ state }
        onKeyUp={ (event) => createNewTodo(event, lastTodoId, dispatcher, inputTodoNameDispatch) }
        onChange={ (event) => inputTodoNameDispatch({ type: "ON_CHANGE", payload: event.target.value }) }
      />
    </div>
  )
}

export default TodoInput
