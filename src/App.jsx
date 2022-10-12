import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// components
import List from './components/list';
import Create from './components/create';
import Update from './components/update';
import Email from './components/email';



const App = () => {

  const [taskList, setTaskList] = useState([]);
  const [renderIndex, setRenderIndex] = useState(1);

  useEffect(() => {
    axios.get(`https://6341338f20f1f9d7996dfc67.mockapi.io/tasks`)
      .then((response) => {
        setTaskList(response.data);
      })
  }, [renderIndex]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Taskmaster</h1>
          <Create reRender={() => { setRenderIndex(renderIndex + 1) }} />
          <List taskList={taskList} reRender={() => { setRenderIndex(renderIndex + 1) }} />
          <Routes>
            <Route path='/update' element={<Update reRender={() => { setRenderIndex(renderIndex + 1) }} />} />
          </Routes>
        </header>
      </div >
    </Router>
  );

}

export default App;