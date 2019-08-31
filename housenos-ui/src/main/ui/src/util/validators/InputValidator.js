const validate = (inputValue, rules) => {
    let error = '';

    for (let rule in rules) {
        switch (rule) {
            case 'isRequired': {
                if (!requiredValidator(inputValue)){
                    error = 'This field is required'; 
                    return error;
                }
            }

            default: {
                error='';
                return error;
            } 
        }
    }

    return error;
}

const requiredValidator = value => {
    return value.trim() !== '';	
}

export default validate;