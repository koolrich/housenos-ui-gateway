import * as ActionTypes from '../../config/ActionTypes';

export const initialState = {
    isAuthenticated: false,
    user: {},
    formErrorMessage: ''
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return applyLoginSuccess(state, action);

        case ActionTypes.LOGIN_FAILED:
            return applyLoginFailed(state, action);

        case ActionTypes.RESET_LOGIN:
            return applyResetLogin(state, action);

        default:
            return state;
    }
};

function applyLoginSuccess(state, action) {
    return { ...state, user: action.payload, isAuthenticated: true };
}

function applyLoginFailed(state, action) {
    return { ...state, formErrorMessage: action.payload, isAuthenticated: false };
}

function applyResetLogin(state, action) {
    return { ...state, formErrorMessage: action.payload, isAuthenticated: false, user: {} };
}