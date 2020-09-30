import React from "react"
import Person from "./Person"

function UserList() {
  const persons = [
    {
      id: 1,
      name: "Akshay",
      age: "24",
      skills: "c++",
    },
    {
      id: 2,
      name: "Abhay",
      age: "26",
      skills: "c",
    },
    {
      id: 3,
      name: "Akarsh",
      age: "28",
      skills: "java"
    },
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    <div>{personList}</div>
  )
}

export default UserList;