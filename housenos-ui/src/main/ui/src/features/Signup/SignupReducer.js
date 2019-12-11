import * as ActionTypes from '../../config/ActionTypes';

export const initialState = {
    signupSuccess: false,
    formErrorMessage: ''
};

export const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_UP_SUCCESS:
            return applySignupSuccess(state);

        case ActionTypes.SIGN_UP_FAILURE:
            return applySignupFailed(state, action);

        case ActionTypes.RESET_SIGN_UP:
            return applyResetSignup(state, action);

        default:
            return state;
    }
};

function applySignupSuccess(state) {
    return { ...state, signupSuccess: true };
}

function applySignupFailed(state, action) {
    return { ...state, formErrorMessage: action.payload, signupSuccess: false };
}

function applyResetSignup(state, action) {
    return { ...state, formErrorMessage: action.payload, signupSuccess: false };
}