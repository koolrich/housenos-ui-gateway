const InputValidator = (inputName, inputValue, rules) => {
    let error = '';

    for (let rule in rules) {
        switch (rule) {
            case 'isRequired':
                if (!requiredValidator(inputValue)){
                    error = 'Please enter your ' + inputName; 
                }
                break;
            
            default: error='a';
        }
    }

    return error;
}

const requiredValidator = value => {
    return value.trim() !== '';	
}

export default InputValidator;