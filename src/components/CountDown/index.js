import PropTypes from 'prop-types';

export default function CountDown({ timeLimit }) {
  return (
    <div className="my-5 flex justify-center">
      <h1 className="text-fuchsia-600 font-bold text-2xl">{timeLimit}</h1>
    </div>
  );
}

CountDown.propTypes = {
  timeLimit: PropTypes.number.isRequired,
};
