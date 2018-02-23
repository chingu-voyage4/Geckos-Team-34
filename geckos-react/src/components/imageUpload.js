import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ImageUpload extends Component {

    state = {
      file: '',
      imagePreviewUrl: ''
    }

    static propTypes = {
      imgFile: PropTypes.func
    }

    onImageChange = (e) => {
      e.preventDefault();

      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);

    }

    sendFileInfo = () => {
      const fileInfo = this.state.file;
      this.props.imgFile(fileInfo);
    };

    render() {
      const { imagePreviewUrl } = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} alt="user movie poster" />);
      }

      return (
        <Form.Field width={4}>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={this.onImageChange} />
          <button onClick={this.sendFileInfo}>Upload</button>
          {imagePreview}
        </Form.Field>
      );
    }
}

export default ImageUpload;
