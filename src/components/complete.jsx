import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import { Link } from 'react-router-dom';

export default function Completer() {
    const setComplete = (data) => {
        let { completed } = data;
        localStorage.setItem('Completed', completed);
    }

    useEffect(() => {
        setComplete(localStorage.getItem('Completed'))
    }, []);

    return (
        <button onClick={() => setComplete(data)}>
            <i className="completeTask fa fa-check"></i>
        </button>)
}
