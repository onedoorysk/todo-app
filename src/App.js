import React, { Component } from 'react'
import MyForm from './components/MyForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        description: 'My Task',
        completed: false
      }
    }
  }
  render() {
    const {task} = this.state
    return (
      <div>
      <MyForm />
      
      <ul>
        <li style={{
          textDecoration: task.completed ? 'line-through' : 'none'}} onClick={() => {
        this.setState({
          task: {
            completed: !this.state.task.comleted,
            description: this.state.task.description
          }
        })
      }}>{task.description}</li>
      </ul>
      </div>
    );
  }
}

export default App;
