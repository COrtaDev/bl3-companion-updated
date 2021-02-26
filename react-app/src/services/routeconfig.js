import React from "react";

import { Redirect } from "react-router-dom";

import Main from "../components/main/Main";
import Following from "../components/follows/Following";
import Followers from "../components/follows/Followers";
import Content from "../components/main/main-subcomponents/Content";
import ProfileSubHeader from "../components/profile/ProfileSubHeader";
import Header from "../components/main/main-subcomponents/Header";
import Feed from "../components/main/main-subcomponents/Feed";
import SubHeader from "../components/main/main-subcomponents/SubHeader";
import HomeSubheader from "../components/home/HomeSubheader";

//TODO: We need to build the username into the profile path:
//! This could result in bugs if the user tries to navigate to another users profile...
//?We need to be careful and test it after the fact...
//*We are going to leave it as a simple /profile route for the time being...

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    component: Main,
    main: [
      {
        path: "/home",
        exact: true,
        active: "home",
        component: Content,
        content: [
          {
            path: "/home",
            exact: true,
            title: "Home",
            header: {
              component: Header,
              title: "Home",
            },
            subheader: {
              action: "Home",
              component: SubHeader,
              subheadercontent: [
                {
                  path: "/home",
                  exact: true,
                  component: HomeSubheader,
                },
              ],
            },
            feed: { action: "getLootDrops", component: Feed },
          },
        ],
      },
    ],
  },
  {
    path: "/comments",
    exact: true,
    component: Main,
    main: [
      {
        path: "/comments",
        exact: true,
        active: "comments",
        component: Content,
        content: [
          {
            path: "/hocommentsme",
            exact: true,
            title: "Comments",
            header: {
              component: Header,
              title: "Comments",
            },
            subheader: {
              action: "Comments",
              component: SubHeader,
              subheadercontent: [
                {
                  path: "/comments",
                  exact: true,
                  component: HomeSubheader,
                },
              ],
            },
            feed: { action: "getLootDrops", component: Feed },
          },
        ],
      },
    ],
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
  {
    path: "/profile",
    exact: true,
    component: Main,
    main: [
      {
        path: "/profile",
        active: "profile",
        component: Content,
        content: [
          {
            path: "/profile",
            title: "Profile",
            header: {
              component: Header,
              title: "Profile",
            },
            subheader: {
              action: "Profile",
              component: SubHeader,
              subheadercontent: [
                {
                  path: "/profile",
                  component: ProfileSubHeader,
                },
              ],
            },
            feed: { action: "getAllLootDropsForThisUser!!!", component: Feed },
          },
        ],
      },
    ],
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
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    main: () => (
      <Content
        headerTitle={"Profile"}
        subheader={<ProfileSubHeader />}
        feed={"getAllLootDropsForThisUser!!!"}
      />
    ),
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
