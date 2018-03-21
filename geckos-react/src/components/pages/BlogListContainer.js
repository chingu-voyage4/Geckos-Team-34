import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './BlogListContainer.css';

const propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  titleLinkTo: string,
  buttonLinkTo: string.isRequired
};

const BlogListContainer = (props) => {
  return (
    <Item.Group>
      <Item className='four wide column item-list'>
        <Item.Image size='small' src='https://source.unsplash.com/collection/190727/200x200' />
        <Item.Content>
          <Item.Header as={Link} to={props.titleLinkTo}>{props.title}</Item.Header>
          <Item.Description>
            {props.description}
          </Item.Description>
        </Item.Content>
        <Item.Extra className='two wide column'>
          <Button as={Link} to={props.buttonLinkTo}primary floated='right'>
            Read More
          </Button>
        </Item.Extra>
      </Item>
    </Item.Group>
  );
};

BlogListContainer.propTypes = propTypes;
export default BlogListContainer;
