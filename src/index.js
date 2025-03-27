import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Auth from "./pages/Auth";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
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
);
