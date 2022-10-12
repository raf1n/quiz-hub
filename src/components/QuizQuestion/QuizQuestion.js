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
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center text-xl mx-auto mt-2 font-semibold sm:w-[100%] lg:w-[90%] mb-2">
            <div dangerouslySetInnerHTML={{ __html: question }}></div>
          </div>
          <EyeIcon
            title="Show Correct Answer"
            onClick={iconAnsShow}
            className="w-6 text-end mr-2 cursor-pointer"
          ></EyeIcon>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 text-center mb-2 p-4 lg:px-6">
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
