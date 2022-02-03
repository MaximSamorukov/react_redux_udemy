import jsonplaceholder from "../apis/jsonplaceholder";

const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get('/posts');
    const action = {
      type: 'FETCH_POSTS',
      payload: response,
    };
    dispatch(action);
  }
};

export { fetchPosts };