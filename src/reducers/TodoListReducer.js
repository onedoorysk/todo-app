import { TYPE } from '../actions/index.js'
import todoReducer from './TodoReducer'
import v4 from 'uuid/v4'

const initialTodo = [
 {
   id: v4(),
   description: 'My todo 1',
   completed: false
 },
 {
   id: v4(),
   description: 'My todo 2',
   completed: false
 },
 {
   id: v4(),
   description: 'My todo 3',
   completed: false
 }
]

export default (state = initialTodo, action) => {
  switch(action.type) {
    case TYPE.TOGGLE_TODO:
      return state.map((todo) => {
        return todoReducer(todo, action)
      })
    case TYPE.ADD_TODO:
      return [...state, {id: v4(), description: action.payload.description, completed: false}]
    default:
      return state
  }
}