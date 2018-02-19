import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render h1 title', () => {
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
    expect(elem.text()).toBe('Home Page');
  });
});