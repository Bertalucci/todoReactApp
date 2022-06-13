import React from 'react';

import TodoListItem from './todo-list-item'


const TodoList = ( {todos} ) => {

    const elements = todos.map( (item) => {
        /*id - достаем id из пропс объекта, ...itemProps - все свойства объекта, кроме id*/
        const {id, ...itemProps} = item;

        return (
            /*Каждому JSX элементу в массиве нужно уникальное свойство key, чтобы Реакт мог
            эффективно сравнивать элементы при обновлении*/
            <li key={id}>
                <TodoListItem {...itemProps}/>
            </li>
        );
    });


    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;