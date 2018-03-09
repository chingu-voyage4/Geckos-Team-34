import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

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

  componentDidMount() {
    axios.get('/news')
      .then(res => {
        this.setState(() => ({ blogs: res.data.posts }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const renderBlogs = this.state.blogs.map((blog, index) =>
      <div key={index}>
        <Link to={`news/${blog._id}`}>
          <h2 className='ui header'>{blog.title}</h2>
        </Link>
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
