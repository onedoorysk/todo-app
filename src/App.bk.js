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
    const {tasks} = state
    const newTasks = tasks.map(task => {
      if (task.id !== id) {
        return {...task}
      }
      return {...task, completed: !task.completed}
    })
    const newState =  {...state, tasks: newTasks}
    localStorage.setItem('myTODO', JSON.stringify(newState))
    return newState
    
  }
  
  addTask (description = 'New Task!') {
  
    if(!description) {
      alert('入力してください。')
      return
    }
    const {tasks} = this.state
    // ユニークなプロパティを持つオブジェクトの場合は後ろに追加される
    const newTasks = [...tasks, {id: v4(), description: description, completed: false}]
    const newState = {...this.state, tasks: newTasks}
    
    localStorage.setItem('myTODO', JSON.stringify(newState))
    this.setState(newState)
  }
  
  
  render() {
    const {tasks} = this.state
    return (
      <div>
        <MyForm myEvent={(desc) => this.addTask(desc)}/>
        <ul>
          {tasks.map((task) => {
            
            // 丸括弧にすることでreactの世界になる
            return (
              <li key={task.id} style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }} 
              onClick={() => {
                this.setState(this.toggleTask(this.state, task.id))}
              }>
                {task.description}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
