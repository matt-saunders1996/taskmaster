import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component } from 'react';
import { identifier } from '@babel/types';
import axios from 'axios';
// components
import List from './components/list';
import Create from './components/create';
import Update from './components/update';


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
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Taskmaster</h1>
            <Create />
            <List/>
            <Routes>
            <Route path='/update' element={<Update/>} />
            </Routes>
  
          </header>
        </div >
      </Router>
    );
  }
}

export default App;