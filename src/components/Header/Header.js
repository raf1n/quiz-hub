import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Quiz Hub
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A site to give headache to your idle brain.
              <br />
              There are a list of quizzes that will clear your concepts. Our
              quiz covers javascript fundamentals, advance concepts, array, DOM,
              React, CSS and other topics.
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded sm:h-96"
            src="https://img.freepik.com/free-vector/hands-holding-signs-with-cross-checkmark-wrong-right-cancel-approved-vote-person-flat-vector-illustration-exam-survey-answer-concept-banner-website-design-landing-web-page_74855-24796.jpg?w=740&t=st=1665474781~exp=1665475381~hmac=82c4e325a068227f3f2df272061ff3b3ab1fbb46abde065255ed067057f05152"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
