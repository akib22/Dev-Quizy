import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ value, label, name, handler }) {
  return (
    <div className="hover:text-blue-500">
      <input
        className="mr-2 cursor-pointer"
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={handler}
      />
      <label className="cursor-pointer" htmlFor={value}>
        {label}
      </label>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
