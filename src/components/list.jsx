import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'





export default function List() {
    const [TaskData, setTaskData] = useState([]);
    const editData = (data) => {
        let { description, date, completed, id } = data;
        localStorage.setItem('Description', description);
        localStorage.setItem('Date', date);
        localStorage.setItem('Completed', completed)
        localStorage.setItem('ID', id);
    }
    useEffect(() => {
        axios.get(`https://6341338f20f1f9d7996dfc67.mockapi.io/tasks`)
            .then((response) => {
                setTaskData(response.data);
            })
    }, [])
    return (
        <ul className='no-bullets'>
            {TaskData.map((data) => {
                return (
                    <li>
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
                        <Link to='/update'>
                            <Button
                                onClick={() => editData(data)}>
                                <i className="editTask fa fa-pencil"></i>
                            </Button>
                        </Link>
                        <span> {data.description} </span>
                        <span> {data.date} </span>
                        <button>
                            <i className="deleteTask fa fa-trash"></i>
                        </button>
                    </li>
                )
            })}

        </ul>

    )
}