import React, { useState } from 'react';
import axios from 'axios';

export default function Create({ reRender }) {
    const [description, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const dbPost = async () => {
        console.log(description);
        console.log(date);
        const completed = false;
        await axios.post('https://6341338f20f1f9d7996dfc67.mockapi.io/tasks', {
            description,
            date,
            completed,
            email
        });
        reRender()

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
            <input onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="What is your email?"
            />
            <button onClick={dbPost}> {/* need this to POST */}
                <i
                    className="fa fa-plus"></i>
            </button>
        </div>
    )
}


