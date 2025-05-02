import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/comman/header/Header";
import Sidebar from "./components/comman/sidebar/Sidebar";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [{ path: "", element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
