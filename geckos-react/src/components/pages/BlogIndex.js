import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import BlogListContainer from './BlogListContainer';

class BlogIndex extends Component {

  state = {
    blogs: [
      {
        _id: '',
        title: '',
        body: ''
      }
    ]
  }

  getData = async() => {
    await axios.get('/news')
      .then(res => {
        this.setState(() => ({ blogs: res.data.posts }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const renderBlogs = this.state.blogs.map((blog) =>
      <div key={blog._id}>
        <BlogListContainer
          title={blog.title}
          titleLinkTo={`news/${blog._id}`}
          description={blog.body.substring(0, 200) + '...'}
          buttonLinkTo={`news/${blog._id}`}
        />
      </div>
    );
    return (
      <div className='ui container'>
        <Button secondary as={Link} to='/blog/new_post'>Create a new Post</Button>
        {renderBlogs}
      </div>
    );
  }
};

export default BlogIndex;
