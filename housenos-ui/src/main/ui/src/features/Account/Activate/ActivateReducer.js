import * as ActionTypes from '../../../config/ActionTypes';

export const initialState = {
    activationSuccess: false,
    activationFailure: false
};

export const ActivateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ACTIVATE_ACCOUNT_SUCCESS:
            return {...state, activationSuccess: true}

        case ActionTypes.ACTIVATE_ACCOUNT_FAILURE:
            return {...state, activationFailure: true}

        case ActionTypes.RESET:
            return {...initialState}

        default:
            return state;
    }
};