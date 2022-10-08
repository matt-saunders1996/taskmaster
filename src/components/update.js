import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './create';

export default function Update() {
    const [id, setID] = useState(null);
    const [description, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [completed, setCompleted] = useState();
    const dbUpdate = () => {
        axios.put('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/${id}', {
            description,
            date
        })
    }

    useEffect(() => {
        setDesc(localStorage.getItem('Description'));
        setDate(localStorage.getItem('Date'));
        setCompleted(localStorage.getItem('Completed'))
        setID(localStorage.getItem('ID'))
    }, []);

    return (
        <div>
            <h1>UPDATE SECTION</h1>
            <input onChange={(e) => setDesc(e.target.value)}
                type="text"
                className="descTask"
                placeholder="What is your task?"
                value={description}
            />
            <input onChange={(e) => setDate(e.target.value)}
                type="date"
                className="newDate"
                value={date}
                min="2022-10-06"
                max="2100-10-06"
            />
            <button onClick={dbUpdate}>
                <i
                    className="fa fa-plus">
                </i>
            </button>
        </div>
    )
}




