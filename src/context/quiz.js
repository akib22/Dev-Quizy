/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();
QuizContext.displayName = 'QuizContext';

function QuizProvider({ topic = null, ...props }) {
  const [selectedTopic, setTopic] = useState(topic);
  const [answers, setAnswer] = useState({});

  return (
    <QuizContext.Provider value={{ selectedTopic, setTopic, setAnswer, answers }} {...props} />
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error(`useCounter must be used within a CounterProvider`);
  }

  return context;
}

export { QuizProvider, useQuiz };
