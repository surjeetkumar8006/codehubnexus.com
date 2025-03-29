import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
<<<<<<< HEAD
import Auth from "./pages/Auth";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
=======
import FullstackMERN from "./CoursePage/FullstackMERN";
import Auth from "./pages/Auth";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import DataAnalytics from "./CoursePage/DataAnalytics";
import WebDevelopmentBootcamp from "./CoursePage/WebDevelopmentBootcamp";
import FrontendDevelopment from "./CoursePage/FrontendDevelopment";
import JavaFullStackDevelopment from "./CoursePage/JavaFullStackDevelopment";
import BackendDevelopment from "./CoursePage/BackendDevelopment";
>>>>>>> recovered-files
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
<<<<<<< HEAD
=======
      { path: "/courses/fullstack-mern", element: <FullstackMERN /> },
      { path: "/courses/data-analytics", element: <DataAnalytics /> },
      { path: "/courses/web-development-bootcamp", element: <WebDevelopmentBootcamp /> },
      { path: "/courses/frontend-development", element: <FrontendDevelopment /> },
      { path: "/courses/java-full-stack-development", element: <JavaFullStackDevelopment /> },
      { path: "/courses/backend-development", element: <BackendDevelopment /> },
>>>>>>> recovered-files
      { path: "/about", element: <About /> },
      { path: "/login", element: <Auth /> },
      { path: "/signup", element: <Auth /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> recovered-files
