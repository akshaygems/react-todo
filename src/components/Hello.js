import React from 'react';

const Hello = prop => {
  const name = prop.name;
  return React.createElement(
    'div',
    {id: "hello-container", className: "ddd"},
    React.createElement('h1', null, "hello " + name)
  );
}
export default Hello;