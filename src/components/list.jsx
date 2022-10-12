import React, { useEffect, useState } from 'react';
import './list.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function List({ taskList, reRender }) {
    const deleteData = async (id) => {
        await axios.delete(`https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/` + id)
        reRender()

    }

    const setCompleted = async (task) => {
        const { description, date, id } = task;
        const completed = true;

        console.log(`date ${date}`);
        console.log(`desc ${description}`);

        await axios.put('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/' + id, {
            description,
            date,
            completed
        })
        reRender();
    }

    const editData = (data) => {
        console.log('editData')
        let { description, date, completed, id } = data;
        localStorage.setItem('Description', description);
        localStorage.setItem('Date', date);
        localStorage.setItem('Completed', completed)
        localStorage.setItem('ID', id);
    }

    return (
        <ul className='no-bullets'>
            {taskList.map((task) => {
                return (
                    <li>
                        {task.completed ? (
                            <button
                                className="btn btn-primary">
                                <i className='fa fa-check completed'></i>
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={() => setCompleted(task)}>
                                Completed?
                            </button>
                        )}
                        <Link to='/update'>
                            <button
                                className="btn btn-primary"
                                onClick={() => editData(task)}>
                                <i className="editTask fa fa-pencil"></i>
                            </button>
                        </Link>
                        <span> {task.description} </span>
                        <span> {task.date} </span>
                        
                        <button className="btn btn-primary"
                            onClick={() => deleteData(task.id)}>
                            <i className="deleteTask fa fa-trash"></i>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}