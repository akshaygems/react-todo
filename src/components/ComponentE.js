import React, { Component } from 'react'
import {UserConsumer} from './userContext'

class ComponentE extends Component {
  render() {

    return (
      <UserConsumer >
        {
          (userName) => [
            <h1>Hello {userName} </h1>
          ]
        }
      </UserConsumer>
    )
  }
}

export default ComponentE
