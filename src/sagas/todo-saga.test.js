import { put } from 'redux-saga/effects';
import {
  todosMock,
  responseTodosMock,
} from '../redux-test-helper';
import {
  todoIndexLoadSuccess,
  // todoIndexLoadFail,
} from '../redux/actions/todo-actions';
import { indexTodo } from './todo-saga';

let actualYield;
let expectedYield;

describe('todo saga', () => {
  // INDEX
  describe('indexTodo ', () => {
    describe('when data is fetched successfully', () => {
      let iterator = indexTodo();
      it('stores todos list in the state', () => {
        actualYield = iterator.next(responseTodosMock).value;
        expectedYield = put(todoIndexLoadSuccess(todosMock));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when data is not fetched successfully', () => {
      // FOR MOCK DATA IT WILL ALWAYS RETURN SUCCESSFULLY
      //let iterator = indexTodo();
      // it('triggers todoIndexLoadFail action', () => {
      //   actualYield = iterator.next().value;
      //   expectedYield = put(todoIndexLoadFail(`Cannot read property 'data' of undefined`));
      //   expect(actualYield).toEqual(expectedYield);
      // });
      // it('it should be done', () => {
      //   expect(iterator.next().done).toEqual(true);
      // });
    });
  });
});
