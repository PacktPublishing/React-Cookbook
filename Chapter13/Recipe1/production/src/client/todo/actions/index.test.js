// Dependencies
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

// Action
import { fetchTodo } from './index';

// Action Types
import { FETCH_TODO } from './actionTypes';

// Configuring Store with Thunk middleware
const mockStore = configureMockStore([thunk]);

// Response Mock
const todoResponseMock = [
  {
    id: 1,
    title: 'Go to the Gym'
  },
  {
    id: 2,
    title: 'Dentist Appointment'
  },
  {
    id: 3,
    title: 'Finish homework'
  }
];

describe('fetchTodo action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch the Todo List', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();

      req.respondWith({
        status: 200,
        response: todoResponseMock
      });
    });

    const expectedActions = [
      {
        type: FETCH_TODO.request()
      },
      {
        type: FETCH_TODO.success(),
        payload: todoResponseMock
      }
    ];

    const store = mockStore({ todo: [] })

    return store.dispatch(fetchTodo()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
