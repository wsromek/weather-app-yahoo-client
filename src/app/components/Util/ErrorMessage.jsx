import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

function ErrorMessage({ error, onErrorReset }) {
  if (!error.message) return null;

  return (
    <Alert bsStyle="danger">
      <p>{error.message}</p>
      <p><Button bsStyle="warning" onClick={onErrorReset}>Close</Button></p>
    </Alert>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  onErrorReset: PropTypes.func.isRequired,
};

export default ErrorMessage;
