import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieForm from '../forms/MovieForm';
import Embed from 'semantic-ui-react';

describe('<MovieForm />', () => {
  let wrapper;
  const props =  () => {};
  beforeEach(() => {
    wrapper = shallow(<MovieForm submit={ props } />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render a form', () => {
    const elem = wrapper.find('Form');
    expect(elem.length).toBe(1);
  });

  it('should render a title input', () => {
    const elem = wrapper.find('#title');

    elem.simulate('change', { target: { name: 'title', value: 'title' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('title')).toEqual('title');
  });

  it('should render a release date input and update the components state.releaseDate value onChange', () => {
    const elem = wrapper.find('#releaseDate');

    elem.simulate('change', { target: { name: 'releaseDate', value: 2018 } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('releaseDate')).toEqual(2018);
  });

  it('should render a run time input and update the components state.runTime value onChange', () => {
    const elem = wrapper.find('#runTime');

    elem.simulate('change', { target: { name: 'runTime', value: 123 } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('runTime')).toEqual(123);
  });

  it('should render a type radio input and update the components state.type value onChange', () => {
    const elemMovie = wrapper.find('[value="movie"]');
    const elemTV = wrapper.find('[value="tv"]');


    elemMovie.simulate('change', {
      target: { name: 'type', checked: true }
    });

    expect(elemMovie.length).toBe(1);
    expect(elemTV.length).toBe(1);
    expect(wrapper.state('type')).toEqual('movie');
  });

  it('should render a star rating input', () => {
    const elem = wrapper.find('#rating');

  //  elem.simulate('select', { name: 'rating', target: { value: 0 } });
    elem.simulate('rate', { target: { value: 1 } });


    expect(wrapper.state('rating')).toEqual(1);
    expect(elem.length).toBe(1);
  });

  it('should render a genre input and update the components state.genre value onChange', () => {
    const elem = wrapper.find('#genre');

    elem.simulate('change', { target: { name: 'genre', value: 'action' } });

    expect(wrapper.state('genre')).toEqual('action');
    expect(elem.length).toBe(1);
  });

  it('should render a director text input and update the components state.director value onChange', () => {
    const elem = wrapper.find('#director');

    elem.simulate('change', { target: { name: 'director', value: 'director' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('director')).toEqual('director');
  });

  it('should render a producers text input and update the components state.producers value onChange', () => {
    const elem = wrapper.find('#producers');

    elem.simulate('change', { target: { name: 'producers', value: 'producers' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('producers')).toEqual('producers');
  });

  it('should render a plot description textarea', () => {
    const elem = wrapper.find('#plot');
    expect(elem.length).toBe(1);
  });

  it('should render a language dropdown input and update the components state.language value onChange', () => {
    const elem = wrapper.find('#language');

    elem.simulate('change', { target: { name: 'language', value: 'english' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('language')).toEqual('english');
  });

  it('should render a movie rating input and update the components state.movieRating value onChange', () => {
    const elem = wrapper.find('#movieRating');

    elem.simulate('change', { target: { name: 'movieRating', value: 'g' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('movieRating')).toEqual('g');
  });

});
