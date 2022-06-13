import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";


const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};


//рендерим элемент App (совокупность всех элементов приложения) в div root в index.html
ReactDOM.render(<App/>, document.getElementById('root'));

