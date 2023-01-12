import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/type";

const initialState = {
    todos: []
};

export default function (state = initialState, actions){
    switch (actions.type){
        case GET_TODO_LIST:
            return {
                ...state,
                todos: actions.payload
            };
        default:
            return state;
    }
};