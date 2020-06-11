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

    return (
        <div className="main-app">
            <h2>Welcome to your Todo App!</h2>
            <TodoList todoList={todoList} dispatch={dispatch}/>
            <TodoForm dispatch={dispatch} />
        </div>
    )
};

export default App;
