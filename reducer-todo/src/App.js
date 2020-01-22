/*
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
 */

import React, {useReducer} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


import {reducer, initialState} from "./reducers/reducer";

const App = () => {

    const [todoList, dispatch] = useReducer(reducer, initialState);

    // const [todoList, setTodoList] = useState(todos);

    // const toggleComplete = (id) => {
    //     setTodoList(todoList.map((elem) => {
    //             if (elem.id === id) {
    //                 return {
    //                     ...elem,
    //                     completed: !elem.completed
    //                 } //return
    //             } else {
    //                 return elem;
    //             } //...else
    //         }) //map
    //     ) //setState
    // };

    // this component is going to take care of state, and any change handlers you need to work with your state
    // const addTodo = (itemName) => {
    //     const newTodo = {
    //         item: itemName,
    //         completed: false,
    //         id: Date.now()
    //     };
    //     setTodoList([...todoList, newTodo]);
    // };

    // const clearCompleted = () => {
    //     setTodoList(todoList.filter((elem) => !elem.completed));
    // };

    return (
        <div className="main-app">
            <h2>Welcome to your Todo App!</h2>
            <TodoList todos={todoList} dispatch={dispatch}/>
            <TodoForm dispatch={dispatch} />
        </div>
    )
};

export default App;
