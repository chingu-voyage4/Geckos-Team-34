import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  message: string.isRequired
};

const InlineError = ({ message }) => {
  return (
    <span style={{ color: '#dc2f2f' }}>{ message }</span>
  );
};

InlineError.propTypes = propTypes;

export default InlineError;