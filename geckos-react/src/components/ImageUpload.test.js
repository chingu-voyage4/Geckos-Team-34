import React from 'react';
import { shallow, mount } from 'enzyme';

import ImageUpload from './ImageUpload';
import MovieForm from './forms/MovieForm';

describe('<ImageUpload />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <ImageUpload imgFile={() => {} } />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render a file input and update the components state with file info', () => {
    const newFile = new File(['file contents'], "filename");
    const newBlob = new Blob(['file contents'], { type : 'jpg/png' });


    const elem = wrapper.find('#file');
    elem.simulate('change', { name: 'file', target: { files: [newBlob] } });

    expect(elem.length).toBe(1);
    expect(wrapper.state('file')).toEqual( new Blob );
  });

  it('should render a button input and send file data ', () => {
    const elem = wrapper.find('button');

    expect(elem.length).toBe(1);
  });
});

