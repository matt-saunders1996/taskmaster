// this also makes my page go white
// import ListPage from './pages/List.page'
import './App.css';
import { Component } from 'react';
import { identifier } from '@babel/types';

class App extends Component {
  constructor() {
    super();

    //States----------------------------------------------------------------------------------------------------------------------------------------------- 1
    this.state = {
      tasks: [
        {
          description: "Get some pumps",
          date: "2022-10-10",
          completed: false,
          id: '1'
        },
        {
          description: "Need some Hose",
          date: "2022-10-10",
          completed: false,
          id: '2'

        },
        {
          description: "Buy four candles",
          date: "2022-08-12",
          completed: false,
          id: '3'

        }
      ],
    };
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
            value="newDate"
            // onChange={(e) => { handleDescChange(e) }}
            min="2022-10-06"
            max="2100-10-06" />
          <button>
            <i class="fa fa-plus"></i>
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
                  <i class="completeTask fa fa-check"></i>
                </button>
                <button onClick={() => { console.log('Edited Task') }}>
                  <i class="editTask fa fa-pencil"></i>
                </button>
                <span>{task.description}</span>
                <span>{task.date}</span>
                <button onClick={() => { console.log('Deleted Task') }}>
                  <i class="deleteTask fa fa-trash"></i>
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
