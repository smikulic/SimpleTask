import { fork } from 'redux-saga/effects';
import { indexTodoOnEnter, listenToCreateTodo } from './todo-saga';

export default function * root () {

  yield fork(indexTodoOnEnter);
  yield fork(listenToCreateTodo);
}
