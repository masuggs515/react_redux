const INITIAL_STATE = {
    todos: [
        {id: 1, todo: 'Feed Cats'},
        {id: 2, todo: 'Feed Child'},
        {id: 3, todo: 'Change Litter'},
    ]
};

const rootReducer = (state= INITIAL_STATE, action) => {
    if(action.type === 'ADD_TODO'){
        return {
            ...state,
            todos: [...state.todos, {...action.todo}]
        };
    }
    if(action.type === "DELETE_TODO"){
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
    }

    return state;
};

export default rootReducer;