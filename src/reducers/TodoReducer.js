import { TYPE } from '../actions/index.js'

export default (state, {type, payload}) => {
  switch (type) {
    case TYPE.TOGGLE_TODO:
      if (state.id !== payload.id) return {...state}
      return {...state, completed: !state.completed }
    default:
      return state
  }
}