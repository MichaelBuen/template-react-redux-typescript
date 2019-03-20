import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IAllState } from './all-state';

import { loggedUser } from './logged-user/reducer';
import { counter } from './counter/reducer';

const reducers: {[name in keyof IAllState]: any} = {
    loggedUser, counter
};


export function reducersRoot(): Reducer<IAllState>
{
    return combineReducers<IAllState>(reducers);
}
