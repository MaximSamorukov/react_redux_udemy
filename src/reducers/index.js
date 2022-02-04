import { combineReducers } from "redux";
import { posts } from "./posts_reducer";
import { usersReducer } from "./users_reducer";


export default combineReducers({
  posts,
  users: usersReducer
});