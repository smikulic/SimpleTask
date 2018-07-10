import { fork } from 'redux-saga/effects';
import { indexTodoOnEnter } from './todo-saga';

export default function * root () {

  yield fork(indexTodoOnEnter);
}
