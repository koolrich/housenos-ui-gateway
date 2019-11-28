import { useState } from 'react';

import { validateFormField, validateForm } from '../../util/validators/InputValidator';

const useForm = (callback, initialState) => {
    const [formFields, setFormFields] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedFormFields = { ...formFields };
        const [isFormValid, validatedFormFields] = validateForm(updatedFormFields);

        setFormFields(validatedFormFields);

        if (isFormValid) {
            callback();
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;

        const updatedFormFields = {...formFields};

        const updatedFormField = updatedFormFields[name];
        updatedFormField.value = event.target.value;
        updatedFormField.touched = true;

        updatedFormFields[name] = validateFormField(updatedFormField);

        setFormFields(updatedFormFields);
    };
    return {
        formFields, handleChange, handleSubmit
    };
}

export default useForm;