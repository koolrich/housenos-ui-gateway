import axios from 'axios';

import { baseUrl } from '../../config/Config';
import { handleError } from '../../util/errorhandler/ErrorHandler';
import * as ActionTypes from '../../config/ActionTypes';

export const doFetchRefDataSuccess = () => ({
    type: ActionTypes.FETCH_REF_DATA_SUCCESS,
    payload: ''
});

export const doFetchRefDataFailure = (error) => ({
    type: ActionTypes.FETCH_REF_DATA_FAILURE,
    payload: error
});

export const fetchRefData = () => async (dispatch) => {
    try {
        const result = await axios.get(baseUrl + `/reference-data`)
        dispatch(doFetchRefDataSuccess(result.data));
    }
    catch (error) {
        let errorMessage = handleError(error);
        dispatch(doFetchRefDataFailure(errorMessage));
    }
}