import React from 'react'
import store from '../store'
import {selectedBtnAction} from '../actions/index'

export default ({children, btnName}) => (
  <button onClick={() => store.dispatch(selectedBtnAction(btnName))}>{children}</button>
)