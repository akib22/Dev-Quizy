/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useQuiz } from '../../context/quiz';

export default function ProtectedRoute({ component: Component, ...props }) {
  const { selectedTopic } = useQuiz();

  return (
    <Route
      {...props}
      render={(props) => (selectedTopic ? <Component {...props} /> : <Redirect to="/topics" />)}
    />
  );
}
