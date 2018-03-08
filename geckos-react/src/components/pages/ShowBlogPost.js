import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { shape, PropTypes } from 'prop-types';

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
    match: PropTypes.object
  };

  onDelete = () => {
    const { id } = this.props.match.params;
    axios.delete('http://localhost:3000/news/' + id)
      .then( () => {this.props.history.push('/news');})
      .catch(err => {console.log(err);});
  }

  render() {

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
      </div>
    );
  }
}

export default ShowBlogPost;
