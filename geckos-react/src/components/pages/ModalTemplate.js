import React, { Component } from 'react';
import { Modal, Icon, Button, Header } from 'semantic-ui-react';
import { func, string } from 'prop-types';

class ModalTemplate extends Component {
  state = { modalOpen: false }

  static propTypes = {
    btnText: string.isRequired,
    header: string,
    content: string.isRequired,
    click: func.isRequired
  }

  handleOpen = () => this.setState(() => ({ modalOpen: true }));

  handleClose = () => this.setState(() => ({ modalOpen: false }));

  render() {
    return (
      <Modal size='tiny'
        trigger={<Button onClick={this.handleOpen}>{this.props.btnText}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header content={this.props.header} />
        <Modal.Content>
          <h4>Hey,</h4>
          <p>{this.props.content}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='x' /> No
          </Button>
          <Button color='green' onClick={this.props.click} inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalTemplate;
