import React from 'react';

const Todos = (props) => {
  const {todos, todoClicked, setTodoClicked, dispatch} = props;

  const toggle = (todo, event) => {
    dispatch({type: "CHECKED" , id: todo.id, completed: todoClicked, target: event.target})
    if(todo.completed){
      event.target.classList.add("checked");
    }
    else{
      event.target.classList.remove("checked");
    }
  }

  return (
    <div className="todosList">
    {todos.map((todo)=>{
      return (<div key={todo.item} onClick={(event)=>{toggle(todo,event)}}className="todo"><h3>{todo.item}</h3></div>)
    })}
    </div>
  )
}
export default Todos
