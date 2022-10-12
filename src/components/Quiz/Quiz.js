import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name } = quizData.data;
  const quizQuestionData = quizData.data.questions;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-3">
        Quiz: <span className="text-red-600">{name}</span>
      </h1>
      {quizQuestionData.map((quizQuestion, indx) => (
        <QuizQuestion key={indx} quizQuestion={quizQuestion}></QuizQuestion>
      ))}
    </div>
  );
};

export default Quiz;
