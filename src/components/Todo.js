import React from 'react'

export default ({task, myEvent}) => {
  const {id, description, completed} = task
  return (
    <li
      key={id}
      style={
        { textDecoration: completed ? 'line-through' : 'none' }
      }
      onClick={() => myEvent(id)}
    >{description}
    </li>
  )
}