import React, { Component } from 'react'
import MyForm from './components/MyForm'
import FilterButton from './components/FilterButton'
import TodoList from './components/TodoList'
import store from './store'

class App extends Component {

  render() {
    const tasks = store.getState().todo
    const selectedBtn = store.getState().btn
    return (
      <div>
        <MyForm />
        <FilterButton btnName='all' >ALL</FilterButton>
        <FilterButton btnName='completed' >COMPLETED</FilterButton>
        <FilterButton btnName='not completed' >NOT COMPLETED</FilterButton>
        <TodoList tasks={tasks} selectedBtn={selectedBtn} />
      </div>
    );
  }
}

export default App;
