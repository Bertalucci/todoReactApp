import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";


const App = () => {
    return (
        <div>
            <span>{ (new Date).toString() }</span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};





//рендерим элемент App (совокупность всех элементов приложения) в div root в index.html
ReactDOM.render(<App/>, document.getElementById('root'));

