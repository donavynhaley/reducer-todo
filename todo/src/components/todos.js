import React from 'react';

const Todos = (props) => {
  const {todos} = props;

  return (
    <div className="todosList">
    {todos.map((todo)=>{
      return (<div key={todo.item} className="todo"><h3>{todo.item}</h3></div>)
    })}
    </div>
  )
}
export default Todos
