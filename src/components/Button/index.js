import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({ content }) {
  return (
    <button className="btn-blue-rounded" type="button" onClick={() => {}}>
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
