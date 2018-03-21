import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { shape, PropTypes } from 'prop-types';
import ModalTemplate from '../pages/ModalTemplate';

import './ShowBlogPost.css';

class ShowBlogPost extends Component {
  state = {
    title: '',
    body: '',
  }

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    history: shape({ push: PropTypes.func }),
    params: PropTypes.func,
    match: PropTypes.object
  };

  async getData() {
    const { id } = this.props.match.params;
    await axios.get(`/news/${id}`)
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
    axios.delete(`news/${id}`)
      .then(() => {this.props.history.push('/news');})
      .catch(err => {console.log(err);});
  }

  onEdit = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/news/${id}/edit`);
  }

  render() {
    return (
      <div className="blog-post ui container">
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Button as={Link} to='/news'>Return to News</Button>
        <ModalTemplate
          content="Are you sure want to delete this post?"
          click={this.onDelete}
          btnText="Delete Post"
        />
        <Button onClick={this.onEdit}>Edit Post</Button>
      </div>
    );
  }
}

export default ShowBlogPost;
