import React from 'react'

function ToDoItem({todo, onToggle}) {

const {id, title, completed} = todo;     

  return (
    <div>
        <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
            <label>
                <input type='checkbox' checked= {completed} onChange={()=>onToggle(id)}>
                </input>
                {title}
            </label>
        </li>
    </div>
  )
}

export default ToDoItem