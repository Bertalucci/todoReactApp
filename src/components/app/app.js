import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ItemAddForm from "../item-add-form/item-add-form";
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Make App'),
            this.createTodoItem('Not to drink coffee'),
            this.createTodoItem('Tomar mate')
        ]
    };

    //функция создания нового айтема
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    //функция удаления элемента
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        })
    };

    //функция добавления элемента
    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData, newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    //функция, регистрирующая important элемента
    onToggleImportant = (id) => {
        console.log('Tog impor', id);
    };

    //функция, регистрирующая done элемента
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            //копируем в newItem все свойства из oldItem, кроме done, кот. перезапишем
            const newItem = {...oldItem, done: !oldItem.done};
            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            };
        });
    };


    render() {
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded = {this.addItem}/>

            </div>
        );
    }
}
