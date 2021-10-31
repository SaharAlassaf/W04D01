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
            ],
            color: "red"
        }
    }

    handleDelete = (id) => {
        this.setState( {todos: this.state.todos.filter(todo => todo.id !== id)} );
    }

    handleEdit = (id) => {
        const newName = prompt("Change the task");
        const newarr = this.state.todos.map(todo => {
            if(id == todo.id){
                return {... todo, name: newName}
            } else{
                return todo;
            }
        });
        this.setState({todos: newarr});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(e.target.task.value){
            const todo = {
                id: this.state.todos.length + 1,
                name: e.target.task.value
            }
            this.setState( {todos:[... this.state.todos, todo]} );
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
                        <TodoItem todo={todo} key={i} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default Todo