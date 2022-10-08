import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [description, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [completed, setCompleted] = useState(false);
    const dbPost = () => {
        console.log(description);
        console.log(date);
        console.log(completed);
        axios.post('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks', {
            description,
            date,
            completed
        })
    }

    return (
        <div>
            <input onChange={(e) => setDesc(e.target.value)}
                type="text"
                className="descTask"
                placeholder="What is your task?"
            />
            <input onChange={(e) => setDate(e.target.value)}
                type="date"
                className="newDate"
                value="2022-10-06"
                min="2022-10-06"
                max="2100-10-06"
            />
            <button onClick={dbPost}> {/* need this to POST */}
                <i
                    className="fa fa-plus"></i>
            </button>
        </div>
    )
}


