import {
  put,
  takeEvery,
  take,
  call,
} from 'redux-saga/effects';
import {
  todoIndexLoadSuccess,
  todoIndexLoadFail,
  todoCreateFail,
} from '../redux/actions/todo-actions';
import { responseTodosMock } from '../redux-test-helper';

// INDEX
export function* indexTodo() {
  try {
    // Mock response - later on can be replaced with actual calls
     const response = JSON.parse(window.localStorage.getItem('simple_todos'));
      yield put(todoIndexLoadSuccess(response.data));
  } catch (e) {
    // FOR MOCK DATA IT WILL ALWAYS RETURN SUCCESSFULLY
    yield put(todoIndexLoadFail(e.message));
  }
}

export function* indexTodoOnEnter() {
  window.localStorage.removeItem('simple_todos');
  window.localStorage.setItem('simple_todos', JSON.stringify(responseTodosMock));
  yield takeEvery('todo/INDEX_ENTER', indexTodo);
}

// CREATE
export function* createTodo(payload) {
  try {
    let currentTodos = JSON.parse(window.localStorage.getItem('simple_todos'));
    currentTodos.data.push(payload);
    window.localStorage.setItem('simple_todos', JSON.stringify(currentTodos));
    const response = currentTodos;
     yield put(todoIndexLoadSuccess(response.data));
  } catch (e) {
    yield put(todoCreateFail(e.message));
  }
}

export function* listenToCreateTodo() {
  while (true) {
    const { payload } = yield take('todo/CREATE');
    if (payload) {
      yield call(createTodo, payload);
    }
  }
}
