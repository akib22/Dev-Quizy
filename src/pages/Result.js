import { useEffect, useState } from 'react';

import { useQuiz } from '../context/quiz';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

const result = {
  1: 2,
  2: 1,
  3: 1,
  4: 3,
};

export default function Result() {
  const [correctAns, setCorrectAns] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { answers, setTopic, setAnswer } = useQuiz();
  const percent =
    correctAns.length === 0 ? `0%` : `${(correctAns.length * 100) / Object.keys(result).length}%`;

  function calculateResult() {
    const answersArr = Object.entries(answers);
    setCorrectAns(answersArr.filter(([key, val]) => result[key] === val));
  }

  useEffect(() => {
    calculateResult();

    return () => {
      setTopic(null);
      setAnswer({});
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-center font-bold text-2xl text-blue-500 my-6">{percent}</h1>
      <h1 className="text-center font-bold text-2xl text-blue-500 my-6">
        Correct {correctAns.length} out of {Object.keys(result).length}
      </h1>
      <div className="flex justify-center items-baseline">
        <ButtonLink content="Take another quiz" path="/topics" />
        <span className="mx-2" />
        <Button label="Result Details" handler={() => setShowResult(!showResult)} />
      </div>
      {showResult && (
        <div className="mt-8 border p-5">
          <h1 className="font-semibold mb-3">
            {correctAns.length > 0
              ? 'You Choose correct answers following questions.'
              : 'You Choose incorrect answers for every questions.'}
          </h1>
          {correctAns.map(([key]) => (
            <span className="block" key={key}>
              Question {key}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
