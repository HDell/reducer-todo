/*
<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
 */

import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

    render() {
        console.log(this.props.todoList);
        return (
            <div className="todo-list">
            {this.props.todoList.todos.map((elem) => (
                <Todo key={elem.id} todo={elem} dispatch={this.props.dispatch} />
            ))}
            </div>
        );
    }
};

export default TodoList;