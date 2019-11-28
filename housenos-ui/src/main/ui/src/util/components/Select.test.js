import React from 'react';
import Select from './Select';
import { shallow } from 'enzyme';

describe('Select tests', () => {
    const props = {
        withIcon: true, addonType: 'prepend', icon: "city", value: 'Joe', onChange: jest.fn(),
        name: 'name', options: [{ value: 'test1', display: 'test1' }, { value: 'test2', display: 'test2' }]
    }

    it('renders select input with icon', () => {       
        const selectComponent = shallow(<Select {...props} />);
        expect(selectComponent.find('.input-group-text').length).toBe(1);
    });

    it('renders select input without icon', () => {
        props.withIcon = false;
        const selectComponent = shallow(<Select {...props} />);
        expect(selectComponent.find('.input-group-text').length).toBe(0);
    });

    it('renders select input with 2 options', () => {
        props.withIcon = false;
        const selectComponent = shallow(<Select {...props} />);
        expect(selectComponent.find('option').length).toBe(2);
    });
})