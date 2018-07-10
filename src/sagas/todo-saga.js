import {
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  todoIndexLoadSuccess,
  todoIndexLoadFail,
} from '../redux/actions/todo-actions';
import { responseTodosMock } from '../redux-test-helper';

// INDEX
export function* indexTodo() {
  try {
    // Mock response - later on can be replaced with actual calls
     const response = responseTodosMock;
      yield put(todoIndexLoadSuccess(response.data));
  } catch (e) {
    // FOR MOCK DATA IT WILL ALWAYS RETURN SUCCESSFULLY
    yield put(todoIndexLoadFail(e.message));
  }
}

export function* indexTodoOnEnter() {
  yield takeEvery('todo/INDEX_ENTER', indexTodo);
}
