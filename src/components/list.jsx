import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import { Link } from 'react-router-dom';


export default function List() {
    const [TaskData, setTaskData] = useState([]);
    const[renderIndex, setRenderIndex] = useState(1);

    const deleteData = async (id) => {
        await axios.delete(`https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/` + id)

        setRenderIndex(renderIndex + 1);
    }

    const setCompleted = async (task) => {
        const {description, date, id} = task;
        const completed = true;

        console.log(`date ${date}`);
        console.log(`desc ${description}`);

        await axios.put('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/' + id, {
            description,
            date,
            completed
        });

        setRenderIndex(renderIndex + 1);
    }

    const editData = (data) => {
        console.log('editData')
        let { description, date, completed, id } = data;
        localStorage.setItem('Description', description);
        localStorage.setItem('Date', date);
        localStorage.setItem('Completed', completed)
        localStorage.setItem('ID', id);
    }
    // const setComplete = (data) => {
    //     let { completed } = data;
    //     localStorage.setItem('Completed', completed);
    // }

    useEffect(() => {
        axios.get(`https://6341338f20f1f9d7996dfc67.mockapi.io/tasks`)
            .then((response) => {
                setTaskData(response.data);
            }).then(() => {
                console.log(`renderIndex: ${renderIndex}`)  
                console.log(`Tasks: ${JSON.stringify(TaskData)}`)
            })
    }, [TaskData, renderIndex]);

    // useEffect(() => {
    //     setCompleted(localStorage.getItem('Completed'))
    // }, []);

    return (
        <ul className='no-bullets'>
            {TaskData.map((data) => {
                return (
                    <li>
                        {data.completed ? (
                            <button><i className='fa fa-check completed'></i></button>
                        ) : (
                            <button onClick={() => setCompleted(data)}> 
                                Completed?
                            </button>
                        )}
                        <Link to='/update'>
                            <button
                                onClick={() => editData(data)}>
                                <i className="editTask fa fa-pencil"></i>
                            </button>
                        </Link>
                        <span> {data.description} </span>
                        <span> {data.date} </span>
                        <button onClick={() => deleteData(data.id)}>
                            <i className="deleteTask fa fa-trash"></i>
                        </button>
                    </li>
                )
            })}

        </ul>

    )
}