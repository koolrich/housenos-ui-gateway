import axios from 'axios';

import { baseUrl } from '../../config/Config';
import { handleError } from '../../util/errorhandler/ErrorHandler';
import * as ActionTypes from '../../config/ActionTypes';

export const doLoginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
});

export const doLoginFailed = (error) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: error
});

export const doResetLogin = () => ({
    type: ActionTypes.RESET_LOGIN,
    payload: ''
});

export const doLogin = (username, password) => async (dispatch) => {
    const loginRequest = {
        username: username,
        password: password
    };

    try {
        const result = await axios.post(baseUrl + `/login`, loginRequest)
        dispatch(doLoginSuccess(result.data.claims));
    }
    catch (error) {
        let errorMessage = handleError(error);

        if (errorMessage === 'Bad credentials') {
            errorMessage = 'The username and password you entered is invalid.'
        }
        dispatch(doLoginFailed(errorMessage));
    }
}


