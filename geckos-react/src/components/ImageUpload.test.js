import React from 'react';
import { shallow, mount } from 'enzyme';

import ImageUpload from './ImageUpload';

describe('<ImageUpload />', () => {
  let wrapper;
  const newFile = new File(['file contents'], "filename");

  beforeEach(() => {
    wrapper = shallow(<ImageUpload imgFile={jest.fn()} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render a file input and update the components state with file info', () => {
    const elem = wrapper.find('#file');

    elem.simulate('change', { target: { name: 'file', files: 'test.jpg' } });

    expect(elem.length).toBe(1);
    expect(wrapper.state().file).toEqual('test.jpg');
  });

  it('should render a button input', () => {
    const elem = wrapper.find('button');
    expect(elem.length).toBe(1);
  });

  it('should call onImageChange', () => {

  });

  it('should call sendFileInfo', () => {
    const spy = jest.fn();
    wrapper = shallow(<ImageUpload imgFile={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});

