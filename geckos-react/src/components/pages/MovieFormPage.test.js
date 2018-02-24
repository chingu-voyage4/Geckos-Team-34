import React from 'react';
import { shallow } from 'enzyme';

import MovieFormPage from './MovieFormPage';
import MovieForm from '../forms/MovieForm';

describe('<MovieFormPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MovieFormPage /> );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render a h1 title', () => {
    const elem = wrapper.find('h1');

    expect(elem.length).toBe(1);
    expect(elem.text()).toBe('Add a movie');
  });

  it('should render a MovieForm component', () => {
    const elem = wrapper.find(MovieForm);

    expect(elem.length).toBe(1);
  });
});
