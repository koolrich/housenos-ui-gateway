import React from 'react';
import Registration from './Registration'
import { shallow } from 'enzyme';

describe('Registration tests', () => {
    it('renders without crashing', () => {       
        const registrationPage = shallow(<Registration />);
    });
})