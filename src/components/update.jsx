import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update({reRender}) {
    const [id, setID] = useState(null);
    const [description, setDesc] = useState('');
    const [date, setDate] = useState('');
    const dbUpdate = async () => {
       await axios.put('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks/' + id, {
            description,
            date
        });
        reRender()
    }

    console.log('here');

    useEffect(() => {
        setDesc(localStorage.getItem('Description'));
        setDate(localStorage.getItem('Date'));
        setID(localStorage.getItem('ID'))
        console.log('desc local storage', localStorage.getItem('Description'));
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
            <Link to='/'>
                <button onClick={dbUpdate}>
                    <i
                        className="fa fa-plus">
                    </i>
                </button>
            </Link>
        </div>
    )
}




