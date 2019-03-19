import React from 'react';

// To remove this warning:
// react-hot-loader.development.js:2462 React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
// See this:
// https://github.com/gaearon/react-hot-loader#react--dom
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { configureStore } from './store/configure';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';



function render(Component: React.ComponentType): void
{
    ReactDOM.render(
        <Provider store={configureStore()}>
            <Component/>
        </Provider>
        , document.getElementById('root'));

}


render(App as any);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
