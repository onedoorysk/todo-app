import React from 'react'
import Todo from './Todo'

export default ({tasks, selectedBtn}) => (
  <ul>
    {tasks.filter(({completed}) => {
        switch(selectedBtn) {
          case 'completed':
            return completed
          case 'not completed':
            return !completed
          default:
            return true
        }
      })
      .map((attr) => (
        <Todo key={attr.id} attr={attr} />
        )
      )
    }
  </ul>
)