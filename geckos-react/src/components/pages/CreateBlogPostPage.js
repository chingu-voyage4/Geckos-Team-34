import React, { Component } from 'react';
import BlogPost from '../forms/CreateBlogPostForm';
import { shape, func } from 'prop-types';
import api from '../../api';

class CreateBlogPostPage extends Component {

  static propTypes = {
    history: shape({ push: func })
  }

  submit = async(data) => {
    await api.blog.store(data);
    this.props.history.push('/news');
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
