import React from 'react';
import CommonInput from './CommonInput';
import { shallow } from 'enzyme';

describe('CommonInput tests', () => {
    const props = {
        value: 'value',
        type: 'text',
        onChange: jest.fn(),
        name: 'name',
        title: 'Title',
        hideLabel: false
    }

    let mountedCommonInputPage;
    const commonInputPage = () => {
        if (!mountedCommonInputPage) {
            mountedCommonInputPage = shallow(
                <CommonInput {...props} />
            );
        }
        return mountedCommonInputPage;
    }

    beforeEach(() => {
        mountedCommonInputPage = undefined;
    });

    describe('render with icon', () => {
        beforeEach(() => {
            props.addonType = 'prepend',
                props.icon = "user"
        });

        it('renders text input with an icon', () => {
            expect(commonInputPage().find('InputGroupAddon').length).toBe(1);
        })
    });

    describe('render without icon', () => {
        beforeEach(() => {
            props.icon = undefined
        });

        it('renders text input without an icon', () => {
            expect(commonInputPage().find('InputGroupAddon').length).toBe(0);
        })
    });

    describe('when change event is triggered', () => {
        const event = {
            preventDefault() { },
            target: { value: 'matched' }
        };

        it('calls the onChange handler on detecting change', () => {
            commonInputPage().find('Input').simulate('change', event);
            expect(props.onChange).toBeCalledWith(event);
        });
    });

    describe('label tag is hidden', () => {
        beforeEach(() => {
            props.hideLabel = true;
        });

        it('hides the label tag if hideLabel is set to true', () => {
            //console.log(commonInputPage().debug())
            expect(commonInputPage().find({hidden: true}).length).toBe(1);
        });
    });

    describe('label tag is displayed', () => {
        beforeEach(() => {
            props.hideLabel = false;
        });

        it('displays the label tag if hideLabel is set to false', () => {
            //console.log(commonInputPage().debug())
            expect(commonInputPage().find({hidden: false}).length).toBe(1);
        });
    });

    describe('input type is text', () => {
        beforeEach(() => {
            props.type = 'text';
        });

        it('sets the type attribute on the input element to text', () => {
            expect(commonInputPage().find({type: 'text'}).exists()).toBe(true);
        });

    });

    describe('input type is email', () => {
        beforeEach(() => {
            props.type = 'email';
        });

        it('sets the type attribute on the input element to email', () => {
            expect(commonInputPage().find({type: 'email'}).exists()).toBe(true);
        });

    });

    describe('input type is tel', () => {
        beforeEach(() => {
            props.type = 'tel';
        });

        it('sets the type attribute on the input element to tel', () => {
            expect(commonInputPage().find({type: 'tel'}).exists()).toBe(true);
        });

    });

    describe('input type is number', () => {
        beforeEach(() => {
            props.type = 'number';
        });

        it('sets the type attribute on the input element to number', () => {
            expect(commonInputPage().find({type: 'number'}).exists()).toBe(true);
        });

    });
});