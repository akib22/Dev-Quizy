import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './button.css';

export default function Button({ content, path }) {
  const history = useHistory();

  return (
    <button className="btn-blue-rounded" type="button" onClick={() => history.push(path)}>
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
