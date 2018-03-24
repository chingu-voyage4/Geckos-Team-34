import React from 'react';
import { mount } from 'enzyme';

import ConfirmMessage from '../messages/ConfirmMessage';

describe('<ConfirmMessage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ConfirmMessage />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render a Message element', () => {
    const elem = wrapper.find('Message');
    expect(elem.length).toBe(1);
  });

  it('should render Message text', () => {
    const elem = wrapper.find('.header');
    expect(elem.length).toBe(1);
    expect(elem.text()).toBe('Verify your email!');
  });
});

