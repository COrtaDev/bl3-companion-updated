import React from "react";
import Main from "../components/main/Main";
import Following from "../components/follows/Following";
import Followers from "../components/follows/Followers";
import Content from "../components/main/main-subcomponents/Content";
import ProfileSubheader from "../components/profile/ProfileSubHeader";

export const sidebarRoutes = [
  {
    path: "/home",
    exact: true,
    active: "home",
    component: Content,
    props: {
      title: "Home",
      subheader: "Home Subheader Here!!!",
      feed: "getLootDrops",
    },
  },
  {
    path: "/likes",
    active: "likes",
    component: Content,
    props: {
      title: "Likes",
      subheader: "SOOO many LIKES!!!",
      feed: "getLikes",
    },
  },
  {
    path: "/comments",
    active: "comments",
    component: Content,
    props: {
      title: "Commets",
      subheader: "Look at all these COMMENTS!!!",
      feed: "getComments",
    },
  },
  {
    path: "/follows",
    active: "follows",
    component: Content,
    props: {
      title: "Follows",
      subheader: "makeTabs",
      feed: "getFollowsOrFollowing",
    },
  },
  {
    path: "/profile", //!this will need to be a param most likely...
    active: "profile",
    component: Content,
    props: {
      title: "Profile",
      subheader: ProfileSubheader,
      feed: "getAllLootDropsForThisUser!!!",
    },
  },
];

export default sidebarRoutes;
