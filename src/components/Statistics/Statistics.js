import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
      <div>
        <ResponsiveContainer width={"99%"} height={400}>
          <LineChart
            width={550}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
