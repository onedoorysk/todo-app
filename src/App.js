import React, { Component } from 'react'
import MyForm from './components/MyForm'
import FilterButton from './components/FilterButton'
import TodoList from './components/TodoList'
import v4 from 'uuid/v4'

class App extends Component {
  constructor(props) {
    super(props)
    
    const serializeState = localStorage.getItem('myTODO')
    let persistState = null
    if (serializeState !== null) {
      persistState = JSON.parse(serializeState)
    }
    
    this.state = persistState ? persistState : {
      tasks: [],
      selectedBtn: 'all'
    }
  }

  toggleTask (state, id) {
    const tasks = state.tasks.map(task => {
      if (task.id !== id) {
        return {...task}
      }
      return {...task, completed: !task.completed}
    })
    const newState = {...this.state, tasks}
    localStorage.setItem('myTODO', JSON.stringify(newState))
    this.setState(newState)
  }
  
  addTask (description) {
    if (!description) {
      alert('入力してください。')
      return
    }
    const tasks = [...this.state.tasks, {id: v4(), description, completed: false}]
    const newState = {...this.state, tasks}
    
    localStorage.setItem('myTODO', JSON.stringify(newState))
    this.setState(newState)
  }
  
  changeSelectedBtn(state, targetBtn) {
    const selectedBtn = targetBtn
    this.setState({selectedBtn})
  }
  
  filter(state) {
    const tasks = state.tasks.filter((task) => {
      if (state.selectedBtn === 'completed') {
         return (task.completed === true)
      }
      else if (state.selectedBtn === 'not completed') {
        return (task.completed === false)
      }
      return task
    })
    return tasks
  }

  render() {
    const tasks = this.filter(this.state)
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)} />
        <FilterButton myEvent={() => this.changeSelectedBtn(this.state, 'all')} btnName="ALL" />
        <FilterButton myEvent={() => this.changeSelectedBtn(this.state, 'completed')} btnName="COMPLETED" />
        <FilterButton myEvent={() => this.changeSelectedBtn(this.state, 'not completed')} btnName="NOT COMPLETED" />
        <TodoList tasks={tasks} myEvent={(id) => this.toggleTask(this.state, id)} />
      </div>
    );
  }
}

export default App;
