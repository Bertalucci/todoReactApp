import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();//предотвращает перезагрузку страницы сразу после сабмита формы
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            //d-flex - выстраивает элементы друг за другом
            <form   className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input  type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="Enter a task"
                        value={this.state.label}
                />
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        );
    }
}