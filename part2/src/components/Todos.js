import React, { useState } from 'react';
import styled from 'styled-components'

const initTodos = [
  { id: 1, title: 'Todoアプリを作る', done: true },
  { id: 2, title: 'styled-componentを使ってみる', done: false },
  { id: 3, title: 'Reduxを使ってみる', done: false }
];

const StyledTodo = styled.p`
  &[data-done=true]{
    color: #7a6f6f;
    text-decoration: line-through;
  }
`

function Todos() {
  const [todos, setTodos] = useState(initTodos);

  const [nextTodo, setNextTodo] = useState("");

  const toggleDone = e => {
    const updatedTodos = todos.map(todo => {
      console.log(e.target.id)
      if (todo.id === Number(e.target.id)) todo.done = !todo.done;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const changeTodo = e => {
    setNextTodo(e.target.value);
  };

  const addTodo = () => {
    const addTodo = {
      id: todos.length + 1,
      title: nextTodo,
      done: false
    };

    setTodos([...todos, addTodo]);
    setNextTodo("");
  };

  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <p>
        <input type='text' value={nextTodo} onChange={changeTodo}/>
        <button onClick={addTodo}>Add</button>
      </p>
      {todos.map( todo =>
        <StyledTodo
          key={todo.id}
          id={todo.id}
          data-done={todo.done}
          onClick={toggleDone}
        >
          {todo.title}
        </StyledTodo>
      )}
    </div>
  );
}

export default Todos;
