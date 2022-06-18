import React from 'react';
import './app-header.css'

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>TASKS</h1>
            <h2>to do: {toDo}, done: {done}</h2>
        </div>
    );
};

export default AppHeader;