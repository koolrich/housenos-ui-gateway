import * as ActionTypes from '../../config/ActionTypes';

export const initialState = {
    staticRefData:
    {
        federalStates: [
            { name: "Abia", towns: ["Umuahia"] },
            { name: "Adamawa", towns: ["Yola"] },
            { name: "Akwa Ibom", towns: ["Uyo"] },
            { name: "Anambra", towns: ["Awka"] },
            { name: "Bauchi", towns: ["Bauchi"] },
            { name: "Bayelsa", towns: ["Yenagoa"] },
            { name: "Benue", towns: ["Makurdi"] },
            { name: "Borno", towns: ["Maiduguri"] },
            { name: "Cross River", towns: ["Calabar"] },
            { name: "Delta", towns: ["Asaba"] },
            { name: "Ebonyi", towns: ["Abakaliki"] },
            { name: "Edo", towns: ["Benin City"] },
            { name: "Ekiti", towns: ["Ado-Ekiti"] },
            { name: "Enugu", towns: ["Enugu"] },
            { name: "Gombe", towns: ["Gombe"] },
            { name: "Imo", towns: ["Owerri"] },
            { name: "Jigawa", towns: ["Dutse"] },
            { name: "Kaduna", towns: ["Kaduna"] },
            { name: "Kano", towns: ["Kano"] },
            { name: "Katsina", towns: ["Katsina"] },
            { name: "Kebbi", towns: ["Birnin Kebbi"] },
            { name: "Kogi", towns: ["Lokoja"] },
            { name: "Kwara", towns: ["Ilorin"] },
            { name: "Lagos", towns: ["Ikeja"] },
            { name: "Nasarawa", towns: ["Lafia"] },
            { name: "Niger", towns: ["Minna"] },
            { name: "Ogun", towns: ["Abeokuta"] },
            { name: "Ondo", towns: ["Akure"] },
            { name: "Osun", towns: ["Oshogbo"] },
            { name: "Oyo", towns: ["Ibadan"] },
            { name: "Plateau", towns: ["Jos"] },
            { name: "Rivers", towns: ["Port Harcourt"] },
            { name: "Sokoto", towns: ["Sokoto"] },
            { name: "Taraba", towns: ["Jalingo"] },
            { name: "Yobe", towns: ["Damaturu"] },
            { name: "Zamfara", towns: ["Gusau"] }
        ],
        roles: {
            ADMIN: 'ROLE_ADMIN',
            USER: 'ROLE_USER',
            AGENT: 'ROLE_AGENT',
            LANDLORD: 'ROLE_LANDLORD'
        },
        propertyTypes: [
            'Studio', 'Flat', 'House', 'Service Apartment', 'Hotel'
        ]
    },
    dynamicRefData: [],
    loaded: false,
    errorMessage: ''
};

export const RefDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REF_DATA_SUCCESS:
            return { ...state, dynamicRefData: action.payload, loaded: true };

        case ActionTypes.FETCH_REF_DATA_FAILURE:
            return { ...state, errorMessage: action.payload, loaded: false };

        default:
            return state;
    }
};

export function getPropertyTypes(state) {
    const propertyTypesForDisplay = [{ value: '', display: 'Please select' }]
        .concat(state.refData.staticRefData.propertyTypes.map(propertyType => {
            return { value: propertyType, display: propertyType }
        }));

    return propertyTypesForDisplay
}

export function getFederalStates(state) {
    return state.refData.staticRefData.federalStates.map(federalState => {
        return { value: federalState.name, display: federalState.name }
    });
}
