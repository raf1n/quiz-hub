import React from "react";

const QuizOptions = ({ option, validate }) => {
  return (
    <div className="m-2 mb-5 mt-6 flex justify-center">
      <div
        className="border pl-5 rounded-md w-[100%] lg:w-[650px] lg:h-[66px] h-[100%] border-blue-400-600 p-2 flex justify-center lg:justify-start shadow-md"
        onClick={(e) => validate(e.target.innerText)}
      >
        <h1 className="flex justify-center items-center">{option}</h1>
      </div>
    </div>
  );
};

export default QuizOptions;
