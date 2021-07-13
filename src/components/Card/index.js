import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.css';
import { useQuiz } from '../../context/quiz';

// TODO: add icon for topic card
export default function Card({ name }) {
  const { setTopic } = useQuiz();

  return (
    <Link onClick={() => setTopic(name)} className="card" to="/quizzes">
      <span>{name}</span>
    </Link>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
