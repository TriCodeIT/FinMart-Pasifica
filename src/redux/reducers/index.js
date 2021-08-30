import { combineReducers } from "redux";
import articles from "./articles";
import auth from "./auth";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({ todos, visibilityFilter, articles, auth });