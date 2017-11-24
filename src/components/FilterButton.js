import React from 'react'

export default ({myEvent, btnName}) => {
  return (
    <button onClick={() => myEvent()}>{btnName}</button>
  )
}