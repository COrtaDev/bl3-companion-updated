import React from "react";
//* This is our centralized route config...
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.
// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
import ProtectedRoute from "../components/auth/ProtectedRoute";
import LogoutButton from "../components/auth/LogoutButton";
import Main from "../components/main/Main";
import Following from "../components/follows/Following";
import Followers from "../components/follows/Followers";
import Content from "../components/main/main-subcomponents/Content";
import Tutorial from "../components/tutorial/Tutorial";

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    component: Tutorial,
  },
  {
    path: "/home",
    exact: true,
    component: Main,
  },
  {
    path: "/comments",
    exact: true,
    component: Main,
  },
  {
    path: "/likes",
    exact: true,
    component: Main,
  },
  {
    path: "/follows",
    component: Main,
  },
];

export const sidebarRoutes = [
  {
    path: "/home",
    exact: true,
    active: "home",
    main: () => (
      <Content
        headerTitle={"Home"}
        subheader={"Home Subheader Here!!!"}
        feed={"getLootDrops"}
      />
    ),
  },
  {
    path: "/likes",
    // exact: true,
    active: "likes",
    main: () => (
      <Content
        headerTitle={"Likes"}
        subheader={"SOOO many LIKES!!!"}
        feed={"getLikes"}
      />
    ),
  },
  {
    path: "/comments",
    exact: true,
    active: "comments",
    main: () => (
      <Content
        headerTitle={"Commets"}
        subheader={"Look at all these COMMENTS!!!"}
        feed={"getComments"}
      />
    ),
  },
  {
    path: "/follows",
    // exact: true,
    active: "follows",
    main: () => (
      <Content
        headerTitle={"Follows"}
        subheader={"makeTabs"}
        feed={"getFollowsOrFollowing"}
        subfeeds={subFeeds}
        subroutes={followsRoutes}
      />
    ),
    routes: [
      {
        path: "/following",
        exact: true,
        component: Following,
      },
      {
        path: "//follwers",
        exact: true,
        component: Followers,
      },
    ],
  },
];
const followsRoutes = [
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
];
const subFeeds = [
  {
    path: "/following",
    exact: true,
    component: Following,
  },
  {
    path: "/follwers",
    exact: true,
    component: Followers,
  },
];
export default sidebarRoutes;
