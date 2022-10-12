import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TopicItem from "../TopicItem/TopicItem";

const Home = () => {
  const allTopicsData = useLoaderData();
  const allTopics = allTopicsData.data;
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center">
        <div
          className="grid gap-6 mb-8 
      md:grid-cols-2 lg:grid-cols-4 sm:mx-auto lg:mx-auto"
        >
          {allTopics.map((topic) => (
            <TopicItem key={topic.id} topic={topic}></TopicItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
