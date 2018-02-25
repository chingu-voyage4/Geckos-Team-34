import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmMessage = () => {
  return (
    <Message info>
      <Message.Header>Verify your email!</Message.Header>
    </Message>
  );
};

export default ConfirmMessage;
