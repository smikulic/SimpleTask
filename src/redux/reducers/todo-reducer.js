export const initialState = {
  todos: [],
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/INDEX_LOAD_SUCCESS':
      return {
        ...state,
        todos: [
          ...action.payload,
        ],
      };
    default:
      return state;
  }
}

export default todo;
