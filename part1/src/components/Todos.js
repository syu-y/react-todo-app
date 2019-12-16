import React, { useState } from 'react';

const initTodos = [
  { id: 1, title: 'Todoアプリを作る', done: true },
  { id: 2, title: 'styled-componentを使ってみる', done: false },
  { id: 3, title: 'Reduxを使ってみる', done: false }
];

const styles = {
  done: {
    color: '#bbb',
    textDecoration: 'line-through'
  }
};

function Todos() {
  const [todos, setTodos] = useState(initTodos);

  const [nextTodo, setNextTodo] = useState("");

  const toggleDone = e => {
    const updatedTodos = todos.map(todo => {
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
      {todos.map(todo => (
        <p
          key={todo.id}
          style={todo.done ? styles.done : null}
          id={todo.id}
          onClick={toggleDone}
        >
        {todo.title}
      </p>)
      )}
    </div>
  );
}

export default Todos;
