import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';
import {State} from '../../types/state';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

//мокаем модуль, который в API браузера
jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];

//мокаем store
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.SingIn));
    expect(fakeHistory.location.pathname).toBe(AppRoute.SingIn);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.SingIn),
    ]);
  });

  it('should not to be redirect /lose because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.MyList});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.MyList);
  });
});
