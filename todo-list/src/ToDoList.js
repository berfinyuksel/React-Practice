import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList({todos, onToggle}) {

  return (
    <div>
        <ul>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    </div>
  )
}

export default ToDoList