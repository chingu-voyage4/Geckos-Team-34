import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';


class ImageUpload extends Component {

    state = {
        file: '',
        imagePreviewUrl: ''
    };   
    onImageChange = (e) => {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
         this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
    }
  
    reader.readAsDataURL(file)
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
            {imagePreview}
        </Form.Field>
      )
    }
  }

export default ImageUpload;