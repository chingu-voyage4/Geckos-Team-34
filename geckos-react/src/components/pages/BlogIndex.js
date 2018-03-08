import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShowBlogPost from './ShowBlogPost';

const API = "http://localhost:3000/news";

class BlogIndex extends Component {

  state = {
    blogId: [
      {
        _id: '',
        title: '',
        body: ''
      }
    ]
  }

  componentDidMount() {
    axios.get(API)
      .then(res => {
        this.setState(() => ({ blogId: res.data.posts }));
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const renderBlogs = this.state.blogId.map((blog, index) =>
      <div key={index}>
        <Link to={`news/${blog._id}`}>
          <ShowBlogPost id={blog._id} title={blog.title} body={blog.body} />
        </Link>
      </div>
    );
    return (
      <div className='ui container'>
        <Link to='/blog/new_post'>Create a new Post</Link>
        {renderBlogs}
      </div>
    );
  }
};

export default BlogIndex;
