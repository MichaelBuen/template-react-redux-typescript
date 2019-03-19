import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { loggedUserReducer as loggedUser } from './logged-user/reducer';

import { IAllState } from './all-state';


const reducers: {[name in keyof IAllState]: any} = {
    loggedUser
};


export function reducersRoot(): Reducer<IAllState>
{
    return combineReducers<IAllState>(reducers);
}
