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

const StyledInput = styled.input`
  border-radius: 3px;
  :focus {
    border: solid 1px #EEA34A;
  }

`
const StyledButton = styled.button`
  border-radius: 3px;
  position: relative;
  display: inline-block;
  color: #FFF;
  background: #03A9F4;
  border: solid 1px #0f9ada;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
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
    if(nextTodo != ""){
      const addTodo = {
        id: todos.length + 1,
        title: nextTodo,
        done: false
      };

      setTodos([...todos, addTodo]);
      setNextTodo("");
    }
  };

  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <p>
        <StyledInput type='text' value={nextTodo} onChange={changeTodo}/>
        <StyledButton onClick={addTodo}>Add</StyledButton>
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
