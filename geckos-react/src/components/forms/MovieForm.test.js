import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieForm from './MovieForm';

describe('<MovieForm />', () => {
  let wrapper;
  const submit = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<MovieForm submit={submit} />);
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
    wrapper = mount(<MovieForm submit={jest.fn()} />);
    const elemMovie = wrapper.find('Radio[value="movie"]');
    const elemTV = wrapper.find('Radio[value="tv"]');

    elemTV.simulate('change', {
      target: { name: 'type', checked: true }
    });

    expect(elemMovie.length).toBe(1);
    expect(elemTV.length).toBe(1);
    expect(wrapper.state('type')).toEqual('tv');
  });

  it('should render a star rating input and update the components state.rating onRate', () => {
    wrapper = mount(<MovieForm submit={jest.fn()} />);
    const elem = wrapper.find('#rating').at(0);
    elem.find('RatingIcon').at(3).simulate('click');

    expect(wrapper.state('rating')).toEqual(4);
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

  it('should call submit', () => {
    wrapper.setState({ title: 'Test title', producers: 'producers',
      director: 'director', plot: "plot", genre: "action", runTime: '123', releaseDate: '2018' });

    wrapper.find('Form').simulate('submit');
    expect(submit).toHaveBeenCalled();
  });

  it('should show error messages with invalid inputs on submit', () => {
    const wrapper = mount(<MovieForm submit={submit} />);
    wrapper.setState({ title: '', producers: '',
      director: '', plot: "", genre: "", runTime: 'abc', releaseDate: 'abcd' });
    wrapper.find('Form').simulate('submit');
    const error = wrapper.find('span');

    expect(error.at(0).text()).toEqual('Invalid movie title');
    expect(error.at(1).text()).toEqual('Numbers only please');
    expect(error.at(2).text()).toEqual('Numbers only please');
    expect(error.at(3).text()).toEqual('Invalid genre type');
    expect(error.at(4).text()).toEqual('Invalid director name');
    expect(error.at(5).text()).toEqual('Invalid producer name');
    expect(error.at(6).text()).toEqual('Hey, you need to add a plot');
  });

  it('should call onInputChange', () => {
    const instance = wrapper.instance();
    instance.onInputChange({ target: { name: 'title', value: 'sometest' } });
    expect(wrapper.state().title).toBe('sometest');
  });

  it('should call getImgFile', () => {
    const instance = wrapper.instance();
    instance.getImgFile('local.jpg');
    expect(wrapper.state().uploadedImage).toBe('local.jpg');
  });

});
