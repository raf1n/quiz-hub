import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const Quiz = () => {
  const quizData = useLoaderData();
  const quizes = quizData.data;
  return (
    <div>{<QuizQuestion key={quizes.id} quizes={quizes}></QuizQuestion>}</div>
  );
};

export default Quiz;
