import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ImageUpload extends Component {

    state = {
      file: '',
      imagePreviewUrl: '',
      testInfo: "hello"
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
      const info = "Hello";
      this.props.callbackFromParent(info);
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
            onChange={this.onImageChange} />
          <button onClick={this.props.callbackFromParent}>Hello</button>
          {imagePreview}
        </Form.Field>
      );
    }
}

ImageUpload.propTypes = {
  callbackFromParent: PropTypes.func
}

export default ImageUpload;