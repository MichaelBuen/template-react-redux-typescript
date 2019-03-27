import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IAllState } from './all-state';

import { loggedUser } from './logged-user/actions+reducers';
import { counter } from './counter/actions+reducers';

const reducers: {[name in keyof IAllState]: any} = {
    loggedUser, counter
};


export function reducersRoot(): Reducer<IAllState>
{
    return combineReducers<IAllState>(reducers);
}
