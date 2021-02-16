import React from 'react';
import LeftSidebarMenu from './home-subcomponents/LeftSidebarMenu';
import RightSidebarMenu from './home-subcomponents/RightSidebarMenu';
import Header from './home-subcomponents/Header';
import Feed from './home-subcomponents/Feed';

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
