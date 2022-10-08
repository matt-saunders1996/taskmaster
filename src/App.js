
import './App.css';
import { Component } from 'react';
import { identifier } from '@babel/types';
import Create from './components/create';
// import List from './components/list';
// import ListClassComp from './components/listClassComp';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://mighty-anchorage-09379.herokuapp.com/mongodb://localhost:27017/taskmaster')
    fetch('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks')
      .then((response) => response.json())
      .then((tasks) => this.setState(() => {
        return { tasks }
      },
        () => {
          console.log(this.state);
        }
      ))
  }

  render() {
    return (
      // <Router>
        <div className="App">
          <header className="App-header">
            <h1>Taskmaster</h1>
            <Create />
            {/* <ListClassComp/> */}
            <ul className='no-bullets'>
              {this.state.tasks.map((task) => {
                return <li key={task.id}>
                  <button onClick={() => {
                    this.setState(
                      () => {
                        return {
                          completed: true
                        }
                      },
                      () => {
                        console.log('Completed Task')
                      }
                    );
                  }}>
                    <i className="completeTask fa fa-check"></i>
                  </button>
                  <button onClick={() => { console.log('Edited Task') }}>
                    <i className="editTask fa fa-pencil"></i>
                  </button>
                  <span> {task.description} </span>
                  <span> {task.date} </span>
                  <button>
                    <i className="deleteTask fa fa-trash"></i>
                  </button>
                </li>
              })
              }
            </ul>
          </header>
        </div >
      // </Router>
    );
  }
}

export default App;