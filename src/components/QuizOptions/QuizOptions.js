import React from "react";

const QuizOptions = ({ option, validate }) => {
  return (
    <div className="mb-2 mt-2 flex justify-center">
      <div
        className="border pl-5 rounded-md w-[100%] lg:w-[650px] lg:h-[66px] h-[100%] border-blue-400-600 p-2 flex justify-center lg:justify-start shadow-md cursor-pointer"
        onClick={(e) => validate(e.target.innerText)}
      >
        <h1 className="flex justify-center items-center">{option}</h1>
      </div>
    </div>
  );
};

export default QuizOptions;
