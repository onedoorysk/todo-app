import React from 'react'

export default ({key, attr, $parent}) => {
  const {id, description, completed} = attr
  return (
    <li
      key={key}
      style={
        { textDecoration: completed ? 'line-through' : 'none' }
      }
      onClick={() => $parent(id)}
    >{description}
    </li>
  )
}