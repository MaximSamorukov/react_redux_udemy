const posts = (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return {
      ...state,
      posts: action.payload || [],
    };
  };
  return state;
};

export {
  posts,
}