import axios from 'axios';

import { baseUrl } from '../../../config/Config';
import { handleError } from '../../../util/errorhandler/ErrorHandler'
import * as ActionTypes from '../../../config/ActionTypes';

const doActivateSuccess = () => ({
    type: ActionTypes.ACTIVATE_ACCOUNT_SUCCESS,
    payload: ''
});

const doActivateFailure = (error) => ({
    type: ActionTypes.ACTIVATE_ACCOUNT_FAILURE,
    payload: error
});

export const doReset = () => ({
    type: ActionTypes.RESET,
    payload: ''
});

export const doActivate = (key) => async (dispatch) => {
    try {
        const result = await axios.get(baseUrl + `/activate?key=` + key)
        dispatch(doActivateSuccess());
    }
    catch (error) {
        let errorMessage = handleError(error);
        dispatch(doActivateFailure(errorMessage));
    }
}