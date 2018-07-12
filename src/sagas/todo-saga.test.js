import { put, call } from 'redux-saga/effects';
import {
  todosMock,
  responseTodosMock,
} from '../redux-test-helper';
import {
  todoIndexLoadSuccess,
  todoIndexLoadFail,
  todoCreateFail,
  todoUpdateFail,
} from '../redux/actions/todo-actions';
import {
  indexTodo,
  createTodo,
  updateTodo,
} from './todo-saga';

let actualYield;
let expectedYield;

describe('todo saga', () => {

  // INDEX
  describe('indexTodo ', () => {
    describe('when data is fetched successfully', () => {
      let iterator = indexTodo();
      beforeAll(() => {
        window.localStorage = {
          getItem: () => JSON.stringify(responseTodosMock)
        };
      });

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
      let iterator = indexTodo();
      beforeAll(() => {
        window.localStorage = {
          getItem: () => null
        };
      });

      it('triggers todoIndexLoadFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(todoIndexLoadFail(`Cannot read property 'data' of null`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });

  // CREATE
  describe('createTodo ', () => {
    let newTodo = {
      id: 123,
      name: 'Test',
      completed: false,
    };
    let updatedTodos = {
      data: [
        ...responseTodosMock.data,
        newTodo,
      ],
    };

    describe('when todo is created successfully', () => {
      let iterator = createTodo(newTodo);
      beforeAll(() => {
        window.localStorage = {
          getItem: () => JSON.stringify(responseTodosMock),
          setItem: () => JSON.stringify(updatedTodos),
        };
      });

      it('creates new todo', () => {
        actualYield = iterator.next(updatedTodos).value;
        expectedYield = put(todoIndexLoadSuccess(updatedTodos.data));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when todo is not created successfully', () => {
      let iterator = createTodo(newTodo);
      beforeAll(() => {
        window.localStorage = {
          getItem: () => null,
          setItem: () => null,
        };
      });

      it('triggers todoCreateFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(todoCreateFail(`Cannot read property 'data' of null`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when there is no create payload', () => {
      let iterator = createTodo();
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });

  // UPDATE
  describe('updateTodo ', () => {
    let updatedTodo = {
      id: 2,
      name: 'Test',
      completed: false,
    };
    let updatedTodos = {
      data: [
        responseTodosMock.data[0],
        updatedTodo,
      ],
    };

    describe('when todo is updated successfully', () => {
      let iterator = updateTodo(updatedTodo);
      beforeAll(() => {
        window.localStorage = {
          getItem: () => JSON.stringify(updatedTodos),
          setItem: () => JSON.stringify(updatedTodos),
        };
      });

      it('updates new todo', () => {
        actualYield = iterator.next(updatedTodos).value;
        expectedYield = put(todoIndexLoadSuccess(updatedTodos.data));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when todo is not updated successfully', () => {
      let iterator = updateTodo(updatedTodo);
      beforeAll(() => {
        window.localStorage = {
          getItem: () => null,
          setItem: () => null,
        };
      });

      it('triggers todoUpdateFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(todoUpdateFail(`Cannot read property 'data' of null`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when there is no update payload', () => {
      let iterator = updateTodo();
      it('triggers todoUpdateFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(todoUpdateFail(`Cannot read property 'data' of null`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });
});
