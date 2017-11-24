import React from 'react'
import Todo from './Todo'

export default ({tasks, myEvent}) => {
  return (
    <ul>
      {
        tasks.map((task) => {
          return (
            <Todo task={task} myEvent={(id) => myEvent(id)}/>
          )
        })
      }
    </ul>
  )
}