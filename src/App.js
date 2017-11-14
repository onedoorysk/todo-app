import React, { Component } from 'react'
import MyForm from './components/MyForm'
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
      displayTasks: [],
      displayAll: true
    }
  }

  toggleTask (state, id) {
    const tasks = state.tasks.map(task => {
      if (task.id !== id) {
        return {...task}
      }
      return {...task, completed: !task.completed}
    })
    const newState =  {...state, tasks}
    localStorage.setItem('myTODO', JSON.stringify(newState))
    return newState
  }
  
  addTask (description) {
  
    if(!description) {
      alert('入力してください。')
      return
    }
    const tasks = [...this.state.tasks, {id: v4(), description, completed: false}]
    const newState = {...this.state, tasks}
    
    localStorage.setItem('myTODO', JSON.stringify(newState))
    this.setState(newState)
  }
  
  filterTaskAll () {
    const newState = {...this.state, displayAll: true}
    this.setState(newState)
  }
  
  filterTask (completedFlag) {
    const displayTasks = this.state.tasks.filter(task => {
      if (task.completed === completedFlag) {
        return {...task}
      }
    })
    const newState = {...this.state, displayTasks, displayAll: false}
    this.setState(newState)
  }
  
  render() {
    const {tasks, displayTasks, displayAll} = this.state
    const targetTasks = displayAll ? tasks : displayTasks
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)}/>
        <button onClick={() => this.filterTaskAll()}>ALL</button>
        <button onClick={() => this.filterTask(true)}>COMPLETED</button>
        <button onClick={() => this.filterTask(false)}>NOT COMPLETED</button>
        <ul>
          {targetTasks.map(({id, completed, description}) => (
            <li 
              key={id} 
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }} 
              onClick={() => this.setState(this.toggleTask(this.state, id))}
            >
              {description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
