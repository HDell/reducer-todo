/*
<Todo /> is a component that takes in the todo data and displays the item to the screen.
 */

import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div
                className={`todo${this.props.todo.completed? ' completed' : ''}`} //className = todo completed || todo
                onClick={() => this.props.dispatch({ type: "TOGGLE_COMPLETE", payload: this.props.todo.id })} //this.props.toggleComplete(this.props.todo.id)
            >
                <p>{this.props.todo.item}</p>
            </div>
        );
    }
};

export default Todo;