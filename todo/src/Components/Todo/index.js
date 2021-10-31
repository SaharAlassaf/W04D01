import React, { Component } from 'react'
import TodoItem from '../TodoItem';
import "./style.css";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, name:"Work"},
                {id: 2, name:"Sleep"}
            ]
        }
    }

    handleDelete = (id) => {
        this.setState( {todos: this.state.todos.filter(todo => todo.id != id)})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(e.target.task.value){
            const todo = {
                id: this.state.todos.length + 1,
                name: e.target.task.value
            }
            this.setState( {todos:[... this.state.todos, todo]})
        }
        e.target.task.value = "";
    }

    render() {
        return (
            <div className="todo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task" />
                    <button>Add</button>
                </form>
                <ul className="ul">
                    {this.state.todos.map((todo, i) =>
                        <TodoItem todo={todo} key={i} handleDelete={this.handleDelete}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default Todo