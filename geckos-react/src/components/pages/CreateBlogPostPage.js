import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from '../forms/CreateBlogPostForm';

class CreateBlogPostPage extends Component {
  submit = async(data) => {
    await axios.post('/news', data);
  }

  render() {
    return (
      <div className="ui container">
        <h1>Create a Blog Post</h1>
        <BlogPost submit={this.submit} />
      </div>
    );
  }
}

export default CreateBlogPostPage;
