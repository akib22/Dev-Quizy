import PropTypes from 'prop-types';

export default function Card({ name, icon }) {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
