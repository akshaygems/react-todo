import React from "react"

function Child(props) {
  return (
    <div>

      <button onClick={() => props.clickHandler("child")}>Click here</button>
    </div>
  )
}

export default Child