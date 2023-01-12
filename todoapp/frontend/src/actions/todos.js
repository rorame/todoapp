import axios from 'axios';
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/type";

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// get todo list

export const getTodos = () => dispatch => {
    axios.get('api/todo/')
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};