import { combineReducers } from "redux";

const posts = (store = [], action) => {
  return {
    ...store,
    posts: action.payload?.data || [],
  };
};

export default combineReducers({ posts });