import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const Quiz = () => {
  const quizData = useLoaderData();
  const quizQuestionData = quizData.data.questions;

  return (
    <div>
      {quizQuestionData.map((quizQuestion, indx) => (
        <QuizQuestion key={indx} quizQuestion={quizQuestion}></QuizQuestion>
      ))}
    </div>
  );
};

export default Quiz;
