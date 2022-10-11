import React from "react";
import { useNavigate } from "react-router-dom";

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
        <p className="text-center font-medium">Total Quiz: {total}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleQuizTopic(id)}
            className="btn btn-wide btn-outline"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
