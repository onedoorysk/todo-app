import React from 'react'

export default (props) => (
  <div>
    <input type="text" />
    <button onClick={props.onClick}>ADD</button>
  </div>
)

// listで並べるようにしたい
// listで


// const newArr = [...arr, 5]
// pushを使うと壊れる
// 浅いコピーはしない　