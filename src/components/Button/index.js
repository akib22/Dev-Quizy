import PropTypes from 'prop-types';

export default function Button({ label, handler, disabled }) {
  return (
    <button
      disabled={disabled}
      className="btn-blue-rounded disabled:opacity-60 disabled:cursor-not-allowed last:mt-3"
      type="button"
      onClick={handler}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
