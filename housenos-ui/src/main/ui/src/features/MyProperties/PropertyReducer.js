import * as ActionTypes from '../../config/ActionTypes';

export const initialState = {
    propertyGroup: {},
    errorMessage: ''
}

export const PropertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_PROPERTY_SUCCESS:
            console.log(JSON.stringify(action.payload));
            return { ...state, propertyGroup: action.payload };

        case ActionTypes.CREATE_PROPERTY_FAILURE:
            return { ...state, errorMessage: action.payload };

        default:
            return state;
    }
};