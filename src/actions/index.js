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
  }
};



export { fetchPosts, fetchUser };