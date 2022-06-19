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
        ],
        term: '',
        filter: 'all' //all, active or done
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        //копируем в newItem все свойства из oldItem, кроме done, кот. перезапишем
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    //функция, регистрирующая important элемента
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    //функция, регистрирующая done элемента
    onToggleDone = (id) => {
        this.setState(({todoData}) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    //поиск по айтемам
    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    //фильтр all, done or active
    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        };
    }

    onSearchChange = (term) => {
        this.setState({term});
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm onItemAdded = {this.addItem}/>

            </div>
        );
    }
}
