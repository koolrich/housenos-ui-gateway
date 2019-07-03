import InputValidator from './InputValidator';

describe('Input validator', () => {

    test('A field is required with a value', () => {
        expect(InputValidator('First name', 'Joe', {isRequired: true})).toBeFalsy();
    });

    test('A field is required without a value', () => {
        expect(InputValidator('First name', '', {isRequired: true})).toBeTruthy();
    });

    test('A field is not required with a value', () => {
        expect(InputValidator('First name', 'Joe', {})).toBeFalsy();
    });

    test('A field is not required without a value', () => {
        expect(InputValidator('First name', '', {})).toBeFalsy();
    });

})

