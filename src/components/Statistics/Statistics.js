import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizData = useLoaderData();
  const data = quizData.data;

  return (
    <div>
      <h1 className="text-center mt-6 mb-6 text-3xl font-semibold">
        Statistics of Total Quiz Data
      </h1>
      <div className="flex justify-center">
        <LineChart
          width={800}
          height={600}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
