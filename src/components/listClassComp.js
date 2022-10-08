import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Component } from 'react';


class ListClassComp extends Component {
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
        )
    }
}
export default ListClassComp;