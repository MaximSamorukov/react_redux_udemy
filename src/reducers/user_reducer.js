const user = (state = [], action) => {
  if (action.type === 'FETCH_USER') {
    return {
      user: action.payload || {},
    };
  };
  return state;
};

export {
  user,
}