import validate from './InputValidator';

describe('Input validator tests', () => {

    describe('required validator', () => {
        test('A field is required and a value is passed', () => {
            expect(validate('Joe', {isRequired: true})).toBeFalsy();
        });
    
        test('A field is required and no value is passed', () => {
            expect(validate('', {isRequired: true})).toBeTruthy();
        });
    
        test('A field is not required but a value is passed', () => {
            expect(validate('Joe', {})).toBeFalsy();
        });
    
        test('A field is not required and no value is passed', () => {
            expect(validate('', {})).toBeFalsy();
        });
    });
});

