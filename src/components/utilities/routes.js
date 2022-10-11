import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import Root from "../Root/Root";
import Statistics from "../Statistics/Statistics";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        children: [
          {
            path: "home",
            element: <Header></Header>,
          },
        ],
      },
      {
        path: "quiz/:topicId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          );
        },
        element: <Quiz></Quiz>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
