import React from 'react';
import SelectInput from './SelectInput';
import { shallow } from 'enzyme';

describe('SelectInput tests', () => {
    const props = {
        withIcon: true, addonType: 'prepend', icon: "city", value: 'Joe', onChange: () => { },
        name: 'name', options: [{ value: 'test1', display: 'test1' }, { value: 'test2', display: 'test2' }]
    }

    it('renders select input with icon', () => {       
        const selectInputComponent = shallow(<SelectInput {...props} />);
        expect(selectInputComponent.find('.input-group-text').length).toBe(1);
    });

    it('renders select input without icon', () => {
        props.withIcon = false;
        const selectInputComponent = shallow(<SelectInput {...props} />);
        expect(selectInputComponent.find('.input-group-text').length).toBe(0);
    });

    it('renders select input with 2 options', () => {
        props.withIcon = false;
        const selectInputComponent = shallow(<SelectInput {...props} />);
        expect(selectInputComponent.find('option').length).toBe(2);
    });
})