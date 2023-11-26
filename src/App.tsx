// import NewProject from "./components/NewProject";
import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
// const addProject = () => {};

function App(): JSX.Element | undefined {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    })};

    let content;
    if (projectsState.selectedProjectId === null) content = <NewProject />;
    else if (projectsState.selectedProjectId === undefined) {
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className='flex h-screen gap-8 my-8 mr-4'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
