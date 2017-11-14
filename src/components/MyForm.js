import React from 'react'

export default ({myEvent}) => {
  let input = null
  // refは初期表示時にDOMの参照を渡す
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