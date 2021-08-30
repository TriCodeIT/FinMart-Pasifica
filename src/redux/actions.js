import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  ADD_ARTICLE,
  SET_AUTH,
  UNSET_AUTH
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER, payload: { filter }
});

export const addArticle = title => ({
  type: ADD_ARTICLE,
  payload: {
    id: new Date().getTime().toString(),
    title
  }
});

export const setAuth = payload => ({
  type: SET_AUTH,
  payload
});

export const unsetAuth = () => ({
  type: UNSET_AUTH,
  payload: {
    authenticated: false,
    token: ''
  }
});