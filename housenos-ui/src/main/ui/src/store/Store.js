import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {LoginReducer} from '../features/Login/LoginReducer'

export const Store = () => {
    const store = createStore(
        combineReducers({
            login: LoginReducer

        }),
        applyMiddleware(thunk, logger)
    );

    return store;

}