import React, { Component } from 'react';
import{ Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  state = {
    data: {
      title: '',
      body: '',
    },
    errors: {},
    loading: false
  }

  static propTypes = {
    submit: PropTypes.func.isRequired
  }

  validate = (data) => {
    const errors = {};
    if(!validator.isLength( data.title, { min: 2, max: 32 })) errors.title = 'Invalid post title';
<<<<<<< HEAD
    if(!validator.isLength( data.body, { min: 2, max: 2000 })) errors.body = 'Invalid post content';
=======
    if(!validator.isLength( data.body, { min: 2, max: 32 })) errors.body = 'Invalid post content';
>>>>>>> a2031b7c8be295ce58138f98e0a889686b8613db

    return errors;
  }

  onInputChange = (e) => {
    const elem = e.target;

    this.setState(() => {
      return {
        data: {
          ...this.state.data, [elem.name]: elem.value
        }
      };
    });
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState(() => ({ errors }));

    if (Object.keys(errors).length === 0) {
      this.setState( () => ({ loading: true }));
      this.props.submit(this.state.data);
    }
  }

  render() {
    const { title, body, loading, errors } = this.state;
    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        <Form.Field width={6} error={!!errors.title}>
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onInputChange}
            value={title}
          />
          {
            errors.title && <InlineError message={errors.title} />
          }
        </Form.Field>
        <Form.Field width={10} error={!!errors.body}>
          <label htmlFor="body">Post Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            onChange={this.onInputChange}
            value={body}
          >
          </textarea>
          {
            errors.body && <InlineError message={errors.body} />
          }
        </Form.Field>
<<<<<<< HEAD
        <Button as={Link} to='/news'>Cancel</Button>
=======
        <Link to='/news'>Back to news</Link>
>>>>>>> a2031b7c8be295ce58138f98e0a889686b8613db
        <Button primary>Upload Post</Button>
      </Form>
    );
  }
};

export default BlogPost;
