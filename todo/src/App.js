import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/todos.js';
import {initialState, todoReducer} from './reducers/reducer.js';
import AddTodo from './components/addTodoForm.js';

function App() {
  const [modal, setModal] = useState(false);
  const [newTodo, setNewTodo] = useState("")
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  return (
    <div className="App">
    <h1 id="title">Your Todos</h1>
    <Todos todos={state} />
    <AddTodo modal={modal} setModal={setModal} state={state} dispatch={dispatch} newTodo={newTodo} setNewTodo={setNewTodo}/>
    </div>
  );
}

export default App;
