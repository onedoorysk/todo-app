import React from 'react'
import store from '../store'
import {toggleTodoAction} from '../actions/index'

export default ({key, attr}) => {
  const {id, description, completed} = attr
  return (
    <li
      key={key}
      style={
        { textDecoration: completed ? 'line-through' : 'none' }
      }
      onClick={() => store.dispatch(toggleTodoAction(id))}
    >{description}
    </li>
  )
}