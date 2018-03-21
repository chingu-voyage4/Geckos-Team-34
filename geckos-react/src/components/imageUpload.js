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
      // console.log(e.target.files[0]);
      const reader = new FileReader();
      const file = e.target.files;

      reader.onloadend = () => {
        this.setState(() => ({
          file: file,
          imagePreviewUrl: reader.result
        }));
      };
      reader.readAsDataURL(file[0]);
    }

    sendFileInfo = () => {
      const fileInfo = this.state.file;
      this.props.imgFile(fileInfo);
    }

    render() {
      const { imagePreviewUrl } = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} alt="user movie poster" />);
      }

      return (
        <Form.Field width={4}>
          <input
            name="file"
            id="file"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={this.onImageChange} />
          <button
            className="ui button"
            onClick={this.sendFileInfo} >
            <i className="upload icon"></i>Upload
          </button>
          {imagePreview}
        </Form.Field>
      );
    }
}

export default ImageUpload;
