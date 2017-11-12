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
      tasks: []
    }
  }
  
  toggleTask (state, id) {
    // const {tasks} = state
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
    // const {tasks} = this.state
    // ユニークなプロパティを持つオブジェクトの場合は後ろに追加される
    const tasks = [...this.state.tasks, {id: v4(), description, completed: false}]
    const newState = {...this.state, tasks}
    
    localStorage.setItem('myTODO', JSON.stringify(newState))
    this.setState(newState)
  }
  
  render() {
    const {tasks} = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)}/>
        <ul>
          {tasks.map(({id, completed, description}) => (
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
