// INDEX
export const todoIndexEnter = () => ({
  type: 'todo/INDEX_ENTER',
})

export const todoIndexLoadSuccess = (payload) => ({
  type: 'todo/INDEX_LOAD_SUCCESS',
  payload,
})

export const todoIndexLoadFail = (message) => ({
  type: 'todo/INDEX_LOAD_FAIL',
  message,
})
