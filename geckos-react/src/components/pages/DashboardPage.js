import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import ConfirmMessage from '../messages/ConfirmMessage';

const propTypes = {
  isConfirmed: bool.isRequired
};

const DashboardPage = ({ isConfirmed }) => {
  return (
    <div className="ui container">
      { !isConfirmed && <ConfirmMessage /> }
      <h1>Welcome!</h1>
    </div>
  );
};

DashboardPage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
