import React from "react";
//* This is our centralized route config...
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.
// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

import Tutorial from "../components/tutorial/Tutorial";
import Home from "../components/main/main-subcomponents/Home";
import Likes from "../components/likes/Likes";
import Follows from "../components/follows/Follows";
import Following from "../components/follows/Following";
import Followers from "../components/follows/Followers";
import Comments from "../components/comments/Comments";
import Content from "../components/main/main-subcomponents/Content";

export const sidebarRoutes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <Content headerTitle={"Home"} subheader={"Home Subheader Here!!!"} feed={"getLootDrops"}/>,
  },
  {
    path: "/likes",
    exact: true,
    component: Likes,
  },
  {
    path: "/follows",
    exact: true,
    component: Follows,
    routes: [
      {
        path: "/follows/following",
        exact: true,
        component: Following,
      },
      {
        path: "/follows/follwers",
        exact: true,
        component: Followers,
      },
    ],
  },
  {
    path: "/comments",
    exact: true,
    component: Comments,
  },
];

export default sidebarRoutes;
