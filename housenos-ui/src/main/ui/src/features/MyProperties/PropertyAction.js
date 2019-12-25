import axios from 'axios';

import { baseUrl } from '../../config/Config';
import { handleError } from '../../util/errorhandler/ErrorHandler';
import * as ActionTypes from '../../config/ActionTypes';

export const doCreatePropertySuccess = (propertyGroup) => ({
    type: ActionTypes.CREATE_PROPERTY_SUCCESS,
    payload: propertyGroup
});

export const doCreatePropertyFailure = (error) => ({
    type: ActionTypes.CREATE_PROPERTY_FAILURE,
    payload: error
});

export const createPropertyGroup = (propertyGroup) => async (dispatch) => {
    try {
        const result = await axios.post(baseUrl + `/properties`, propertyGroup)
        dispatch(doCreatePropertySuccess(result.data));
    }
    catch (error) {
        let errorMessage = handleError(error);
        dispatch(doCreatePropertyFailure(errorMessage));
    }
}