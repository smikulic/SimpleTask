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

// CREATE
export const todoCreate = (payload) => ({
  type: 'todo/CREATE',
  payload,
})

export const todoCreateSuccess = (message) => ({
  type: 'todo/CREATE_SUCCESS',
  message,
})

export const todoCreateFail = (message) => ({
  type: 'todo/CREATE_FAIL',
  message,
})

// UPDATE
export const todoUpdate = (payload) => ({
  type: 'todo/UPDATE',
  payload,
})

export const todoUpdateSuccess = (message) => ({
  type: 'todo/UPDATE_SUCCESS',
  message,
})

export const todoUpdateFail = (message) => ({
  type: 'todo/UPDATE_FAIL',
  message,
})