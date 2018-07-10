import { fork } from 'redux-saga/effects';
import {
  indexTodoOnEnter,
  listenToCreateTodo,
  listenToUpdateTodo,
} from './todo-saga';

export default function * root () {

  yield fork(indexTodoOnEnter);
  yield fork(listenToCreateTodo);
  yield fork(listenToUpdateTodo);
}
