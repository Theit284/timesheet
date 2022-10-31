import { Route, Routes } from "react-router";
import styled from "styled-components";
import Task from "../../feature/task/task";
// import Project from "../../feature/project/project";
import NotFound from "../NotFound/NotFound";
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MainView = () => {
  return (
    <MainContainer>
      <Routes>
        <Route  path="/" element={<NotFound />} />
        <Route path="home" element={<NotFound />} />
        <Route path="task" element={<Task />} />
        {/* <Route path="projects" element={<Project />} /> */}
      </Routes>
    </MainContainer>
  );
};

export default MainView;
