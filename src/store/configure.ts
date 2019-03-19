import { createStore, Store } from 'redux';

import { reducersRoot } from './reducers-root';

import { IAllState } from './all-state';

export function configureStore(): Store<IAllState>
{
    return createStore(reducersRoot());
}
