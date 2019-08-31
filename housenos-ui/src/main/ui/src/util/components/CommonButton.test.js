import React from 'react';
import CommonButton from './CommonButton';
import { shallow } from 'enzyme';

describe("Button tests", () => {
    const props = {
        onClick: jest.fn(),
        color: 'primary',
        className: '',
        block: false,
        size: 'sm'
    }

    let mountedButton;
    const buttonComponent = () => {
        if (!mountedButton) {
            mountedButton = shallow(
                <CommonButton {...props} />
            );
        }
        return mountedButton;
    }

    beforeEach(() => {
        mountedButton = undefined;
    });

    describe('renders color attribute', () => {
        beforeEach(() => {
            props.color="secondary"
        });

        it('renders a secondary button', () => {
            expect(buttonComponent().find({color: 'secondary'}).length).toBe(1);
        });
    });

    describe('size attribute', () => {
        beforeEach(() => {
            props.size = 'lg'
        });

        it('renders a button with the specified size', () => {
            expect(buttonComponent().find({size: 'lg'}).length).toBe(1);
        });
    });

    describe('onClick event', () => {
        it('renders a button with the specified size', () => {
            const onClickHandler = jest.fn();
            props.onClick = onClickHandler;
            buttonComponent().find('Button').simulate('click');
            expect(onClickHandler).toHaveBeenCalled();
        });
    });

    describe('block attribute', () => {
        beforeEach(() => {
            props.block = true
        });

        it('renders a button with the specified size', () => {
            expect(buttonComponent().find({block: true}).length).toBe(1);
        });
    });

});