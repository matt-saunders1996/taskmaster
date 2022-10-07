
// import ListPage from './pages/List.page'
import './App.css';
import { Component } from 'react';
import { identifier } from '@babel/types';
// const express = require('express');
// const expressApp = express();
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/taskmaster", function (err, db) {
//      if(err) throw err;   
// });
// expressApp.listen(3000, () => {
//   console.log('Connected to PORT 3000...');
// })

class App extends Component {
  constructor() {
    super();

    //States----------------------------------------------------------------------------------------------------------------------------------------------- 1
    this.state = {
      tasks: [],
    };
  }

  // first time react renders a component - this is mounting. unmounted is complete removal from DOM
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://mighty-anchorage-09379.herokuapp.com/mongodb://localhost:27017/taskmaster')
    fetch('https://mighty-anchorage-09379.herokuapp.com/https://my-json-server.typicode.com/matt-saunders1996/fakedb/tasks')
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
      <div className="App">
        <header className="App-header">
          <h1>Taskmaster</h1>
          {/* New task---------------------------------------------------------------------------------------------------------------------------------  2   */}
          <input
            type="text"
            className="newTask"
            placeholder="Add new Task"
          // value={newDesc} 
          // onChange={(e) => { handleDescChange(e) }} 
          />
          <input
            type="date"
            className="newDate"
            value="2022-10-06"
            // onChange={(e) => { handleDescChange(e) }}
            min="2022-10-06"
            max="2100-10-06" />
          <button>
            <i className="fa fa-plus"></i>
          </button>
          {/* Task List ------------------------------------------------------------------------------------------------------------------------------------  3     */}
          <ul>
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
                <span>{task.description}</span>
                <span>{task.date}</span>
                <button onClick={() => { console.log('Deleted Task') }}>
                  <i className="deleteTask fa fa-trash"></i>
                </button>
              </li>
            })
            }
            {/* Task List end -------------------------------------------------------------------------------------------------------------------------------- 4     */}
          </ul>

        </header>
      </div >
    );
  }
}
export default App;