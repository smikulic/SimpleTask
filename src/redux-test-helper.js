export const ACTION_UNKNOWN = {
  type: 'UNKNOWN',
};

export const todoMock = {
  id: '1',
  name: 'Task one',
  completed: false,
};

export const todoMock2 = {
  id: '2',
  name: 'Task two',
  completed: true,
};

export const todosMock = [todoMock, todoMock2];

export const responseTodosMock = {
  data: todosMock,
};
