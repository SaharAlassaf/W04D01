import React, { Component } from 'react'
import edit from './write.png';
import "./style.css";

class TodoItem extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <li className="items">
                    <h4 className="item">{this.props.todo.name}</h4>
                    <img src={edit} onClick={() => this.props.handleEdit(this.props.todo.id)}></img>
                    <h4 className="x item" onClick={() => this.props.handleDelete(this.props.todo.id)}>X</h4>
                </li>
            </div>
        )
    }
}

export default TodoItem