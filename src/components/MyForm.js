import React from 'react'

export default ({myEvent}) => {
  let input = null
  return  (
    <div>
      <input ref={node => input = node} type="text" />
      <button onClick={() => {
          myEvent(input.value)
          input.value = ''
        }
      }>ADD</button>
    </div>
  )
}