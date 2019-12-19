export const formState = {
    price: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true,
            minLength: 25
        }
    },
    tenure: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        },
        options: [{ value: '', display: 'Please select' },
        { value: '1 month', display: '1 month' },
        { value: '6 months', display: '6 months' },
        { value: '1 year', display: '1 year' },
        { value: 'Temporary', display: 'Temporary' }]
    },
    beds: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        },
        options: [{ value: '', display: 'Please select' },
        { value: 'studio', display: 'studio' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5', display: '5' },
        { value: '6', display: '6' },
        { value: '7', display: '7' },
        { value: '8', display: '8' }]
    },
    description: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: false
        }
    },
    baths: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        },
        options: [{ value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5', display: '5' },
        { value: '6', display: '6' },
        { value: '7', display: '7' },
        { value: '8', display: '8' }]
    },
    occupancy: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        },
        options: [{ value: '', display: 'Please select' },
        { value: 'Single', display: 'Single' }]
    },
    name: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        }
    },
    email: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true,
            isEmail: true
        }
    },
    phone: {
        value: '', valid: true, touched: false, errorMessage: '',
        validationRules: {
            isRequired: true
        }
    }
}