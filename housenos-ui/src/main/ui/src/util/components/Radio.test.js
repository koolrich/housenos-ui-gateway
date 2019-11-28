import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio input tests', () => {
    const props = {
        onChange: jest.fn(),
        name: 'name',
        options: [{value: 'User', display: 'User'}, {value:'Agent', display: 'Agent'}],
        displayInline: false
    }

    let mountedRadioWrapper;
    const radioInputWrapper = () => {
        if (!mountedRadioWrapper) {
            mountedRadioWrapper = shallow(
                <Radio {...props} />
            );
        }
        return mountedRadioWrapper;
    }

    beforeEach(() => {
        mountedRadioWrapper = undefined;
    });

    describe('render given number of options', () => {
        it('renders radio with 2 options', () => {
            expect(radioInputWrapper().find({type: 'radio'}).length).toBe(2);
        });
    });

    describe('input radio is checked when a selection is made', () => {
        beforeEach(() => {
            props.selectedOption = 'Agent'
        });

        it('displays one radio with the checked property', () => {
            //console.log(radioInputWrapper().debug())
            expect(radioInputWrapper().find({checked: true}).length).toBe(1);
        });
    });

    describe('inline display enabled', () => {
        beforeEach(() => {
            props.displayInline = true;
        });

        it('renders two radio buttons inline', () => {
            expect(radioInputWrapper().find({inline: true}).length).toBe(2);
        });
    });

    describe('inline display disabled', () => {
        beforeEach(() => {
            props.displayInline = false;
        });

        it('renders two radio buttons without inline display', () => {
            expect(radioInputWrapper().find({inline: false}).length).toBe(2);
        });
    });
});