import React from 'react';
import PropTypes from 'prop-types';

function LoadingMask({ loading = null }) {
  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <img alt="loading_indicator" src="/public/images/throbber.gif" />
    </div>
  );
}

LoadingMask.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingMask;
