import React from 'react'
import store from '../store'
import {addTodoAction} from '../actions/index'

export default ({}) => {
  let input = null
  return  (
    <div>
      <input ref={node => input = node} type="text" />
      <button onClick={() => {
          store.dispatch(addTodoAction(input.value))
          input.value = ''
        }
      }>ADD</button>
    </div>
  )
}