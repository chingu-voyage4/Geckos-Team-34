import React from 'react';
import { mount, shallow } from 'enzyme';

import InlineError from '../messages/InlineError';

describe('<InlineError />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<InlineError message={'This is a test error'} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should display a error message', () => {
    const elem = wrapper.find('span');
    expect(elem.length).toBe(1);
    expect(elem.text()).toBe('This is a test error');
  });

});

