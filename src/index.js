import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import reducer from './store/reducer/reduer';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';


//redux-thunk substiute
const logger = store => {
    var storeDispatch = store.dispatch,
        storeGetState = store.getState;

    return dispatch =>{

        return currentAction=>{

            // console.log(currentAction);

            if (typeof currentAction === 'function') {
                return currentAction(storeDispatch, storeGetState);
            }

            // console.log('[MIDDLEWARE] currentAction',currentAction);

            const resultAction = dispatch(currentAction);

            // console.log('[Middleware] next state',store.getState());

            return resultAction;

        }
    }

};

const store = createStore(reducer,applyMiddleware(logger));

const app = (
    <BrowserRouter basename='/burger-builder/'>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
