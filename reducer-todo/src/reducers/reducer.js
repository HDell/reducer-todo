export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};

export const reducer = (newState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...newState,
                todos: [
                    ...newState.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case "CLEAR_COMPLETED":
            return newState.todos.filter((elem) => !elem.completed);
        case "TOGGLE_COMPLETE":
            return newState.todos.map((elem) => {
                if (elem.id === action.payload) {
                    return {
                        ...elem,
                        completed: !elem.completed
                    }
                } else {
                    return elem;
                }
            });
        default:
            return newState;
    }
};
