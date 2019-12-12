export const validate = (inputValue, rules) => {
    let error = '';

    for (let rule in rules) {
        switch (rule) {
            case 'isRequired':
                if (!requiredValidator(inputValue)) {
                    return 'This field is required';
                }

                break;

            case 'isEmail':
                if (!emailValidator(inputValue)) {
                    return 'Please enter a valid email';
                }

                break;

            default: {
                return '';
            }
        }
    }
    return error;
}

/**
 * Validates a given form field, sets any error message on the form field, sets it's valid attribute
 * @returns formField 
 * @param {*} formField 
 */
export const validateFormField = (formField) => {
    const errorMessage = validate(formField.value, formField.validationRules)

    if (errorMessage) {
        formField.valid = false;
        formField.errorMessage = errorMessage;
    } else {
        formField.valid = true;
    }

    return formField;
}

/**
 * Checks if a form is valid. A form is valid if all the individual form fields are valid
 * @param {*} formFields
 * @returns boolean 
 */
export const validateForm = (formFields) => {
    let isFormValid = true;
    for (let field in formFields) {
        let formField = formFields[field];
        if (!formField.hide) {
            const validatedFormField = validateFormField(formField);
            formField = validatedFormField;
            isFormValid = formField.valid && isFormValid;
        }
    }
    return [isFormValid, formFields];
}

const requiredValidator = value => {
    return value.trim() !== '';
}

const emailValidator = (value) => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(value).toLowerCase());
}
