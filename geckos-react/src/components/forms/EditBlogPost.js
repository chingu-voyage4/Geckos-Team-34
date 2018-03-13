import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { PropTypes, shape } from 'prop-types';

class EditBlogPost extends Component {

  state = {
    title: '',
    body: ''
  }

  static propTypes = {
    match: PropTypes.object,
    history: shape({ push: PropTypes.func })
  }

  getData = async() => {
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

  onInputChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(() => ({ state }));
  }

  onSubmit = async() => {
    const { id } = this.props.match.params;
    const { title, body } = this.state;
    await axios.put(`/news/${id}`, { title, body })
      .then(() => {
        this.props.history.push(`/news/${id}`);
      });
  }

  render() {
    const { title, body, loading } = this.state;
    return (
      <Form loading={loading} onSubmit={this.onSubmit} className='ui container'>
        <h1>Edit Post</h1>
        <Form.Field width={6}>
          <label htmlFor='title'>Post Title</label>
          <input
            type='text'
            id='title'
            name='title'
            onChange={this.onInputChange}
            value={title}
          />
        </Form.Field>
        <Form.Field width={10}>
          <label htmlFor='content'>Content</label>
          <textarea
            type='text'
            id='body'
            name='body'
            onChange={this.onInputChange}
            value={body}
          >
          </textarea>
        </Form.Field>
        <Button as={Link} to='/news'>Cancel</Button>
        <Button primary>Update Post</Button>
      </Form>
    );
  }
}

export default EditBlogPost;
