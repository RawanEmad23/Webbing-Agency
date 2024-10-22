import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Component/Home/Home";
import Layout from "./Layout/Applayout";
import Allprojects from "./Component/Pages/Allprojects/Allprojects";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,  
    children: [
      {
        index: true, 
        element: <Home />  
      },
      {
        path: "allprojects", 
        element: <Allprojects></Allprojects>
      },
    ]
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}
