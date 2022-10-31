import React from "react";
import styled from "styled-components";
import MainView from "./content/conten";
import Header from "./header/header";

import SideBar from "./sidebar/Sidebar";

const MainContent = styled.div`
  display: flex;
`;

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent>
        <SideBar />
        <MainView />
      </MainContent>
    </div>
  );
};

export default Layout;
