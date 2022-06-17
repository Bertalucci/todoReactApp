import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ( {todos, onDeleted} ) => {

    const elements = todos.map( (item) => {
        /*id - достаем id из пропс объекта, ...itemProps - все свойства объекта, кроме id*/
        const {id, ...itemProps} = item;

        return (
            /*Каждому JSX элементу в массиве нужно уникальное свойство key, чтобы Реакт мог
            эффективно сравнивать элементы при обновлении*/
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}/>
            </li>
        );
    });


    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;