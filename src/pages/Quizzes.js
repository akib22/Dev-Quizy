import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Quiz from '../components/Quiz';
import Button from '../components/Button';
import { useQuiz } from '../context/quiz';
// import CountDown from '../components/CountDown';

const questions = [
  {
    no: 1,
    question: 'What is dom?',
    options: ['Think about options', 'Think about options 1'],
  },
  {
    no: 2,
    question: 'What is event loop?',
    options: ['testing', 'test question', 'hello man'],
  },
  {
    no: 3,
    question: 'What is Inheritance?',
    options: ['Getting something from parent', 'Think about options 1'],
  },
  {
    no: 4,
    question: 'What is event emitter?',
    options: ['which produce event', 'Think about options 1'],
  },
];

export default function QuizIntro() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { setTopic, setAnswer } = useQuiz();
  const history = useHistory();

  function onGiveUp() {
    setAnswer({});
    setTopic(null);
    return history.push('/topics');
  }

  function onSubmit() {
    return history.push('/result');
  }

  return (
    <div className="container">
      <h1 className="text-center my-5 font-bold text-xl">
        Question {currentQuestion + 1} out of {questions.length}
      </h1>

      {/* TODO: Add countdown timer */}
      {/* <CountDown timeLimit={30} /> */}

      <Quiz
        questionNo={currentQuestion + 1}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
      />

      <div className="flex justify-between items-baseline mt-3">
        <Button
          disabled={currentQuestion < 1}
          label="Previous"
          handler={() => setCurrentQuestion(currentQuestion - 1)}
        />
        {currentQuestion + 1 < questions.length ? (
          <Button label="Next" handler={() => setCurrentQuestion(currentQuestion + 1)} />
        ) : (
          <Button label="Submit" handler={() => onSubmit()} />
        )}
      </div>

      <div className="flex flex-col mt-6">
        <Button className="mb-3" label="Give Up" handler={() => onGiveUp()} />
      </div>
    </div>
  );
}
