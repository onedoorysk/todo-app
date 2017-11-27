import React, { Component } from 'react'
import MyForm from './components/MyForm'
import FilterButton from './components/FilterButton'
import TodoList from './components/TodoList'
import {addTodoAction, toggleTodoAction, selectedBtnAction} from './actions/index'
import store from './store'

class App extends Component {

  render() {
    const tasks = store.getState().todo
    const selectedBtn = store.getState().btn
    return (
      <div>
        <MyForm myEvent={desc => store.dispatch(addTodoAction(desc))} />
        <FilterButton onClick={() => store.dispatch(selectedBtnAction('all'))}>ALL</FilterButton>
        <FilterButton onClick={() => store.dispatch(selectedBtnAction('completed'))}>COMPLETED</FilterButton>
        <FilterButton onClick={() => store.dispatch(selectedBtnAction('not completed'))}>NOT COMPLETED</FilterButton>
        <TodoList tasks={tasks} selectedBtn={selectedBtn} $parent={(id) => store.dispatch(toggleTodoAction(id))} />
      </div>
    );
  }
}

export default App;
