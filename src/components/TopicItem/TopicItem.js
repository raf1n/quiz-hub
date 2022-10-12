import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
const TopicItem = ({ topic }) => {
  const navigate = useNavigate();
  const { id, name, total, logo } = topic;
  const handleQuizTopic = (id) => {
    navigate(`quiz/${id}`);
  };
  return (
    <div className="card card-compact rounded-lg w-72 bg-base-100 shadow-xl">
      <figure>
        <img className="bg-black" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-emerald-900 text-center">
          Total Quiz: {total}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleQuizTopic(id)}
            className="btn btn-wide btn-outline"
          >
            <div className="flex items-center">
              <p>Start</p>
              <ChevronDoubleRightIcon className="w-4"></ChevronDoubleRightIcon>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
