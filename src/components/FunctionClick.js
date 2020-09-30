import React from 'react'
import { func } from 'prop-types';

function functionClickHandler() {
  console.log("function click handle");
}

function FunctionClick() {
  return(
    <div>
      <button onClick={functionClickHandler}>Click</button>
    </div>
  )
}
export default FunctionClick;