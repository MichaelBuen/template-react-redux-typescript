import { compose, createStore, Store } from 'redux';

import { reducersRoot } from './reducers-root';

import { IAllState } from './all-state';

export function configureStore(): Store<IAllState>
{
    const devTools: any = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];

    return createStore(reducersRoot(), devTools && devTools());
}
