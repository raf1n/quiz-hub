import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const QuizQuestion = ({ quizQuestion }) => {
  const { question, options, correctAnswer } = quizQuestion;
  const iconAnsShow = () => {
    toast(`Answer: ${correctAnswer}`, { autoClose: 1000 });
  };
  const validate = (text) => {
    if (text.split(" ").join("") === correctAnswer.split(" ").join("")) {
      toast.success("Correct Answer", { autoClose: 1000 });
    } else {
      toast.error("Incorrect Answer", { autoClose: 1000 });
    }
  };
  return (
    <div>
      <div className="border-2 rounded-lg shadow-md m-10">
        <div className="flex justify-between items-center">
          <h2 className="text-center text-xl mx-auto mt-2 font-semibold">
            {question}
          </h2>
          <EyeIcon
            onClick={iconAnsShow}
            className="w-6 text-end mr-2"
          ></EyeIcon>
        </div>
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
