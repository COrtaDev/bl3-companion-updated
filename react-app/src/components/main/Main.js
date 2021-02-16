import React from 'react';
import LeftSidebarMenu from './main-subcomponents/LeftSidebarMenu';
import RightSidebarMenu from './main-subcomponents/RightSidebarMenu';
import Header from './main-subcomponents/Header';
import Feed from './main-subcomponents/Feed';

const Main = () => {
  return (
    <>
      <LeftSidebarMenu />
      <div className={"columns"}>
        <div className={"column is-three-fifths"}>
          <Header />
          <Feed />
        </div>
      </div>
      <RightSidebarMenu />
    </>
  );
}

export default Main;
