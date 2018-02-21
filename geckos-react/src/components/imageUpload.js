import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ImageUpload extends Component {

    state = {
      file: '',
      imagePreviewUrl: ''
    }
  
    onImageChange = (e) => {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
         this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file)
    }
    testFn = () => {
      const listInfo = "hello";
      this.props.callbackFromParent(listInfo);
    }
     
    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
      }
  
      return (
        <Form.Field width={4}>   
            <input
            type="file" 
            onChange={this.someFn} />
            <button onClick={this.testFn}>Hello</button>
            {imagePreview}
        </Form.Field>
      )
    }
  }

export default ImageUpload;