import React from 'react';

const Todolist = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
