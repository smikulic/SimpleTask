import { ACTION_UNKNOWN, todosMock } from '../../redux-test-helper';
import { todo as reducer, initialState } from './todo-reducer';
import { todoIndexLoadSuccess } from '../actions/todo-actions';

const stateMock = {
  appState: {
    todos: todosMock,
  },
};

describe('todo reducer', () => {
  describe('with no given state and an unkown action', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, ACTION_UNKNOWN)).toEqual(initialState);
    });
  });
  describe('with a given state and an unkown action', () => {
    it('returns the given state', () => {
      const expectedState = stateMock;
      const currentState = stateMock;
      expect(reducer(currentState, ACTION_UNKNOWN)).toEqual(expectedState);
    });
  });
  describe('with no given state and a todoIndexLoadSuccess action', () => {
    it('returns the state with loaded todos list', () => {
      const action = todoIndexLoadSuccess(todosMock);
      const expectedState = {
        ...initialState,
        todos: todosMock,
      };
      const currentState = initialState;
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });
});
