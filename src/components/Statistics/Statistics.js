import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizData = useLoaderData();
  const data = quizData.data;

  return (
    <div>
      <h1>Stat</h1>
    </div>
  );
};

export default Statistics;
