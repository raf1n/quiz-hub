import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";

const QuizQuestion = ({ quizQuestion }) => {
  const { question, options, correctAnswer } = quizQuestion;
  console.log(quizQuestion);
  const validate = (text) => {
    if (text.split(" ").join("") === correctAnswer.split(" ").join("")) {
      alert("hurray");
    } else {
      alert("not");
    }
  };
  return (
    <div>
      <div className="border-2 rounded-lg shadow-md m-10">
        <h2 className="text-center text-xl mt-2 font-semibold">{question}</h2>
        <div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 text-center">
            {options.map((option, indx) => (
              <QuizOptions
                validate={validate}
                key={indx}
                option={option}
              ></QuizOptions>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
