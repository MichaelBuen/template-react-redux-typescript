import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IAllState } from './all-state';

import { loggedUser } from './logged-user/actions+reducers';
import { counter } from './counter/actions+reducers';

export const reducersRoot = (): Reducer<IAllState> => combineReducers({
    loggedUser, counter
});