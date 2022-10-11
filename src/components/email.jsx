import React, { useState } from 'react';
import axios from 'axios';

export default function Email() {
    const [email, setEmail] = useState('');
    const dbPost = () => {
        console.log(email);
        axios.post('https://6341338f20f1f9d7996dfc67.mockapi.io/email', {
            email
        })
    }

    return (
        <div>
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


