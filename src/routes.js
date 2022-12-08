import { useRoutes } from "react-router-dom";

import { useRef, useState } from "react";
import { Login } from "./Component/Login";
import { Experience } from "./Component/Experience";
import { Layout } from "./Component/Layout";
import MiniProfile from "./Component/MiniProfile";
import SocialMedia from "./Component/SocialMedia";
import Profile from "./Component/Profile";

export default function Router() {
  const [taskData, setTaskData] = useState([]);

  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Login /> },
        {
          element: <Experience />,
          path:"experience"
        },
        {
          element: <Profile />,
          path:"/:nickname"
        },
      ],
    },
  ]);
  return element;
}
