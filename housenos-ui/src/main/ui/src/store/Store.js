import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { LoginReducer } from '../features/Login/LoginReducer';
import { SignupReducer } from '../features/Signup/SignupReducer';
import { ActivateReducer } from '../features/Account/Activate/ActivateReducer';
import { RefDataReducer } from '../service/refdata/RefDataReducer';
import { PropertyReducer } from '../features/MyProperties/PropertyReducer';

export const Store = () => {
    const store = createStore(
        combineReducers({
            login: LoginReducer,
            signup: SignupReducer,
            activate: ActivateReducer,
            refData: RefDataReducer,
            property: PropertyReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;

}