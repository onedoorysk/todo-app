import {createStore, combineReducers} from 'redux'
import todoListReducer from './reducers/TodoListReducer'
import selectedBtnReducer from './reducers/SelectedBtnReducer'

const rootReducer = combineReducers({todo: todoListReducer, btn: selectedBtnReducer})
export default createStore(rootReducer)