import { applyMiddleware, compose, createStore, Store } from 'redux';

import { reducersRoot } from './reducers-root';

import { IAllState } from './all-state';


import ReduxThunk from 'redux-thunk';

export function configureStore(): Store<IAllState>
{
    // const devTools: any = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];

    const middlewares = applyMiddleware(ReduxThunk);

    const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    const composed = composeEnhancers(middlewares);

    return createStore(reducersRoot(), composed);
}


// import { createStore, Store } from 'redux';
//
// import { reducersRoot } from './reducers-root';
//
// import { IAllState } from './all-state';
//
// export function configureStore(): Store<IAllState>
// {
//     const devTools: any = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];
//
//     return createStore(reducersRoot(), devTools && devTools());
// }
