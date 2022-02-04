import _ from 'lodash';
import jsonplaceholder from "../apis/jsonplaceholder";

const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get('/posts');
    const action = {
      type: 'FETCH_POSTS',
      payload: response.data,
    };
    dispatch(action);
  }
};

const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    const action = {
      type: 'FETCH_USER',
      payload: response.data,
    };
    dispatch(action);
  };
};

const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const state = getState();
    const { posts: { posts } } = state;
    const ids = _.uniq(_.map(posts, 'userId'));
    ids.forEach((id) => dispatch(fetchUser(id)));
  }
}



export { fetchPosts, fetchUser, fetchPostsAndUsers };