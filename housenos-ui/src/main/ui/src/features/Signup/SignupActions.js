import axios from 'axios';

import { baseUrl } from '../../config/Config';
import { handleError } from '../../util/errorhandler/ErrorHandler';
import * as ActionTypes from '../../config/ActionTypes';

export const doSignupSuccess = () => ({
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload: ''
});

export const doSignupFailure = (error) => ({
    type: ActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const doReset = () => ({
    type: ActionTypes.RESET_SIGN_UP,
    payload: ''
});

export const doSignup = (user) => async (dispatch) => {
    try {
        const result = await axios.post(baseUrl + `/signup`, user)
        dispatch(doSignupSuccess(result.data));
    }
    catch (error) {
        let errorMessage = handleError(error);
        dispatch(doSignupFailure(errorMessage));
    }
}