import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { shape, PropTypes } from 'prop-types';
import ModalTemplate from '../pages/Modal';

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
    params: PropTypes.func,
  };

  static defaultProps = {
    match: ''
  }

  async getData() {
    const { id } = this.props.match.params;
    await axios.get('/news/' + id)
      .then((res) => {
        this.setState(() => ({
          title: res.data.post.title,
          body: res.data.post.body
        }));
      });
  }

  componentDidMount() {
    if(this.props.match !== '') {
      this.getData();
    }
  }

  onDelete = () => {
    const { id } = this.props.match.params;
    axios.delete('news/' + id)
      .then(() => {this.props.history.push('/news');})
      .catch(err => {console.log(err);});
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Button as={Link} to='/news'>Return to news</Button>
        <ModalTemplate
          content="Are you sure want to delete this post?"
          click={this.onDelete}
          btnText="Delete Post"
        />
      </div>
    );
  }
}

export default ShowBlogPost;
