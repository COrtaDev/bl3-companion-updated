//* This is our centralized route config...
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.
// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

import Tutorial from "./components/tutorial/Tutorial";
import Home from "./components/home/Home";
import Likes from "./components/likes/Likes";
import Follows from "./components/follows/Follows";
import Following from "./components/follows/Following";
import Followers from "./components/follows/Followers";
import Comments from "./components/comments/Comments";

const routes = [
  {
    path: "/",
    component: Tutorial,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/likes",
    component: Likes,
  },
  {
    path: "/follows",
    component: Follows,
    routes: [
      {
        path: "/follows/following",
        component: Following,
      },
      {
        path: "/follows/follwers",
        component: Followers,
      },
    ],
  },
  {
    path: "/comments",
    component: Comments,
  },
];

export default routes;
