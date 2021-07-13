import PropTypes from 'prop-types';
import { useQuiz } from '../../context/quiz';

import './quiz.css';
import RadioInput from '../Input';

export default function Quiz({ questionNo, question, options }) {
  const { setAnswer } = useQuiz();

  return (
    <div className="quiz-card">
      <h1 className="font-bold text-lg mb-3">
        {questionNo}. {question}
      </h1>
      {options.map((item, idx) => (
        <RadioInput
          key={item}
          value={idx + 1}
          name={questionNo}
          label={item}
          handler={() => setAnswer((state) => ({ ...state, [questionNo]: idx + 1 }))}
        />
      ))}
    </div>
  );
}

Quiz.propTypes = {
  questionNo: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
