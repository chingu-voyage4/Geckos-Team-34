import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { shape, PropTypes } from 'prop-types';
<<<<<<< HEAD
import ModalTemplate from '../pages/Modal';

import './ShowBlogPost.css';
=======
>>>>>>> a2031b7c8be295ce58138f98e0a889686b8613db

class ShowBlogPost extends Component {
  state = {
    title: '',
    body: ''
  }

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    history: shape({ push: PropTypes.func }),
<<<<<<< HEAD
    params: PropTypes.func,
    match: PropTypes.object
  };

  async getData() {
    const { id } = this.props.match.params;
    await axios.get('/news/' + id)
      .then(res => {
        this.setState(() => ({
          title: res.data.post.title,
          body: res.data.post.body
        }));
      });
  }

  componentDidMount() {
    this.getData();
  }

  onDelete = () => {
    const { id } = this.props.match.params;
    axios.delete('news/' + id)
      .then(() => {this.props.history.push('/news');})
=======
    match: PropTypes.object
  };

  onDelete = () => {
    const { id } = this.props.match.params;
    axios.delete('http://localhost:3000/news/' + id)
      .then( () => {this.props.history.push('/news');})
>>>>>>> a2031b7c8be295ce58138f98e0a889686b8613db
      .catch(err => {console.log(err);});
  }

  render() {
<<<<<<< HEAD
    return (
      <div className="blog-post ui container">
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Button as={Link} to='/news'>Return to news</Button>
        <ModalTemplate
          content="Are you sure want to delete this post?"
          click={this.onDelete}
          btnText="Delete Post"
        />
=======

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
        <Button secondary
          onClick={this.onDelete}
        >
          Delete post
        </Button>
        <Link to='/news'>Return to news</Link>
>>>>>>> a2031b7c8be295ce58138f98e0a889686b8613db
      </div>
    );
  }
}

export default ShowBlogPost;
